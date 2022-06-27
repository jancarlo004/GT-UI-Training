import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class SplitPeriodPopup {
	splitPeriodPopupCancel = PcfButton('#SplitPeriodPopup-Cancel');
	splitPeriodPopupEdit = PcfButton('#SplitPeriodPopup-Edit');
	splitPeriodPopupSplitDate = PcfDateValueInput('#SplitPeriodPopup-SplitDate');
	splitPeriodPopupSplitPeriodPopup_UpLink = PcfButton('#SplitPeriodPopup-SplitPeriodPopup_UpLink');
	splitPeriodPopupUpdate = PcfButton('#SplitPeriodPopup-Update');
	splitPeriodPopup_Paging = PcfButton('#SplitPeriodPopup-_Paging');
	splitPeriodPopup__crumb__ = PcfComponent('#SplitPeriodPopup-__crumb__');
	splitPeriodPopup_msgs = PcfButton('#SplitPeriodPopup-_msgs');
	splitPeriodPopupsplitType = PcfSelectInput('#SplitPeriodPopup-splitType');
}
