import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ExcelImportFilePopup {
	excelImportFilePopupCancel = PcfButton('#ExcelImportFilePopup-Cancel');
	excelImportFilePopupDiffTreePanelSetComparisonDiffTreeTab = PcfButton('#ExcelImportFilePopup-DiffTreePanelSet-ComparisonDiffTreeTab');
	excelImportFilePopupDiffTreePanelSetDiffTreePanelLV = PcfListView('#ExcelImportFilePopup-DiffTreePanelSet-DiffTreePanelLV');
	excelImportFilePopupEdit = PcfButton('#ExcelImportFilePopup-Edit');
	errorDVErrors = PcfTextInput('#ExcelImportFilePopup-ErrorDV-Errors');
	errorDVFatalErrors = PcfTextInput('#ExcelImportFilePopup-ErrorDV-FatalErrors');
	errorDVWarnings = PcfTextInput('#ExcelImportFilePopup-ErrorDV-Warnings');
	excelImportFilePopupExcelImportFilePopup_UpLink = PcfButton('#ExcelImportFilePopup-ExcelImportFilePopup_UpLink');
	excelImportFilePopupHiddenTestInput = PcfTextInput('#ExcelImportFilePopup-HiddenTestInput');
	excelImportFilePopupImportButton = PcfButton('#ExcelImportFilePopup-ImportButton');
	excelImportFilePopupImportProgressBar = PcfButton('#ExcelImportFilePopup-ImportProgressBar');
	logDVBeansAdded = PcfTextInput('#ExcelImportFilePopup-LogDV-BeansAdded');
	logDVBeansEdited = PcfTextInput('#ExcelImportFilePopup-LogDV-BeansEdited');
	logDVBeansRead = PcfTextInput('#ExcelImportFilePopup-LogDV-BeansRead');
	logDVBeansRemoved = PcfTextInput('#ExcelImportFilePopup-LogDV-BeansRemoved');
	logDVErrorRowCount = PcfTextInput('#ExcelImportFilePopup-LogDV-ErrorRowCount');
	excelImportFilePopupSaveLogButton = PcfButton('#ExcelImportFilePopup-SaveLogButton');
	showChangesDVShowChanges = PcfButton('#ExcelImportFilePopup-ShowChangesDV-ShowChanges');
	excelImportFilePopupTestImportButton = PcfButton('#ExcelImportFilePopup-TestImportButton');
	excelImportFilePopupUpdate = PcfButton('#ExcelImportFilePopup-Update');
	excelImportFilePopup_Paging = PcfButton('#ExcelImportFilePopup-_Paging');
	excelImportFilePopup__crumb__ = PcfComponent('#ExcelImportFilePopup-__crumb__');
	excelImportFilePopup_msgs = PcfButton('#ExcelImportFilePopup-_msgs');
	excelImportFilePopupinputFile = PcfButton('#ExcelImportFilePopup-inputFile');
}
