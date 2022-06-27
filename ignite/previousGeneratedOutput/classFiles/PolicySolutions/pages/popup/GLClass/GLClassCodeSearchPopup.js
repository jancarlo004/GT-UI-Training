import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class GLClassCodeSearchPopup {
	gLClassCodeSearchPopupGLClassCodeSearchPopup_UpLink = PcfButton('#GLClassCodeSearchPopup-GLClassCodeSearchPopup_UpLink');
	gLClassCodeSearchScreenClassCodeSearchResultsLV = PcfListView('#GLClassCodeSearchPopup-GLClassCodeSearchScreen-ClassCodeSearchResultsLV');
	gLClassCodeSearchDVClassification = PcfTextInput('#GLClassCodeSearchPopup-GLClassCodeSearchScreen-GLClassCodeSearchDV-Classification');
	gLClassCodeSearchDVCode = PcfTextInput('#GLClassCodeSearchPopup-GLClassCodeSearchScreen-GLClassCodeSearchDV-Code');
	gLClassCodeSearchPopupGLClassCodeSearchScreenGLClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#GLClassCodeSearchPopup-GLClassCodeSearchScreen-GLClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	gLClassCodeSearchPopupGLClassCodeSearchScreenGLClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#GLClassCodeSearchPopup-GLClassCodeSearchScreen-GLClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	gLClassCodeSearchScreen_msgs = PcfButton('#GLClassCodeSearchPopup-GLClassCodeSearchScreen-_msgs');
	gLClassCodeSearchPopup_Paging = PcfButton('#GLClassCodeSearchPopup-_Paging');
	gLClassCodeSearchPopup__crumb__ = PcfComponent('#GLClassCodeSearchPopup-__crumb__');
}
