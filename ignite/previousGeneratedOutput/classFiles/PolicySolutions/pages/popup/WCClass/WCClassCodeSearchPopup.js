import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WCClassCodeSearchPopup {
	wCClassCodeSearchPopupWCClassCodeSearchPopup_UpLink = PcfButton('#WCClassCodeSearchPopup-WCClassCodeSearchPopup_UpLink');
	wCClassCodeSearchScreenClassCodeSearchResultsLV = PcfListView('#WCClassCodeSearchPopup-WCClassCodeSearchScreen-ClassCodeSearchResultsLV');
	wCClassCodeSearchScreenLocationLabel = PcfTextInput('#WCClassCodeSearchPopup-WCClassCodeSearchScreen-LocationLabel');
	wCClassCodeSearchDVClassification = PcfTextInput('#WCClassCodeSearchPopup-WCClassCodeSearchScreen-WCClassCodeSearchDV-Classification');
	wCClassCodeSearchDVCode = PcfTextInput('#WCClassCodeSearchPopup-WCClassCodeSearchScreen-WCClassCodeSearchDV-Code');
	wCClassCodeSearchPopupWCClassCodeSearchScreenWCClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#WCClassCodeSearchPopup-WCClassCodeSearchScreen-WCClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	wCClassCodeSearchPopupWCClassCodeSearchScreenWCClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#WCClassCodeSearchPopup-WCClassCodeSearchScreen-WCClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	wCClassCodeSearchScreen_msgs = PcfButton('#WCClassCodeSearchPopup-WCClassCodeSearchScreen-_msgs');
	wCClassCodeSearchPopup_Paging = PcfButton('#WCClassCodeSearchPopup-_Paging');
	wCClassCodeSearchPopup__crumb__ = PcfComponent('#WCClassCodeSearchPopup-__crumb__');
}
