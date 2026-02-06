// 直接打印
import fs from "fs";
import {PrinterActions, PrintOptions} from "../types";
import {printRun} from "../utils/java-util";

export default async function print(pinter: PrintOptions): Promise<void> {
    const pdf = pinter.pdf;
    if (!pdf) throw "No PDF specified";
    if (!fs.existsSync(pdf)) throw "No such file";
    await printRun(
        {
        arg: PrinterActions.PRINT,
        },
        pinter,
    );
}
