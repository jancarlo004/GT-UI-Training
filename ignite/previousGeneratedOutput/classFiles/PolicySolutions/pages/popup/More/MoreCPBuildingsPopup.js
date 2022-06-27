import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class MoreCPBuildingsPopup {
	moreCPBuildingsPopupAddSelectedBuildings = PcfButton('#MoreCPBuildingsPopup-AddSelectedBuildings');
	moreCPBuildingsPopupCancel = PcfButton('#MoreCPBuildingsPopup-Cancel');
	moreCPBuildingsPopupEdit = PcfButton('#MoreCPBuildingsPopup-Edit');
	moreCPBuildingsPopupMoreBuildingsLV = PcfListView('#MoreCPBuildingsPopup-MoreBuildingsLV');
	moreCPBuildingsPopupMoreCPBuildingsPopup_UpLink = PcfButton('#MoreCPBuildingsPopup-MoreCPBuildingsPopup_UpLink');
	moreCPBuildingsPopupUpdate = PcfButton('#MoreCPBuildingsPopup-Update');
	moreCPBuildingsPopup_Paging = PcfButton('#MoreCPBuildingsPopup-_Paging');
	moreCPBuildingsPopup__crumb__ = PcfComponent('#MoreCPBuildingsPopup-__crumb__');
	moreCPBuildingsPopup_msgs = PcfButton('#MoreCPBuildingsPopup-_msgs');
}
