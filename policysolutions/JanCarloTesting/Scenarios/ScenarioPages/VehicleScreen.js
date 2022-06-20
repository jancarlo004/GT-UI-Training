'use strict'

import { PcfButton,PcfTextInput,PcfSelectInput, PcfComponent, PcfListView } from "@gtui/gt-ui-framework"
import { t } from "testcafe";
import world from "../../util/world";

export class VehicleScreen{

    createVehicleButton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add");
    vehicleVin = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV");
    licenseState = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV");
    costNew = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV");
    vehicleDriverAssignment = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver");
    existingDriver = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-0-Driver");
    vehicleListView = PcfListView("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesLV");
    createNewVehicleForNewPersonButton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add");

    async createNewVehicle(){
        
        for(let i=0; i< world.drivers.length -1; i++){ 
            await this.createVehicleButton.click();
            await this.vehicleVin.setValue(world.newVehicleVin[i]);
            await this.costNew.setValue(world.costNew[i]);
            await this.licenseState.selectOptionByLabel(world.licenseStateInVehicle[i]);
            await this.vehicleDriverAssignment.click();
            let vehicleAssignedToDrivers =  this.vehicleDriverAssignment.component.find('.gw-subMenu').find('.gw-label').withText(world.drivers[i]);
            console.log(vehicleAssignedToDrivers);
            await t.click(vehicleAssignedToDrivers);

        }
    }
}

