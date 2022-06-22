'use strict'
import { PcfButton, PcfCheckBox, PcfComponent, PcfTextInput, PcfListView, PcfSelectInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import  world from "../../utils/world";

export class DriversAndVehiclesPages {

    addDriverButton = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver')
    existingDriverButton = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact');
    existingDriver = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver');
    licenseNumber = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber');
    licenseState = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState');
    rolesTab = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab');
    yearFirstLicensed = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
    yearFirstLicensedDrivers = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
    numOfAccidents = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents');
    numOfViolations = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations');
    numOfAccidents2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents');
    numOfViolations2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations');
    newNumOfAccidents = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents');
    newNumOfViolations = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations');
    newNumOfAccidents2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfAccidents');
    newNumOfViolations2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfViolations');
    newPersonButton = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType');
    newDriverFirstName = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName');
    newDriverLastName = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName');
    newDriverAddress1 = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    newDriverState = PcfSelectInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
    newDriverAddressType = PcfSelectInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressType');
    newLicenseNumber = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber');
    newLicenseState = PcfSelectInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState');
    okButton = PcfButton('#NewPolicyDriverPopup-ContactDetailScreen-Update');
    addMVRLV = PcfListView('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV');
    retrieveMVRButton = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-RetrieveMVRButton');

    // Vehicle Details
    createVehicleButton = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add');
    vin = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV');
    vehicleLicensedState = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV');
    costNew = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV');
    driversLV = PcfListView('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV');
    insuredName = PcfComponent("#SubmissionWizard-JobWizardInfoBar-AccountName");
    licensePlate = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicensePlate_DV');
    assignDriverToVehicle = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver');

async clickExistingDriver (){
    let existingDriver = this.addDriverButton.component.find('.gw-subMenu').find('.gw-label').withText(world.accountName);
    await t.click(this.addDriverButton.component).hover(this.existingDriverButton.component).click(existingDriver);
    await t.wait(2000);
    await this.licenseNumber.setValue("666618699");
    await this.licenseState.selectOptionByLabel("Arizona");
    await this.rolesTab.click();
    await this.yearFirstLicensed.setValue("2001");
    await this.numOfAccidents.selectOptionByLabel("0");
    await this.numOfViolations.selectOptionByLabel("0");
    await this.numOfAccidents2.selectOptionByLabel("0");
    await this.numOfViolations2.selectOptionByLabel("0");
    await this.addMVR();


}

async addNewDriver(){
    for(let i=0; i< world.driverFirstName.length - 1; i++) {
        await this.addDriverButton.click();
        await this.newPersonButton.click();
        await this.newDriverFirstName.setValue(world.driverFirstName[i]);
        await this.newDriverLastName.setValue(world.driverLastName[i]);
        await this.newDriverAddress1.setValue(world.addressLine[i]);
        await this.newDriverState.selectOptionByLabel(world.state[i]);
        await this.newDriverAddressType.selectOptionByLabel(world.addressType[i]);
        await this.newLicenseNumber.setValue(world.licenseNumber[i]);
        await this.newLicenseState.selectOptionByLabel(world.licenseState[i]);
        await this.okButton.click();
        await this.rolesTab.click();
        await this.yearFirstLicensedDrivers.setValue(world.yearLicensed[i]);
        await this.newNumOfAccidents.selectOptionByLabel(world.numberOfAccidentsPolicyLevel[i]);
        await this.newNumOfViolations.selectOptionByLabel(world.numberOfViolationsPolicyLevel[i]);
        await this.newNumOfAccidents2.selectOptionByLabel(world.numberOfAccidentsAccountLevel[i]);
        await this.newNumOfViolations2.selectOptionByLabel(world.numberOfViolationsAccountLevel[i]);
        await this.addMVR();
        await this.storeDriverName();

    }
}

async addMVR(){
    await this.addMVRLV.clickOnCell(-1,0);
    await this.retrieveMVRButton.click();

 }

async storeDriverName(){
    let drivers = [];
    for(let i=0; i< await this.driversLV.rowCount(); i++){
        world.drivers[i] = await this.driversLV.getTextFromCellByColumnName(i,"Name");
        console.log(world.drivers[i]);
    }
  }

async addNewVehicle(){
    



 }

}