import {join} from "node:path";
import {Options, PrintOptions} from "../types";

// 尝试加上 .js 显式后缀
import {fixPathForAsarUnpack} from "electron-util/node";
import * as os from "node:os";
import findJavaHome from 'find-java-home';

const {JavaCaller} = require("java-caller");

let path = join(__dirname, "printer.jar");
let fixPath = fixPathForAsarUnpack(path);
const javaArgs = ["-Dfile.encoding=UTF-8"];
// 解决linux下打印机权限问题，jar弹窗需要安装libatk-wrapper-java
if (os.platform() == "linux") {
    javaArgs.push("-Djavax.accessibility.assistive_technologies=' '")
}

const Parameter = `${fixPath}`;


/**
 * 核心：封装手动 Promise 逻辑
 * 解决 TS 顶层 await 限制
 */
async function initJava(): Promise<any> {
    let instance: any = null;
    // 手动包装 Promise 以适配 async/await
    let homePath = await new Promise<string>((resolve, reject) => {
        findJavaHome({allowJre: true}, (err, home) => {
            if (err || !home) {
                reject(err || new Error("Java Home not found"));
            } else {
                resolve(home);
            }
        });
    });

    instance = new JavaCaller({
        jar: Parameter,
        mainClass: "com.tk.lyin.Printers", // 确保去掉了末尾逗号
        additionalJavaArgs: javaArgs,
    });
    if (homePath) {
        const exeName = os.platform() === "win32" ? "java.exe" : "java";
        // 手动指定执行路径
        instance.javaExecutable = fixPathForAsarUnpack(join(homePath, 'bin', exeName));
    }
    return instance;
}


export const run = async (printer: Options): Promise<string | "{ }"> => {
    const args: string[] = [];
    args.push(printer.arg);
    if (printer.printerName) {
        args.push(printer.printerName);
    }
    const java = await initJava();
    const {status, stdout, stderr} = await java.run(args);
    return stdout ? stdout.trim() : "{}";
};

export const printRun = async (
    printer: Options, print: PrintOptions
): Promise<void> => {
    const java = await initJava();
    const base64Str = Buffer.from(JSON.stringify(print).trim()).toString('base64');
    const {status, stdout, stderr} = await java.run([printer.arg, base64Str])
};

