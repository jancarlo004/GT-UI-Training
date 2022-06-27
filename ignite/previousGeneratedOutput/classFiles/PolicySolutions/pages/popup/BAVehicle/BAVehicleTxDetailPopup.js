import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BAVehicleTxDetailPopup {
	bAVehicleTxDetailPopupBACoverageTxLV = PcfListView('#BAVehicleTxDetailPopup-BACoverageTxLV');
	bAVehicleTxDetailPopupBAVehicleTxDetailPopup_UpLink = PcfButton('#BAVehicleTxDetailPopup-BAVehicleTxDetailPopup_UpLink');
	bAVehicleTxDetailPopupClassCode = PcfTextInput('#BAVehicleTxDetailPopup-ClassCode');
	bAVehicleTxDetailPopupGarageLocation = PcfTextInput('#BAVehicleTxDetailPopup-GarageLocation');
	bAVehicleTxDetailPopupMake = PcfTextInput('#BAVehicleTxDetailPopup-Make');
	bAVehicleTxDetailPopupModel = PcfTextInput('#BAVehicleTxDetailPopup-Model');
	bAVehicleTxDetailPopupVehType = PcfSelectInput('#BAVehicleTxDetailPopup-VehType');
	bAVehicleTxDetailPopupVin = PcfTextInput('#BAVehicleTxDetailPopup-Vin');
	bAVehicleTxDetailPopupYear = PcfTextInput('#BAVehicleTxDetailPopup-Year');
	bAVehicleTxDetailPopup_Paging = PcfButton('#BAVehicleTxDetailPopup-_Paging');
	bAVehicleTxDetailPopup__crumb__ = PcfComponent('#BAVehicleTxDetailPopup-__crumb__');
	bAVehicleTxDetailPopup_msgs = PcfButton('#BAVehicleTxDetailPopup-_msgs');
}
