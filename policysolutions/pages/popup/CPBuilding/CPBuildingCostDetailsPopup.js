import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class CPBuildingCostDetailsPopup {
	cPBuildingCostDetailsPopupAmount = PcfTextInput('#CPBuildingCostDetailsPopup-Amount');
	cPBuildingCostDetailsPopupCPBuildingCostDetailsPopup_UpLink = PcfButton('#CPBuildingCostDetailsPopup-CPBuildingCostDetailsPopup_UpLink');
	cPBuildingCostDetailsPopupDescription = PcfTextInput('#CPBuildingCostDetailsPopup-Description');
	cPBuildingCostDetailsPopupEffDate = PcfTextInput('#CPBuildingCostDetailsPopup-EffDate');
	cPBuildingCostDetailsPopupExpDate = PcfTextInput('#CPBuildingCostDetailsPopup-ExpDate');
	cPBuildingCostDetailsPopupPremium = PcfTextInput('#CPBuildingCostDetailsPopup-Premium');
	cPBuildingCostDetailsPopupProration = PcfTextInput('#CPBuildingCostDetailsPopup-Proration');
	cPBuildingCostDetailsPopup_ListPaging = PcfButton('#CPBuildingCostDetailsPopup-_ListPaging');
	cPBuildingCostDetailsPopup_Paging = PcfButton('#CPBuildingCostDetailsPopup-_Paging');
	cPBuildingCostDetailsPopup_ViewDetail = PcfButton('#CPBuildingCostDetailsPopup-_ViewDetail');
	cPBuildingCostDetailsPopup__crumb__ = PcfComponent('#CPBuildingCostDetailsPopup-__crumb__');
	cPBuildingCostDetailsPopup_msgs = PcfButton('#CPBuildingCostDetailsPopup-_msgs');
}
