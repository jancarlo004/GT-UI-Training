import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class WCScheduleCreditPopup {
	wCScheduleCreditPopupCancel = PcfButton('#WCScheduleCreditPopup-Cancel');
	wCScheduleCreditPopupEdit = PcfButton('#WCScheduleCreditPopup-Edit');
	wCScheduleCreditPopupUpdate = PcfButton('#WCScheduleCreditPopup-Update');
	wCScheduleCreditDVScheduleRateLV = PcfListView('#WCScheduleCreditPopup-WCScheduleCreditDV-ScheduleRateLV');
	wCScheduleCreditPopupWCScheduleCreditPopup_UpLink = PcfButton('#WCScheduleCreditPopup-WCScheduleCreditPopup_UpLink');
	wCScheduleCreditPopup_Paging = PcfButton('#WCScheduleCreditPopup-_Paging');
	wCScheduleCreditPopup__crumb__ = PcfComponent('#WCScheduleCreditPopup-__crumb__');
	wCScheduleCreditPopup_msgs = PcfButton('#WCScheduleCreditPopup-_msgs');
}
