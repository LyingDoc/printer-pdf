export interface Printer {
  deviceID: string;
  printerName: string;
}

export interface paperSizeInfoOptions {
  printer?: string;
}

export interface PaperSizesInfoType {
  printerName: string;
  taskNumber: number;
  status: number;
  statusMsg: string;
  paperSizes: PaperSizeType[];
}

export interface PaperSizeType {
  height: number;
  kind: number;
  paperName: string;
  rawKind: number;
  width: number;
}

// 纸张大小
export enum MediaSizeName {
  ISO_A0 = "iso-a0",
  ISO_A1 = "iso-a1",
  ISO_A2 = "iso-a2",
  ISO_A3 = "iso-a3",
  ISO_A4 = "iso-a4", // 默认
  ISO_A5 = "iso-a5",
  ISO_A6 = "iso-a6",
  ISO_A7 = "iso-a7",
  ISO_A8 = "iso-a8",
  ISO_A9 = "iso-a9",
  ISO_A10 = "iso-a10",
  ISO_B0 = "iso-b0",
  ISO_B1 = "iso-b1",
  ISO_B2 = "iso-b2",
  ISO_B3 = "iso-b3",
  ISO_B4 = "iso-b4",
  ISO_B5 = "iso-b5",
  ISO_B6 = "iso-b6",
  ISO_B7 = "iso-b7",
  ISO_B8 = "iso-b8",
  ISO_B9 = "iso-b9",
  ISO_B10 = "iso-b10",
  JIS_B0 = "jis-b0",
  JIS_B1 = "jis-b1",
  JIS_B2 = "jis-b2",
  JIS_B3 = "jis-b3",
  JIS_B4 = "jis-b4",
  JIS_B5 = "jis-b5",
  JIS_B6 = "jis-b6",
  JIS_B7 = "jis-b7",
  JIS_B8 = "jis-b8",
  JIS_B9 = "jis-b9",
  JIS_B10 = "jis-b10",
  ISO_C0 = "iso-c0",
  ISO_C1 = "iso-c1",
  ISO_C2 = "iso-c2",
  ISO_C3 = "iso-c3",
  ISO_C4 = "iso-c4",
  ISO_C5 = "iso-c5",
  ISO_C6 = "iso-c6",
  NA_LETTER = "na-letter",
  NA_LEGAL = "na-legal",
  EXECUTIVE = "executive",
  LEDGER = "ledger",
  TABLOID = "tabloid",
  INVOICE = "invoice",
  FOLIO = "folio",
  QUARTO = "quarto",
  JAPANESE_POSTCARD = "japanese-postcard",
  JAPANESE_DOUBLE_POSTCARD = "oufuko-postcard",
  A = "a",
  B = "b",
  C = "c",
  D = "d",
  E = "e",
  ISO_DESIGNATED_LONG = "iso-designated-long",
  ITALY_ENVELOPE = "italian-envelope",
  MONARCH_ENVELOPE = "monarch-envelope",
  PERSONAL_ENVELOPE = "personal-envelope",
  NA_NUMBER_9_ENVELOPE = "na-number-9-envelope",
  NA_NUMBER_10_ENVELOPE = "na-number-10-envelope",
  NA_NUMBER_11_ENVELOPE = "na-number-11-envelope",
  NA_NUMBER_12_ENVELOPE = "na-number-12-envelope",
  NA_NUMBER_14_ENVELOPE = "na-number-14-envelope",
  NA_6X9_ENVELOPE = "na-6x9-envelope",
  NA_7X9_ENVELOPE = "na-7x9-envelope",
  NA_9X11_ENVELOPE = "na-9x11-envelope",
  NA_9X12_ENVELOPE = "na-9x12-envelope",
  NA_10X13_ENVELOPE = "na-10x13-envelope",
  NA_10X14_ENVELOPE = "na-10x14-envelope",
  NA_10X15_ENVELOPE = "na-10x15-envelope",
  NA_5X7 = "na-5x7",
  NA_8X10 = "na-8x10",
}

// 设置色彩
export enum Chromaticity {
  MONOCHROME = "monochrome", // 黑白（默认）
  COLOR = "color", // 色彩
}

// 设置双面打印
export enum Sides {
  ONE_SIDED = "one-sided", // 单面（默认）
  TWO_SIDED_LONG_EDGE = "two-sided-long-edge", // 双面长边
  TWO_SIDED_SHORT_EDGE = "two-sided-short-edge", // 双面短边
}

// 墨盒类型
export enum MediaTray {
  TOP = "top", // 顶部纸匣
  MIDDLE = "middle", // 中间纸匣
  BOTTOM = "bottom", // 底部纸匣
  ENVELOPE = "envelope", // 信封送纸器
  MANUAL = "manual", // 手动进纸托盘
  LARGE_CAPACITY = "large-capacity", // 大容量进纸器
  MAIN = "main", // 主纸匣 (默认)
  SIDE = "side", // 侧边进纸托盘
}

// 设置打印机方向
export enum OrientationRequested {
  PORTRAIT = "portrait", // 纵向: 纸张短边在上 (标准纵向)（默认）
  LANDSCAPE = "landscape", // 横向: 纸张长边在上 (顺时针旋转 90 度)
  REVERSE_LANDSCAPE = "reverseLandscape", // 反向横向: 逆时针旋转 90 度
  REVERSE_PORTRAIT = "reversePortrait", // 反向纵向: 旋转 180 度
}

export enum Scaling {
  ACTUAL_SIZE = "actual-size", // 反向纵向: 旋转 180 度
  SHRINK_TO_FIT = "shrink-to-fits", // 缩小以适应: 仅当 PDF 页面大于纸张时缩小，保持长宽比（默认）
  STRETCH_TO_FIT = "stretch-to-fits", // 拉伸以适应: 强制填满纸张，可能会导致图像拉伸变形
  SCALE_TO_FIT = "scale-to-fits", // 缩放以适应: 无论大小，均缩放至完全符合纸张可打印区域
}

export enum Subset {
  ALL = "all", // 全部（默认）
  ODD = "odd", // 偶数
  EVEN = "even", // 奇数
}

export enum PrinterActions {
  DEFAULT = "default",
  PRINTERS = "printers",
  SIZEINFO = "sizeInfo",
  SIZEINFOS = "sizeInfos",
  PRINT = "print",
}

export interface Options {
  arg: PrinterActions;
  printerName?: string;
}

export interface PrintOptions {
  printer?: string; // 打印机名称
  pdf: string; // 文件路径
  pages?: string; // 打印页面范围
  subset?: Subset; // 子集
  orientation?: OrientationRequested;
  scale?: Scaling; // 缩放
  monochrome?: Chromaticity; // 色彩打印
  side?: Sides; //双面打印
  bin?: MediaTray; // 墨盒类型
  paperSize?: MediaSizeName; // 打印纸张
  printDialog?: boolean; // 是否弹窗打印（默认fals）
  copies?: number; // 打印份数（默认为1）
}