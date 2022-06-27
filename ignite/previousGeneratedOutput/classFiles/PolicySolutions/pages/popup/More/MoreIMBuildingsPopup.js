import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MoreIMBuildingsPopup {
	moreIMBuildingsPopupAddSelectedBuildings = PcfButton('#MoreIMBuildingsPopup-AddSelectedBuildings');
	moreIMBuildingsPopupCancel = PcfButton('#MoreIMBuildingsPopup-Cancel');
	moreIMBuildingsPopupEdit = PcfButton('#MoreIMBuildingsPopup-Edit');
	moreIMBuildingsPopupMoreBuildingsLV = PcfListView('#MoreIMBuildingsPopup-MoreBuildingsLV');
	moreIMBuildingsPopupMoreIMBuildingsPopup_UpLink = PcfButton('#MoreIMBuildingsPopup-MoreIMBuildingsPopup_UpLink');
	moreIMBuildingsPopupUpdate = PcfButton('#MoreIMBuildingsPopup-Update');
	moreIMBuildingsPopup_Paging = PcfButton('#MoreIMBuildingsPopup-_Paging');
	moreIMBuildingsPopup__crumb__ = PcfComponent('#MoreIMBuildingsPopup-__crumb__');
	moreIMBuildingsPopup_msgs = PcfButton('#MoreIMBuildingsPopup-_msgs');
}
