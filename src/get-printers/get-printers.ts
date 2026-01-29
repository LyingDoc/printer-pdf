import {Printer, PrinterActions} from "../types";
import {run} from "../utils/java-util";

async function getPrinters(): Promise<Printer[]> {
    try {
        let result = await run({
            arg: PrinterActions.PRINTERS,
        });
        return JSON.parse(result);
    } catch (error) {
        throw error;
    }
}

export default getPrinters;
