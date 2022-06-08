import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class BuildingSearchPopup {
	buildingSearchPopupBldgLimitHeader = PcfButton('#BuildingSearchPopup-BldgLimitHeader');
	buildingSearchPopupBuildingDescriptionHeader = PcfButton('#BuildingSearchPopup-BuildingDescriptionHeader');
	buildingSearchPopupBuildingLocationHeader = PcfButton('#BuildingSearchPopup-BuildingLocationHeader');
	buildingSearchPopupBuildingSearchPopup_UpLink = PcfButton('#BuildingSearchPopup-BuildingSearchPopup_UpLink');
	buildingSearchPopupBusIncomeHeader = PcfButton('#BuildingSearchPopup-BusIncomeHeader');
	buildingSearchPopupBusPersPropLimitHeader = PcfButton('#BuildingSearchPopup-BusPersPropLimitHeader');
	buildingSearchPopupCancel = PcfButton('#BuildingSearchPopup-Cancel');
	buildingSearchPopupEdit = PcfButton('#BuildingSearchPopup-Edit');
	buildingSearchPopupExtraExpenseHeader = PcfButton('#BuildingSearchPopup-ExtraExpenseHeader');
	buildingSearchPopupUpdate = PcfButton('#BuildingSearchPopup-Update');
	buildingSearchPopup_ListPaging = PcfButton('#BuildingSearchPopup-_ListPaging');
	buildingSearchPopup_Paging = PcfButton('#BuildingSearchPopup-_Paging');
	buildingSearchPopup__crumb__ = PcfComponent('#BuildingSearchPopup-__crumb__');
	buildingSearchPopup_msgs = PcfButton('#BuildingSearchPopup-_msgs');
	buildingSearchPopupcPBuildingFilterFrom = PcfSelectInput('#BuildingSearchPopup-cPBuildingFilterFrom');
}
