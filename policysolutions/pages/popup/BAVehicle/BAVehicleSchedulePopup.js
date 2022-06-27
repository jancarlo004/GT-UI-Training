import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BAVehicleSchedulePopup {
	bAVehicleSchedulePopupBAVehicleSchedulePopup_UpLink = PcfButton('#BAVehicleSchedulePopup-BAVehicleSchedulePopup_UpLink');
	bAVehicleScheduleScreenBAScheduleLV = PcfListView('#BAVehicleSchedulePopup-BAVehicleScheduleScreen-BAScheduleLV');
	bAVehicleScheduleScreen_msgs = PcfButton('#BAVehicleSchedulePopup-BAVehicleScheduleScreen-_msgs');
	bAVehicleSchedulePopup_Paging = PcfButton('#BAVehicleSchedulePopup-_Paging');
	bAVehicleSchedulePopup__crumb__ = PcfComponent('#BAVehicleSchedulePopup-__crumb__');
}
