import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class VehicleClassCodeSearchPopup {
	vehicleClassCodeSearchPopupVehicleClassCodeSearchPopup_UpLink = PcfButton('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchPopup_UpLink');
	vehicleClassCodeSearchDVFleet = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-Fleet');
	vehicleClassCodeSearchDVIndustry = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-Industry');
	vehicleClassCodeSearchDVIndustryUse = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-IndustryUse');
	vehicleClassCodeSearchDVPrimaryUse = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-PrimaryUse');
	vehicleClassCodeSearchDVRadius = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-Radius');
	vehicleClassCodeSearchPopupVehicleClassCodeSearchScreenVehicleClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	vehicleClassCodeSearchPopupVehicleClassCodeSearchScreenVehicleClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	vehicleClassCodeSearchDVSizeClass = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-SizeClass');
	vehicleClassCodeSearchDVType = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-Type');
	vehicleClassCodeSearchDVYearsExperience = PcfSelectInput('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchDV-YearsExperience');
	vehicleClassCodeSearchScreenVehicleClassCodeSearchResultsLV = PcfListView('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-VehicleClassCodeSearchResultsLV');
	vehicleClassCodeSearchScreen_msgs = PcfButton('#VehicleClassCodeSearchPopup-VehicleClassCodeSearchScreen-_msgs');
	vehicleClassCodeSearchPopup_Paging = PcfButton('#VehicleClassCodeSearchPopup-_Paging');
	vehicleClassCodeSearchPopup__crumb__ = PcfComponent('#VehicleClassCodeSearchPopup-__crumb__');
}
