import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BALocationSummaryPopup {
	bALocationSummaryPopupBALocationSummaryPopup_UpLink = PcfButton('#BALocationSummaryPopup-BALocationSummaryPopup_UpLink');
	locSummaryLDVBALocationSummaryLV = PcfListView('#BALocationSummaryPopup-BALocationSummaryScreen-LocSummaryLDV-BALocationSummaryLV');
	bALocationVehicleSummaryDVVehicleScheduleLV = PcfListView('#BALocationSummaryPopup-BALocationSummaryScreen-LocSummaryLDV-BALocationVehicleSummaryDV-VehicleScheduleLV');
	locSummaryLDVVehicleScheduleCardTab = PcfButton('#BALocationSummaryPopup-BALocationSummaryScreen-LocSummaryLDV-VehicleScheduleCardTab');
	bALocationSummaryScreen_msgs = PcfButton('#BALocationSummaryPopup-BALocationSummaryScreen-_msgs');
	bALocationSummaryPopup_Paging = PcfButton('#BALocationSummaryPopup-_Paging');
	bALocationSummaryPopup__crumb__ = PcfComponent('#BALocationSummaryPopup-__crumb__');
}
