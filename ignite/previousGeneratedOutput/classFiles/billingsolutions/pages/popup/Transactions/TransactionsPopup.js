import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TransactionsPopup {
	transactionsPopupScreenTransactionsPopup_CancelButton = PcfButton('#TransactionsPopup-TransactionsPopupScreen-TransactionsPopup_CancelButton');
	transactionsPopupScreenTransactionsPopup_SelectButton = PcfButton('#TransactionsPopup-TransactionsPopupScreen-TransactionsPopup_SelectButton');
	transactionsPopupScreenTroubleTicketTransactionsLV = PcfListView('#TransactionsPopup-TransactionsPopupScreen-TroubleTicketTransactionsLV');
	transactionsPopupScreen_msgs = PcfButton('#TransactionsPopup-TransactionsPopupScreen-_msgs');
	transactionsPopupTransactionsPopup_UpLink = PcfButton('#TransactionsPopup-TransactionsPopup_UpLink');
	transactionsPopup_Paging = PcfButton('#TransactionsPopup-_Paging');
	transactionsPopup__crumb__ = PcfComponent('#TransactionsPopup-__crumb__');
}
