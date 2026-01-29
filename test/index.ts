import {getDefaultPrinter, getPaperSizeInfo, getPaperSizeInfoAll, getPrinters, print} from "../dist";
import {join} from "node:path";
import {Chromaticity, MediaSizeName, MediaTray, OrientationRequested, Scaling, Sides, Subset} from "../dist/types";


async function rest() {
    // getPaper
    let DefaultPrinterName = await getDefaultPrinter();
    console.log("获取默认打印机名称:", JSON.stringify(DefaultPrinterName));
}

rest();
(async () => {
    // 获取默认打印机支持的纸张大小
    let DefaultPrinterPaperSizeInfo = await getPaperSizeInfo();
    console.log("默认打印机:", JSON.stringify(DefaultPrinterPaperSizeInfo));
    // 获取指定打印机支持的纸张大小
    let PrinterPaperSizeInfo = await getPaperSizeInfo({printer: ""});
    console.log("默认打印机纸张:", JSON.stringify(PrinterPaperSizeInfo));

    let PrinterPaperSizeInfos = await getPaperSizeInfoAll();
    console.log("所有打印机纸张:", JSON.stringify(PrinterPaperSizeInfos));

    // getPaper
    let DefaultPrinterName = await getDefaultPrinter();
    console.log("获取默认打印机名称:", JSON.stringify(DefaultPrinterName));
    // 获取所有打印机名称信息
    let AllPrinterName = await getPrinters();
    console.log("系统所有打印机:", JSON.stringify(AllPrinterName));
    print({
        printer: '',
        pdf: join(__dirname, "mlmdflr.pdf"),
        pages: "1",
        subset: Subset.ODD,
        orientation: OrientationRequested.LANDSCAPE,
        scale: Scaling.SCALE_TO_FIT,
        monochrome: Chromaticity.MONOCHROME,
        side: Sides.ONE_SIDED,
        bin: MediaTray.BOTTOM,
        paperSize: MediaSizeName.ISO_A4,
        printDialog: true,
        copies: 2
    })
})();

