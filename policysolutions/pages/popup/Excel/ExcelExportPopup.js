import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ExcelExportPopup {
	excelExportPopupAllData = PcfComponent('#ExcelExportPopup-AllData');
	excelExportPopupDownloadExcelFileButton = PcfButton('#ExcelExportPopup-DownloadExcelFileButton');
	excelExportPopupExcelExportPopup_UpLink = PcfButton('#ExcelExportPopup-ExcelExportPopup_UpLink');
	excelExportPopupExport = PcfSelectInput('#ExcelExportPopup-Export');
	excelExportPopupExportAsynchronouslyButton = PcfButton('#ExcelExportPopup-ExportAsynchronouslyButton');
	excelExportPopupExportProgressBar = PcfButton('#ExcelExportPopup-ExportProgressBar');
	excelExportPopupExportSynchronouslyButton = PcfButton('#ExcelExportPopup-ExportSynchronouslyButton');
	excelExportPopupFormat = PcfSelectInput('#ExcelExportPopup-Format');
	excelExportPopupLanguage = PcfSelectInput('#ExcelExportPopup-Language');
	excelExportPopupLocale = PcfSelectInput('#ExcelExportPopup-Locale');
	excelExportPopupPadding = PcfTextInput('#ExcelExportPopup-Padding');
	excelExportPopup_Paging = PcfButton('#ExcelExportPopup-_Paging');
	excelExportPopup__crumb__ = PcfComponent('#ExcelExportPopup-__crumb__');
	excelExportPopup_msgs = PcfButton('#ExcelExportPopup-_msgs');
}
