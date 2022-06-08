import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class StartDelinquencyProcessPopup {
	startDelinquencyProcessPopupStartDelinquencyProcessPopup_UpLink = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessPopup_UpLink');
	startDelinquencyProcessScreenCancel = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Cancel');
	startDelinquencyProcessScreenExecute = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Execute');
	startDelinquencyProcessScreenReason = PcfSelectInput('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-Reason');
	startDelinquencyProcessScreenTargetsLV = PcfListView('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-TargetsLV');
	startDelinquencyProcessScreen_msgs = PcfButton('#StartDelinquencyProcessPopup-StartDelinquencyProcessScreen-_msgs');
	startDelinquencyProcessPopup_Paging = PcfButton('#StartDelinquencyProcessPopup-_Paging');
	startDelinquencyProcessPopup__crumb__ = PcfComponent('#StartDelinquencyProcessPopup-__crumb__');
}
