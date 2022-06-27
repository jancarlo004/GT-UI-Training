import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MoreCPLocationsPopup {
	moreCPLocationsPopupAddSelectedLocations = PcfButton('#MoreCPLocationsPopup-AddSelectedLocations');
	moreCPLocationsPopupCancel = PcfButton('#MoreCPLocationsPopup-Cancel');
	moreCPLocationsPopupEdit = PcfButton('#MoreCPLocationsPopup-Edit');
	moreCPLocationsPopupMoreCPLocationsPopup_UpLink = PcfButton('#MoreCPLocationsPopup-MoreCPLocationsPopup_UpLink');
	moreCPLocationsPopupMoreLocationsLV = PcfListView('#MoreCPLocationsPopup-MoreLocationsLV');
	moreCPLocationsPopupUpdate = PcfButton('#MoreCPLocationsPopup-Update');
	moreCPLocationsPopup_Paging = PcfButton('#MoreCPLocationsPopup-_Paging');
	moreCPLocationsPopup__crumb__ = PcfComponent('#MoreCPLocationsPopup-__crumb__');
	moreCPLocationsPopup_msgs = PcfButton('#MoreCPLocationsPopup-_msgs');
}
