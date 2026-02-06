// 直接打印
import fs from "fs";
import {PrinterActions, PrintOptions} from "../types";
import {printRun} from "../utils/java-util";

export default async function print(printer: PrintOptions): Promise<void> {
    const pdf = printer.pdf;
    if (!pdf) throw "No PDF specified";
    if (!fs.existsSync(pdf)) throw "No such file";
    await printRun(
        {
        arg: PrinterActions.PRINT,
        },
        printer,
    );
}
