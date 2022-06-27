import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ChargeBreakdownCategoryPopup {
	categoryScreenCancel = PcfButton('#ChargeBreakdownCategoryPopup-CategoryScreen-Cancel');
	categoryScreenCategoryLV = PcfListView('#ChargeBreakdownCategoryPopup-CategoryScreen-CategoryLV');
	categoryLV_tbAdd = PcfButton('#ChargeBreakdownCategoryPopup-CategoryScreen-CategoryLV_tb-Add');
	categoryLV_tbRemove = PcfButton('#ChargeBreakdownCategoryPopup-CategoryScreen-CategoryLV_tb-Remove');
	categoryScreenEdit = PcfButton('#ChargeBreakdownCategoryPopup-CategoryScreen-Edit');
	categoryScreenUpdate = PcfButton('#ChargeBreakdownCategoryPopup-CategoryScreen-Update');
	categoryScreen_msgs = PcfButton('#ChargeBreakdownCategoryPopup-CategoryScreen-_msgs');
	chargeBreakdownCategoryPopupChargeBreakdownCategoryPopup_UpLink = PcfButton('#ChargeBreakdownCategoryPopup-ChargeBreakdownCategoryPopup_UpLink');
	chargeBreakdownCategoryPopup_Paging = PcfButton('#ChargeBreakdownCategoryPopup-_Paging');
	chargeBreakdownCategoryPopup__crumb__ = PcfComponent('#ChargeBreakdownCategoryPopup-__crumb__');
}
