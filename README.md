<!-- Markdown lint-disable MD033 -->

# printer-pdf

`printer-pdf` 是一个 Node.js & electron 打印库，该库集成 [
`node-java-caller`](https://github.com/nvuillam/node-java-caller) 运行插件， 执行封装项目[
`printer-java`](https://github.com/LyingDoc/printer) 中的 jar 包实现的项目。

[![Version](https://img.shields.io/npm/v/printer-pdf.svg)](https://www.npmjs.com/package/printer-pdf)
[![GitHub stars](https://img.shields.io/github/stars/LyingDoc/printer-pdf?label=Star&maxAge=2592000)](https://github.com/LyingDoc/printer-pdf/stargazers)
[![Downloads/week](https://img.shields.io/npm/dw/printer-pdf.svg)](https://www.npmjs.com/package/printer-pdf)
[![Downloads/total](https://img.shields.io/npm/dt/printer-pdf.svg)](https://npmjs.org/package/printer-pdf)<!-- gh-dependents-info-used-by-start -->
[![GitHub contributors](https://img.shields.io/github/contributors/LyingDoc/printer-pdf.svg)](https://gitHub.com/LyingDoc/printer-pdf/graphs/contributors/)
[![License](https://img.shields.io/npm/l/printer-pdf.svg)](https://github.com/LyingDoc/printer-pdf/blob/master/LICENSE)

轻量级跨平台 TypeScript 模块，可**轻松地从 Node.js 代码调用获取打印机相关信息**。

> [!NOTE]
> - 如果系统中未获取到所需的 Java 版本，则**自动安装**
> - 系统**是异步执行**，所有方法均返回 Promise 对象。
> - **macOS、Linux** 平台(运行原理非Windows平台，按照Unix平台执行),必须安装[
    `cpus`模块](https://openprinting.github.io/cups/index.html),否则会报错

- 兼容 **JDK 和 JRE 8（默认JRE 8） 到 21** 版本
- 支持 **Windows、macOS、Linux** 平台
- 支持 **Node.js 14 到 20+** 版本
- 支持 **打印 PDF 文件**
- 支持 **获取打印机列表**
- 支持 **设置打印参数**
- 支持 **获取纸张大小列表**

## Installation

```shell
npm install printer-pdf --save   #npm安装依赖

yarn add printer-pdf            #yarn安装依赖
```

## Usage [Example](https://github.com/LyingDoc/pdf-printer/blob/master/test/index.ts)

- TypeScript 用法

```typescript
import {
    getPaperSizeInfoAll,
    getPaperSizeInfo,
    getDefaultPrinter,
    print,
    getPrinters,
} from "printer-pdf";
```

- JavaScript 用法

```javascript
const {
    getPaperSizeInfoAll,
    getPaperSizeInfo,
    getDefaultPrinter,
    print,
    getPrinters,
} = require("printer-pdf");
```

### PDF_PRINTER_OPTIONS

| 参数名         | 类型                                            | 描述              |
|-------------|-----------------------------------------------|-----------------|
| printer     | string                                        | 打印机名称（可选）       |
| pdf         | string                                        | 文件路径（必填）        |
| pages       | string                                        | 打印页面范围（可选）      |
| subset      | [Subset](#subset)                             | 子集（可选）          |
| orientation | [OrientationRequested](#orientationrequested) | 打印机方向（可选）       |
| scale       | [Scaling](#scaling)                           | 缩放（可选）          |
| monochrome  | [Chromaticity](#chromaticity)                 | 色彩打印（可选）        |
| side        | [Sides](#sides)                               | 双面打印（可选）        |
| bin         | [MediaTray](#mediatray)                       | 墨盒类型（可选）        |
| paperSize   | [MediaSizeName](#mediasizename)               | 打印纸张（可选）        |
| printDialog | boolean                                       | 是否弹窗打印（默认false） |
| copies      | number                                        | 打印份数（默认为1）      |

### paperSizeInfoOptions

| 参数名     | 类型     | 描述        |
|---------|--------|-----------|
| printer | string | 打印机名称（可选） |

## 枚举类型

### <a id="mediasizename"></a>MediaSizeName（纸张大小）

| 枚举值                      | 描述                       |
|--------------------------|--------------------------|
| ISO_A0                   | ISO A0                   |
| ISO_A1                   | ISO A1                   |
| ISO_A2                   | ISO A2                   |
| ISO_A3                   | ISO A3                   |
| ISO_A4                   | ISO A4（默认）               |
| ISO_A5                   | ISO A5                   |
| ISO_A6                   | ISO A6                   |
| ISO_A7                   | ISO A7                   |
| ISO_A8                   | ISO A8                   |
| ISO_A9                   | ISO A9                   |
| ISO_A10                  | ISO A10                  |
| ISO_B0                   | ISO B0                   |
| ISO_B1                   | ISO B1                   |
| ISO_B2                   | ISO B2                   |
| ISO_B3                   | ISO B3                   |
| ISO_B4                   | ISO B4                   |
| ISO_B5                   | ISO B5                   |
| ISO_B6                   | ISO B6                   |
| ISO_B7                   | ISO B7                   |
| ISO_B8                   | ISO B8                   |
| ISO_B9                   | ISO B9                   |
| ISO_B10                  | ISO B10                  |
| JIS_B0                   | JIS B0                   |
| JIS_B1                   | JIS B1                   |
| JIS_B2                   | JIS B2                   |
| JIS_B3                   | JIS B3                   |
| JIS_B4                   | JIS B4                   |
| JIS_B5                   | JIS B5                   |
| JIS_B6                   | JIS B6                   |
| JIS_B7                   | JIS B7                   |
| JIS_B8                   | JIS B8                   |
| JIS_B9                   | JIS B9                   |
| JIS_B10                  | JIS B10                  |
| ISO_C0                   | ISO C0                   |
| ISO_C1                   | ISO C1                   |
| ISO_C2                   | ISO C2                   |
| ISO_C3                   | ISO C3                   |
| ISO_C4                   | ISO C4                   |
| ISO_C5                   | ISO C5                   |
| ISO_C6                   | ISO C6                   |
| NA_LETTER                | NA Letter                |
| NA_LEGAL                 | NA Legal                 |
| EXECUTIVE                | Executive                |
| LEDGER                   | Ledger                   |
| TABLOID                  | Tabloid                  |
| INVOICE                  | Invoice                  |
| FOLIO                    | Folio                    |
| QUARTO                   | Quarto                   |
| JAPANESE_POSTCARD        | Japanese Postcard        |
| JAPANESE_DOUBLE_POSTCARD | Japanese Double Postcard |
| A                        | A                        |
| B                        | B                        |
| C                        | C                        |
| D                        | D                        |
| E                        | E                        |
| ISO_DESIGNATED_LONG      | ISO Designated Long      |
| ITALY_ENVELOPE           | Italy Envelope           |
| MONARCH_ENVELOPE         | Monarch Envelope         |
| PERSONAL_ENVELOPE        | Personal Envelope        |
| NA_NUMBER_9_ENVELOPE     | NA Number 9 Envelope     |
| NA_NUMBER_10_ENVELOPE    | NA Number 10 Envelope    |
| NA_NUMBER_11_ENVELOPE    | NA Number 11 Envelope    |
| NA_NUMBER_12_ENVELOPE    | NA Number 12 Envelope    |
| NA_NUMBER_14_ENVELOPE    | NA Number 14 Envelope    |
| NA_6X9_ENVELOPE          | NA 6x9 Envelope          |
| NA_7X9_ENVELOPE          | NA 7x9 Envelope          |
| NA_9X11_ENVELOPE         | NA 9x11 Envelope         |
| NA_9X12_ENVELOPE         | NA 9x12 Envelope         |
| NA_10X13_ENVELOPE        | NA 10x13 Envelope        |
| NA_10X14_ENVELOPE        | NA 10x14 Envelope        |
| NA_10X15_ENVELOPE        | NA 10x15 Envelope        |
| NA_5X7                   | NA 5x7                   |
| NA_8X10                  | NA 8x10                  |

### <a id="chromaticity"></a>Chromaticity（设置色彩）

| 枚举值        | 描述     |
|------------|--------|
| MONOCHROME | 黑白（默认） |
| COLOR      | 色彩     |

### <a id="sides"></a>Sides（设置双面打印）

| 枚举值                  | 描述     |
|----------------------|--------|
| ONE_SIDED            | 单面（默认） |
| TWO_SIDED_LONG_EDGE  | 双面长边   |
| TWO_SIDED_SHORT_EDGE | 双面短边   |

### <a id="mediatray"></a>MediaTray（墨盒类型）

| 枚举值            | 描述       |
|----------------|----------|
| TOP            | 顶部纸匣     |
| MIDDLE         | 中间纸匣     |
| BOTTOM         | 底部纸匣     |
| ENVELOPE       | 信封送纸器    |
| MANUAL         | 手动进纸托盘   |
| LARGE_CAPACITY | 大容量进纸器   |
| MAIN           | 主纸匣 (默认) |
| SIDE           | 侧边进纸托盘   |

### <a id="orientationrequested"></a>OrientationRequested（设置打印机方向）

| 枚举值               | 描述                      |
|-------------------|-------------------------|
| PORTRAIT          | 纵向: 纸张短边在上 (标准纵向)（默认）   |
| LANDSCAPE         | 横向: 纸张长边在上 (顺时针旋转 90 度) |
| REVERSE_LANDSCAPE | 反向横向: 逆时针旋转 90 度        |
| REVERSE_PORTRAIT  | 反向纵向: 旋转 180 度          |

### <a id="scaling"></a>Scaling（缩放）

| 枚举值            | 描述                                |
|----------------|-----------------------------------|
| ACTUAL_SIZE    | 实际大小                              |
| SHRINK_TO_FIT  | 缩小以适应: 仅当 PDF 页面大于纸张时缩小，保持长宽比（默认） |
| STRETCH_TO_FIT | 拉伸以适应: 强制填满纸张，可能会导致图像拉伸变形         |
| SCALE_TO_FIT   | 缩放以适应: 无论大小，均缩放至完全符合纸张可打印区域       |

### <a id="subset"></a>Subset（子集）

| 枚举值  | 描述     |
|------|--------|
| ALL  | 全部（默认） |
| ODD  | 奇数     |
| EVEN | 偶数     |

## 返回参数

### Printer

| 参数名         | 类型     | 描述    |
|-------------|--------|-------|
| deviceID    | string | 设备ID  |
| printerName | string | 打印机名称 |

### PaperSizesInfoType

| 参数名         | 类型                                | 描述     |
|-------------|-----------------------------------|--------|
| printerName | string                            | 打印机名称  |
| taskNumber  | number                            | 任务编号   |
| status      | number                            | 状态码    |
| statusMsg   | string                            | 状态信息   |
| paperSizes  | [PaperSizeType[]](#paperSizeType) | 纸张尺寸列表 |

### <a id="paperSizeType"></a>PaperSizeType

| 参数名       | 类型     | 描述     |
|-----------|--------|--------|
| height    | number | 纸张高度   |
| kind      | number | 纸张ID   |
| paperName | string | 纸张名称   |
| rawKind   | number | 原始类型ID |
| width     | number | 纸张宽度   |
