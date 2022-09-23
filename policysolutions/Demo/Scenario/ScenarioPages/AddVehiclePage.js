'use strict';
import {Selector, t,PcfComponent} from 'testcafe';

export class AddVehiclePage {
    constructor() {
        this.addDriverToVehicleButton = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver");
       this.firstDriver = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-0-Driver");  
    }
    async selectFirstDriver() {
        await t
            .click(this.addDriverToVehicleButton)
            .click(this.firstDriver);
    }

}