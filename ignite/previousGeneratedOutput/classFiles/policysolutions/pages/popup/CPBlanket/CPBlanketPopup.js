import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CPBlanketPopup {
	cPBlanketPopupBlanketGroupType = PcfSelectInput('#CPBlanketPopup-BlanketGroupType');
	cPBlanketPopupBlanketLocation = PcfSelectInput('#CPBlanketPopup-BlanketLocation');
	cPBlanketPopupBlanketNum = PcfTextInput('#CPBlanketPopup-BlanketNum');
	cPBlanketPopupBlanketType = PcfSelectInput('#CPBlanketPopup-BlanketType');
	cPBlanketPopupBuildingCoverage = PcfSelectInput('#CPBlanketPopup-BuildingCoverage');
	cPBlanketPopupCPBlanketCovCoinsurance = PcfSelectInput('#CPBlanketPopup-CPBlanketCovCoinsurance');
	cPBlanketPopupCPBlanketCovDeductible = PcfSelectInput('#CPBlanketPopup-CPBlanketCovDeductible');
	cPBlanketPopupCPBlanketCovLV = PcfListView('#CPBlanketPopup-CPBlanketCovLV');
	cPBlanketCovLV_tbAddCoverages = PcfButton('#CPBlanketPopup-CPBlanketCovLV_tb-AddCoverages');
	cPBlanketCovLV_tbRemoveCoverages = PcfButton('#CPBlanketPopup-CPBlanketCovLV_tb-RemoveCoverages');
	cPBlanketCovLV_tbShowCoverages = PcfButton('#CPBlanketPopup-CPBlanketCovLV_tb-ShowCoverages');
	covTermDirectInputSetDirectTermInput = PcfTextInput('#CPBlanketPopup-CPBlanketCovLimitId-CovTermDirectInputSet-DirectTermInput');
	cPBlanketPopupCPBlanketPopup_UpLink = PcfButton('#CPBlanketPopup-CPBlanketPopup_UpLink');
	cPBlanketPopupCancel = PcfButton('#CPBlanketPopup-Cancel');
	cPBlanketPopupDescription = PcfTextInput('#CPBlanketPopup-Description');
	cPBlanketPopupEdit = PcfButton('#CPBlanketPopup-Edit');
	cPBlanketPopupPreferredCoverageCurrencySelectorRefPreferredCoverageCurrencyPanelSetCoverageCurrencyDisplay = PcfTextInput('#CPBlanketPopup-PreferredCoverageCurrencySelectorRef-PreferredCoverageCurrencyPanelSet-CoverageCurrencyDisplay');
	cPBlanketPopupPreferredCoverageCurrencySelectorRefPreferredCoverageCurrencyPanelSetPreferredCoverageCurrencySelectorDropDown = PcfSelectInput('#CPBlanketPopup-PreferredCoverageCurrencySelectorRef-PreferredCoverageCurrencyPanelSet-PreferredCoverageCurrencySelectorDropDown');
	cPBlanketPopupRecaculateLimit = PcfButton('#CPBlanketPopup-RecaculateLimit');
	cPBlanketPopupUpdate = PcfButton('#CPBlanketPopup-Update');
	cPBlanketPopup_Paging = PcfButton('#CPBlanketPopup-_Paging');
	cPBlanketPopup__crumb__ = PcfComponent('#CPBlanketPopup-__crumb__');
	cPBlanketPopup_msgs = PcfButton('#CPBlanketPopup-_msgs');
}
