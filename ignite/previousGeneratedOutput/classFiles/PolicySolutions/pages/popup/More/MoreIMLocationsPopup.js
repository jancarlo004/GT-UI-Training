import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MoreIMLocationsPopup {
	moreIMLocationsPopupAddSelectedLocations = PcfButton('#MoreIMLocationsPopup-AddSelectedLocations');
	moreIMLocationsPopupCancel = PcfButton('#MoreIMLocationsPopup-Cancel');
	moreIMLocationsPopupEdit = PcfButton('#MoreIMLocationsPopup-Edit');
	moreIMLocationsPopupMoreIMLocationsPopup_UpLink = PcfButton('#MoreIMLocationsPopup-MoreIMLocationsPopup_UpLink');
	moreIMLocationsPopupMoreLocationsLV = PcfListView('#MoreIMLocationsPopup-MoreLocationsLV');
	moreIMLocationsPopupUpdate = PcfButton('#MoreIMLocationsPopup-Update');
	moreIMLocationsPopup_Paging = PcfButton('#MoreIMLocationsPopup-_Paging');
	moreIMLocationsPopup__crumb__ = PcfComponent('#MoreIMLocationsPopup-__crumb__');
	moreIMLocationsPopup_msgs = PcfButton('#MoreIMLocationsPopup-_msgs');
}
