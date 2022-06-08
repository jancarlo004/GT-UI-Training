import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class VoidDisbursementPopup {
	voidDisbursementPopupVoidDisbursementPopup_UpLink = PcfButton('#VoidDisbursementPopup-VoidDisbursementPopup_UpLink');
	voidDisbursementScreenCancel = PcfButton('#VoidDisbursementPopup-VoidDisbursementScreen-Cancel');
	disbursementDetailsInputSetCreateTime = PcfDateValueInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-DisbursementDetailsInputSet-CreateTime');
	disbursementDetailsInputSetVoidReason = PcfSelectInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-DisbursementDetailsInputSet-VoidReason');
	disbursementDetailsInputSetage = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-DisbursementDetailsInputSet-age');
	disbursementDetailsInputSetamount = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-DisbursementDetailsInputSet-amount');
	disbursementDetailsInputSetreason = PcfSelectInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-DisbursementDetailsInputSet-reason');
	requestedByUserBrowseMenuItem = PcfComponent('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-DisbursementDetailsInputSet-requestedBy-UserBrowseMenuItem');
	disbursementDetailsInputSetstatus = PcfSelectInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-DisbursementDetailsInputSet-status');
	disbursementDetailDVaccountNumber = PcfButton('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-accountNumber');
	disbursementDetailDVdueDate = PcfDateValueInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-dueDate');
	disbursementDetailDVinsured = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-insured');
	disbursementDetailDVinternalComment = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-internalComment');
	disbursementDetailDVmailTo = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-mailTo');
	disbursementDetailDVmailToAddress = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-mailToAddress');
	disbursementDetailDVmemo = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-memo');
	disbursementDetailDVpayTo = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-payTo');
	disbursementDetailDVrefNumber = PcfTextInput('#VoidDisbursementPopup-VoidDisbursementScreen-DisbursementDetailDV-refNumber');
	voidDisbursementScreenEdit = PcfButton('#VoidDisbursementPopup-VoidDisbursementScreen-Edit');
	voidDisbursementScreenUpdate = PcfButton('#VoidDisbursementPopup-VoidDisbursementScreen-Update');
	voidDisbursementDVVoidReason = PcfSelectInput('#VoidDisbursementPopup-VoidDisbursementScreen-VoidDisbursementDV-VoidReason');
	voidDisbursementScreen_msgs = PcfButton('#VoidDisbursementPopup-VoidDisbursementScreen-_msgs');
	voidDisbursementPopup_Paging = PcfButton('#VoidDisbursementPopup-_Paging');
	voidDisbursementPopup__crumb__ = PcfComponent('#VoidDisbursementPopup-__crumb__');
}
