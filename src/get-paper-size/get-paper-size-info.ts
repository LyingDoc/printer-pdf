import {paperSizeInfoOptions, PaperSizesInfoType, PrinterActions,} from "../types";
import {run} from "../utils/java-util";


/**
 * 获取指定打印机所支持的纸张大小,如果想获取默认打印机纸张大小 options.printer 请使用空字符
 * Get the paper size supported by the specified printer, if you want to get the default printer paper size options.printer Please use a blank character
 */
export const getPaperSizeInfo = async (
    options: paperSizeInfoOptions = {printer: ""},
): Promise<PaperSizesInfoType> => {
    try {
        let result = await run({
            arg: PrinterActions.SIZEINFO,
            printerName: options.printer,
        });
        return JSON.parse(result);
    } catch (error) {
        throw error;
    }
};

/**
 * 获取所有打印机所支持的纸张大小
 * Get the paper size supported by all printers
 * @returns all paperSize
 */
export const getPaperSizeInfoAll = async (
    options: Omit<paperSizeInfoOptions, "printer"> = {},
): Promise<PaperSizesInfoType[]> => {
    try {
        let result = await run({
            arg: PrinterActions.SIZEINFOS,
        });
        return JSON.parse(result);
    } catch (error) {
        throw error;
    }
};
