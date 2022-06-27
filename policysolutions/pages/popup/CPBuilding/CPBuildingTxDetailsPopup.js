import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CPBuildingTxDetailsPopup {
	cPBuildingTxDetailsPopupAmount = PcfTextInput('#CPBuildingTxDetailsPopup-Amount');
	cPBuildingTxDetailsPopupCPBuildingTxDetailsPopup_UpLink = PcfButton('#CPBuildingTxDetailsPopup-CPBuildingTxDetailsPopup_UpLink');
	cPBuildingTxDetailsPopupDescription = PcfTextInput('#CPBuildingTxDetailsPopup-Description');
	cPBuildingTxDetailsPopupEffDate = PcfTextInput('#CPBuildingTxDetailsPopup-EffDate');
	cPBuildingTxDetailsPopupExpDate = PcfTextInput('#CPBuildingTxDetailsPopup-ExpDate');
	cPBuildingTxDetailsPopupPremium = PcfTextInput('#CPBuildingTxDetailsPopup-Premium');
	cPBuildingTxDetailsPopupProration = PcfTextInput('#CPBuildingTxDetailsPopup-Proration');
	cPBuildingTxDetailsPopup_ListPaging = PcfButton('#CPBuildingTxDetailsPopup-_ListPaging');
	cPBuildingTxDetailsPopup_Paging = PcfButton('#CPBuildingTxDetailsPopup-_Paging');
	cPBuildingTxDetailsPopup_ViewDetail = PcfButton('#CPBuildingTxDetailsPopup-_ViewDetail');
	cPBuildingTxDetailsPopup__crumb__ = PcfComponent('#CPBuildingTxDetailsPopup-__crumb__');
	cPBuildingTxDetailsPopup_msgs = PcfButton('#CPBuildingTxDetailsPopup-_msgs');
}
