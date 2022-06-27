import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BAVehicleCostDetailPopup {
	bAVehicleCostDetailPopupBACoverageCostLV = PcfListView('#BAVehicleCostDetailPopup-BACoverageCostLV');
	bAVehicleCostDetailPopupBAVehicleCostDetailPopup_UpLink = PcfButton('#BAVehicleCostDetailPopup-BAVehicleCostDetailPopup_UpLink');
	bAVehicleCostDetailPopupClassCode = PcfTextInput('#BAVehicleCostDetailPopup-ClassCode');
	bAVehicleCostDetailPopupGarageLocation = PcfTextInput('#BAVehicleCostDetailPopup-GarageLocation');
	bAVehicleCostDetailPopupMake = PcfTextInput('#BAVehicleCostDetailPopup-Make');
	bAVehicleCostDetailPopupModel = PcfTextInput('#BAVehicleCostDetailPopup-Model');
	bAVehicleCostDetailPopupVehType = PcfSelectInput('#BAVehicleCostDetailPopup-VehType');
	bAVehicleCostDetailPopupVin = PcfTextInput('#BAVehicleCostDetailPopup-Vin');
	bAVehicleCostDetailPopupYear = PcfTextInput('#BAVehicleCostDetailPopup-Year');
	bAVehicleCostDetailPopup_Paging = PcfButton('#BAVehicleCostDetailPopup-_Paging');
	bAVehicleCostDetailPopup__crumb__ = PcfComponent('#BAVehicleCostDetailPopup-__crumb__');
	bAVehicleCostDetailPopup_msgs = PcfButton('#BAVehicleCostDetailPopup-_msgs');
}
