import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CPClassCodeSearchPopup {
	cPClassCodeSearchPopupCPClassCodeSearchPopup_UpLink = PcfButton('#CPClassCodeSearchPopup-CPClassCodeSearchPopup_UpLink');
	cPClassCodeSearchDVClassification = PcfTextInput('#CPClassCodeSearchPopup-CPClassCodeSearchScreen-CPClassCodeSearchDV-Classification');
	cPClassCodeSearchDVCode = PcfTextInput('#CPClassCodeSearchPopup-CPClassCodeSearchScreen-CPClassCodeSearchDV-Code');
	cPClassCodeSearchPopupCPClassCodeSearchScreenCPClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#CPClassCodeSearchPopup-CPClassCodeSearchScreen-CPClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	cPClassCodeSearchPopupCPClassCodeSearchScreenCPClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#CPClassCodeSearchPopup-CPClassCodeSearchScreen-CPClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	cPClassCodeSearchScreenClassCodeSearchResultsLV = PcfListView('#CPClassCodeSearchPopup-CPClassCodeSearchScreen-ClassCodeSearchResultsLV');
	cPClassCodeSearchScreen_msgs = PcfButton('#CPClassCodeSearchPopup-CPClassCodeSearchScreen-_msgs');
	cPClassCodeSearchPopup_Paging = PcfButton('#CPClassCodeSearchPopup-_Paging');
	cPClassCodeSearchPopup__crumb__ = PcfComponent('#CPClassCodeSearchPopup-__crumb__');
}
