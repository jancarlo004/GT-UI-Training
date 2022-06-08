import { AccountMenuActions } from "../../pages/navigation/menuActions/AccountMenuActions";
import { NewSubmissionScreen } from "./ScenarioPages/SubmissionWizard/NewSubmissionScreen";
import { NextSubmissionWizard } from "../../pages/navigation/submissionWizard/NextSubmissionWizard";
import { PersonalAuto } from "../../pages/lOBWizardStepGroup/PersonalAuto";
import { DriverDetailRole } from "./ScenarioPages/SubmissionWizard/DriverDetailsRole";
import { AddExistingDriver } from "./ScenarioPages/SubmissionWizard/AddExistingDriver";
import { AddVehicle } from "./ScenarioPages/SubmissionWizard/AddVehicle";
import { PolicyReviewScreen } from "./ScenarioPages/SubmissionWizard/PolicyReviewScreen"
import { QuoteScreen } from "./ScenarioPages/SubmissionWizard/QuoteScreen"
import { OfferingScreen } from "./ScenarioPages/SubmissionWizard/OfferingScreen";
import { PrequalificationScreen } from "./ScenarioPages/SubmissionWizard/PrequalificationScreen";
import { PolicyMenuLinks } from "../../pages/navigation/menuLinks/PolicyMenuLinks";
import { Billing } from "../../pages/policy/Billing";
import { NewFormsScreen } from "./ScenarioPages/SubmissionWizard/NewFormsScreen";
import world from "../utils/world.js";
import { t } from "testcafe";

const accountMenuActions = new AccountMenuActions();
const newSubmissionScreen = new NewSubmissionScreen();
const nextSubmissionWizard = new NextSubmissionWizard();
const personalAuto = new PersonalAuto();
const driverDetailRole = new DriverDetailRole();
const addExistingDriver = new AddExistingDriver();
const addVehicle = new AddVehicle();
const policyReviewScreen = new PolicyReviewScreen();
const quoteScreen = new QuoteScreen();
const offeringScreen = new OfferingScreen();
const prequalificationScreen = new PrequalificationScreen();
const policyMenuLinks = new PolicyMenuLinks();
const billing = new Billing();
const newFormsScreen = new NewFormsScreen();

export class SubmissionScenario {
    constructor() {}
  
    async createPASubmission() {
        //click new submission
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();

        //select Personal Auto
        await newSubmissionScreen.selectProduct("Personal Auto");

        //Click next on offerings page
        await offeringScreen.offeringSelection.selectOptionByLabel("Basic Program");
        await nextSubmissionWizard.submissionWizardNext.click();

       //click next on pre-qual questions
        await prequalificationScreen.currentlyInsuredQuestion.selectOptionByLabel('Yes');
        await nextSubmissionWizard.submissionWizardNext.click();

        //click next on Policy Info
        await nextSubmissionWizard.submissionWizardNext.click();

        //add driver
        await addExistingDriver.selectExistingDriver();
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue("11131990");
        await t.pressKey('tab'); // trigger post on change
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("7JDX543");
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByValue('CA');

        //update driver role
        await personalAuto.driverDetailsCVRolesCardTab.click();
        await driverDetailRole.yearFirstLicensed.setValue("2008");
        await driverDetailRole.numOfAccident_AccountLevel.selectOptionByValue("0");
        await driverDetailRole.numOfAccident_PolicyLevel.selectOptionByValue("0");
        await driverDetailRole.numOfViolation_PolicyLevel.selectOptionByValue("0");
        await driverDetailRole.numOfViolation_AccountLevel.selectOptionByValue("0");
        await nextSubmissionWizard.submissionWizardNext.click();
        
        //add vehicle
        await personalAuto.vehiclesListDetailPanel_tbAdd.click();
        await personalAuto.personalAuto_VehicleDVVin_DV.setValue(world.vehicleVin);
        await t.pressKey('tab'); // trigger post on change
        await personalAuto.personalAuto_VehicleDVLicenseState_DV.selectOptionByValue('CA');
        await personalAuto.personalAuto_VehicleDVCostNew_DV.setValue("25000.00")
        await t.pressKey('tab'); // trigger post on change
        await addVehicle.selectFirstDriver();
        await nextSubmissionWizard.submissionWizardNext.click();
        
        //click next on PA Coverages
        await nextSubmissionWizard.submissionWizardNext.click();
        
        //click next on Risk Analysis
        await nextSubmissionWizard.submissionWizardNext.click();
    }

    async quoteSubmission() {
        await policyReviewScreen.quoteButton.click();
    }

    async checkJobStatus(jobStatus) {
        const jobWizardBarText = await quoteScreen.jobLabel.textContent;
        console.log("jobWizardBarText: " + jobWizardBarText )
        await t.expect(jobWizardBarText).contains(jobStatus);
    }

    async checkPremiumPolicyExist(vehicleVin) {
        const premiumAmount = await quoteScreen.totalPremium.textContent;
        console.log("total premium = " + premiumAmount)
        await t.expect(parseInt(premiumAmount.replace(/\D/g,''))).gt(0);
        
    }

    async bindSubmission() {
        await quoteScreen.bindOptionsButton.click();
        await quoteScreen.bindOnlyButton.click();
        await quoteScreen.viewSubmissionLink.click();
    }

    async getTotalBilled() {
        await quoteScreen.viewPolicyLink.click();
        await policyMenuLinks.menuLinksPolicyFile_PolicyFile_Billing.click();
        return parseInt((await billing.policy_BillingScreenTotalBilled.getValue()).replace(/\D/g,''));
    }

    async issueSubmission() {
        await quoteScreen.bindOptionsButton.click();
        await quoteScreen.issuePolicyButton.click();
        await quoteScreen.viewSubmissionLink.click();
    }

    async checkFormsInferred() {
        await newFormsScreen.formsScreen.click();
        const formsRows = await newFormsScreen.formsDetailViewListView.rowCount();
        console.log("# of forms row = " + formsRows)
        await t.expect(await newFormsScreen.formsDetailViewListView.rowCount()).gt(0);
    }

    async checkNoFormsInferred() {
        await newFormsScreen.formsScreen.click();
        const formsRows = await newFormsScreen.formsDetailViewListView.rowCount();
        console.log("# of forms row = " + formsRows)
        await t.expect(await newFormsScreen.formsDetailViewListView.rowCount()).eql(0);
    }
}