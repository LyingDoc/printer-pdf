import {Printer, PrinterActions} from "../types";
import {run} from "../utils/java-util";

async function getDefaultPrinter(): Promise<Printer> {
  try {
    let result = await run({
      arg: PrinterActions.DEFAULT,
    });
    return JSON.parse(result);
  } catch (error) {
    throw error;
  }
}

export default getDefaultPrinter;
