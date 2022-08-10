import { t } from "testcafe";
import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions";
import { NewSubmissionPages } from "../../pages/customPages";
import { NextSubmissionWizard } from "../../../pages/navigation/submissionWizard/NextSubmissionWizard";
import { PersonalAuto } from "../../../pages/lOBWizardStepGroup/PersonalAuto";
import { NewPolicyDriverPopup } from "../../../pages/popup/New/NewPolicyDriverPopup";
import { BillingInfoSubmissionWizard } from "../../../pages/navigation/submissionWizard/BillingInfoSubmissionWizard";
import { CustomMethod } from "../../util/customMethod";
import world from "../../util/world";

const actionsButton = new AccountMenuActions();
const newSubmissionPages = new NewSubmissionPages();
const nextButton = new NextSubmissionWizard();
const personalAuto = new PersonalAuto();
const newPolicyDriverPopup = new NewPolicyDriverPopup();
const billingInfo = new BillingInfoSubmissionWizard();
const selectDriver = new CustomMethod();

export class NewSubmissionScenario{

    async InitiateNewSubmission(){
        await actionsButton.accountFileAccountFileMenuActions.click();
        await actionsButton.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
    }

    async NewPASubmissionScenario(){
        await newSubmissionPages.personalAutoLOBButton.click();
        //Offerings
        await newSubmissionPages.offeringSelection.selectNthOption(1);
        await nextButton.submissionWizardNext.click();
        //Qualification
        await newSubmissionPages.preQualificationSelection.selectNthOption(2);
        await nextButton.submissionWizardNext.click();
        //Policy Info
        await nextButton.submissionWizardNext.click();
        //Drivers
        //Existing Driver
        await personalAuto.driversLV_tbAddDriver.click();
        await t.hover(personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriversLV_tbAddDriverAddExistingContact.component);
        await newSubmissionPages.existingDriver.click();
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue(world.account.birthDate);
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("23458756");
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByValue('TX');
        await personalAuto.driverDetailsCVRolesCardTab.click();
        await newSubmissionPages.yearFirstLicensed.setValue('2017')
        await newSubmissionPages.numberOfAccidentsPL.selectNthOption(1);
        await newSubmissionPages.numberOfAccidentsAL.selectNthOption(1);
        await newSubmissionPages.numberOfViolationsPL.selectNthOption(1);
        await newSubmissionPages.numberOfViolationsAL.selectNthOption(1);
        //2 New Drivers
        for (let i = 1; i <= 2; i++) {
            await personalAuto.driversLV_tbAddDriver.click();
            await newSubmissionPages.addNewDriver.click();
            await newPolicyDriverPopup.policyDriverInfoDVnumberofaccidents.selectNthOption(1);
            await newPolicyDriverPopup.policyDriverInfoDVnumberofviolations.selectNthOption(1);
            await newPolicyDriverPopup.policyDriverInfoDVyearlicensed.setValue("2017");
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetFirstName.setValue("New" + i);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetLastName.setValue("Driver" + i);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue('0'+ i + '/15/1995')
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue("123 Street");
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue("Dallas");
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState.selectOptionByValue('TX');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode.setValue("75001");
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVAddressType.selectOptionByValue('home');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("4321456" + i);
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByValue('TX');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenUpdate.click();
        }    
        await nextButton.submissionWizardNext.click();
        //Vehicles
        for (let i = 0; i <= 2; i++) {
            await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPAVehiclesScreenPAVehiclesPanelSetVehiclesListDetailPanel_tbAdd.click();
            await personalAuto.personalAuto_VehicleDVVin_DV.setValue("1GCNCPEH3FZ16493" + i);
            await t.pressKey('tab');
            await personalAuto.personalAuto_VehicleDVCostNew_DV.setValue('60000');
            await t.pressKey('tab');
            await personalAuto.personalAuto_VehicleDVLicenseState_DV.selectOptionByValue('TX');
            await personalAuto.driverPctLV_tbAddDriver.click();
            await selectDriver.selectDriver('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-' + i + '-Driver')
        }
        await nextButton.submissionWizardNext.click();
        //PA Coverages
        await nextButton.submissionWizardNext.click();
        //Risk Analysis
        await nextButton.submissionWizardNext.click();
        //Quote
        await newSubmissionPages.quoteButton.click();
        //Payment
        await billingInfo.submissionWizardBillingInfo.click();
        //Issue
        await newSubmissionPages.bindOptionsButton.click();
        await newSubmissionPages.issueButton.click();
        await t.pressKey('enter');
    }
}