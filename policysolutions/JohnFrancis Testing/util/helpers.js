import { PcfButton } from "@gtui/gt-ui-framework";
import { NewPolicyDriverPopup } from "../../pages/popup/New/NewPolicyDriverPopup";
import { PersonalAuto } from "../../pages/lOBWizardStepGroup/PersonalAuto";
import { NewSubmissionPages } from "../ScenariosPages/customPages";

import { t } from "testcafe";
import world from "../util/world";

const newSubmissionPages = new NewSubmissionPages();
const personalAuto = new PersonalAuto();
const newPolicyDriverPopup = new NewPolicyDriverPopup();


export class CustomMethod{
    async selectDriver(element){
  
    }

    async createNewDriver(numberOfDriversToBeCreated){
        for (let i = 1; i <= numberOfDriversToBeCreated; i++) {
            await personalAuto.driversLV_tbAddDriver.click();
            await newSubmissionPages.addNewDriver.click();
            await newPolicyDriverPopup.policyDriverInfoDVnumberofaccidents.selectNthOption(1);
            await newPolicyDriverPopup.policyDriverInfoDVnumberofviolations.selectNthOption(1);
            await newPolicyDriverPopup.policyDriverInfoDVyearlicensed.setValue("2017");
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetFirstName.setValue(world.account.firstName[i]);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetLastName.setValue(world.account.lastName[i]);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue(world.account.birthDate[i])
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue(world.account.addressLine1);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue(world.account.city);
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState.selectOptionByValue(world.account.state);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode.setValue(world.account.zipCode);
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressType.selectOptionByValue('home');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("4321456" + i);
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByValue(world.account.state);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenUpdate.click();
        }
    }

    async existingDriver(){
        await personalAuto.driversLV_tbAddDriver.click();
        await t.hover(personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriversLV_tbAddDriverAddExistingContact.component);
        await newSubmissionPages.existingDriver.click();
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue(world.account.birthDate[0]);
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("23458756");
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByValue('TX');
        await personalAuto.driverDetailsCVRolesCardTab.click();
        await newSubmissionPages.yearFirstLicensed.setValue('2017')
        await newSubmissionPages.numberOfAccidentsPL.selectNthOption(1);
        await newSubmissionPages.numberOfAccidentsAL.selectNthOption(1);
        await newSubmissionPages.numberOfViolationsPL.selectNthOption(1);
        await newSubmissionPages.numberOfViolationsAL.selectNthOption(1);
    }

    async createNewVehicle(numberOfVehicle){
        for (let i = 0; i <= numberOfVehicle; i++) {
            await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPAVehiclesScreenPAVehiclesPanelSetVehiclesListDetailPanel_tbAdd.click();
            await personalAuto.personalAuto_VehicleDVVin_DV.setValue("1GCNCPEH3FZ16493" + i);
            await t.pressKey('tab');
            await personalAuto.personalAuto_VehicleDVCostNew_DV.setValue('60000');
            await t.pressKey('tab');
            await personalAuto.personalAuto_VehicleDVLicenseState_DV.selectOptionByValue('TX');
            await personalAuto.driverPctLV_tbAddDriver.click(); 
            let screenElement = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-' + i + '-Driver');    
            await screenElement.click(); 
        }
    }
}