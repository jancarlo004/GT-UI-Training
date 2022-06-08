'use strict'
import { AccountTabBar } from "../../pages/navigation/tabBar/AccountTabBar"
import { t } from "testcafe"
import { NewAccount } from "../../pages/account/NewAccount"
import { NewPersonAccountScreen } from "../../../policysolutions/pages/other/NewPersonAccountScreen"
import { Kevpages } from "../pages/account/Kevpages"
import { AccountMenuActions } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/menuActions/AccountMenuActions"
import { NewSubmission } from "../../pages/other/NewSubmission"
import { OfferingScreen } from "../../pages/other/OfferingScreen"
import { NextSubmissionWizard } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/submissionWizard/NextSubmissionWizard"
import { PersonalAuto } from "../../pages/lOBWizardStepGroup/PersonalAuto"
import { AddExistingDriver } from "../../pages/other/AddExistingDriver"
import { AddVehicle } from "../../surepath/scenarios/ScenarioPages/SubmissionWizard/AddVehicle"
import { PolicyReviewScreen } from "../../../policysolutions/surepath/scenarios/ScenarioPages/SubmissionWizard/PolicyReviewScreen"
import { DriverDetailRole } from "../../pages/other/DriverDetailsRole"
import { QuoteScreen } from "../../KevTraining/pages/QuoteScreen"

const accountTabBar = new AccountTabBar();
const newaccount = new NewAccount();
const newPersonAccountScreen = new NewPersonAccountScreen();
const createAccount = new Kevpages();
const accountMenuActions = new AccountMenuActions();
const newSubmission = new NewSubmission();
const offeringScreen = new OfferingScreen();
const nextSubmissionWizard = new NextSubmissionWizard();
const personalAuto = new PersonalAuto();
const addExistingDriver = new AddExistingDriver();
const addDriverToVehicle = new AddVehicle();
const policyReviewScreen = new PolicyReviewScreen();
const driverDetailRole = new DriverDetailRole();
const quoteScreen = new QuoteScreen();

export class AutoPolicyCreation{
    

    async accountCreation(){
        await accountTabBar.tabBarAccountTab.click();
        !await accountTabBar.tabBarAccountTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        await t.wait(2000);
        await newaccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("Caloy");
        await newaccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Campilla");
        await newaccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await newaccount.newAccountScreenNewAccountButton.click();
        await newaccount.newAccountButtonNewAccount_Person.click();
        await t.wait(2000);

        await newPersonAccountScreen.addressLine1.setValue("351 W 3RD STAKRON");
        await newPersonAccountScreen.city.setValue("STAKRON");
        await createAccount.createAccount_globalAddressInputSetState.selectOptionByLabel("Colorado");
        await t.wait(2000);
        await newPersonAccountScreen.addressType.selectOptionByLabel("Home");
        await newPersonAccountScreen.organization.setValue("enigma");
        await t.wait(2000);
        await t.pressKey('tab');
        await newPersonAccountScreen.selectProducerCode("INT-3 Internal Producer Code - 3");
        await newPersonAccountScreen.updateButton.click();

    }

    async AutoPolicyCreation(){

    // New Submission
     await accountMenuActions.accountFileAccountFileMenuActions.click();
    !await accountMenuActions.accountFileAccountFileMenuActions.component.hasClass('gw-hasOpenSubMenu') && await t.click(accountMenuActions.accountFileAccountFileMenuActions.component.find('div.gw-action--expand-button'));
    await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
    await t.wait(2000);
    await newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.clickOnCell(6,0);
    await offeringScreen.selectOfferingSelection("Basic Program");
   await nextSubmissionWizard.submissionWizardNext.click();
     await nextSubmissionWizard.submissionWizardNext.click();
    await nextSubmissionWizard.submissionWizardNext.click();

    // Driver screen
    await addExistingDriver.selectExistingDriver();
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("666618699");
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByLabel("Colorado");
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue("12101992");
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetMaritalStatus.selectOptionByLabel("Single");
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetPrimaryPhone.selectOptionByLabel("Home");
    await t.wait(2000);
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetHomePhoneGlobalPhoneInputSetNationalSubscriberNumber.setValue("4505551234");
    await t.wait(2000);
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("666191574");
    await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByLabel("Colorado");
    await t.wait(2000);
    await personalAuto.driverDetailsCVRolesCardTab.click();
    await driverDetailRole.yearFirstLicensed.setValue("2016");
    await personalAuto.driverDetailsCVRolesCardTab.click();
    await t.wait(1000);
    await driverDetailRole.numOfAccident_PolicyLevel.selectOptionByLabel("0");
    await driverDetailRole.numOfAccident_AccountLevel.selectOptionByLabel("0");
    await driverDetailRole.numOfViolation_PolicyLevel.selectOptionByLabel("0");
    await driverDetailRole.numOfViolation_AccountLevel.selectOptionByLabel("0");
    await nextSubmissionWizard.submissionWizardNext.click();
    
    // Vehicle Screen
    await personalAuto.vehiclesListDetailPanel_tbAdd.click();
    await personalAuto.personalAuto_VehicleDVVin_DV.setValue("1NXBR32E45Z522411");
    await personalAuto.personalAuto_VehicleDVLicensePlate_DV.setValue("666676416");
    await personalAuto.personalAuto_VehicleDVLicenseState_DV.selectOptionByLabel("Colorado");
    await personalAuto.personalAuto_VehicleDVCostNew_DV.setValue("4000");
    await addDriverToVehicle.selectFirstDriver();

    await nextSubmissionWizard.submissionWizardNext.click();
    await nextSubmissionWizard.submissionWizardNext.click();
    await nextSubmissionWizard.submissionWizardNext.click();
    
    await policyReviewScreen.quoteButton.click();
    await quoteScreen.quoteButton.click();
    await quoteScreen.issuePolicyButton.click();
    
    await t.wait(3000);

    }
 
    async VerifiedIssuedPolicy(){
        let policyStatus = "Submission (Bound)";
        await t.expect().contains(policyStatus)

    }
} // submission# 0044730255