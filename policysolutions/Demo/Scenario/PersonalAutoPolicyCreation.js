import { t } from "testcafe";
import { PolicySummary} from "./ScenarioPages/PolicySummary";
import { QuoteScreenPage } from "./ScenarioPages/QuoteScreenPage";
import { PolicyReviewScreenPage } from "./ScenarioPages/PolicyReviewScreenPage";
import { AddVehiclePage } from "./ScenarioPages/AddVehiclePage";
import { DriverDetailRolePage } from "./ScenarioPages/DriverDetailsRolePage";
import { DriversPage } from "./ScenarioPages/DriversPage";
import { AddingExistingDriver } from "./ScenarioPages/AddingExistingDriver";
import { PreQualificationScreenPage } from "./ScenarioPages/PrequalificationScreenPage";
import { NextSubmissionWizards } from "./ScenarioPages/NextSubmissionWizards";
import { OfferingPage } from "./ScenarioPages/OfferingPage";
import { NewSubmissionPage } from "./ScenarioPages/NewSubmissionPage";
import { AccountMenuAction } from "./ScenarioPages/AccountMenuAction";


const accountMenuActions = new AccountMenuAction();
const newSubmission = new NewSubmissionPage();
const offeringScreen = new OfferingPage();
const nextSubmissionWizard = new NextSubmissionWizards();
const preQualificationScreen = new PreQualificationScreenPage();
const addExistingDriver = new AddingExistingDriver();
const addDriver = new DriversPage;
const driverDetailsRole = new DriverDetailRolePage()
const addVehicle = new AddVehiclePage();
const policyReviewScreen = new PolicyReviewScreenPage();
const quoteScreen = new QuoteScreenPage();
const policySummary = new PolicySummary();

export class PersonalAutoPolicyCreation{
   

    async submissionScenario(){

        //Create New submission and selecting an LOB
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await newSubmission.selectProduct("Personal Auto");

        //Selecting Offerings 
        await offeringScreen.offeringSelection.selectOptionByLabel("Basic Program");
        await nextSubmissionWizard.submissionWizardNext.click();
  
        //Selecting PA-Pre Qualification
        await preQualificationScreen.currentlyInsuredQuestion.selectOptionByLabel('Yes');
        await nextSubmissionWizard.submissionWizardNext.click();

        //Clicking next on Policy Info 
        await nextSubmissionWizard.submissionWizardNext.click();

        //Adding Driver 
        await addExistingDriver.selectExistingDriver();
        await addDriver.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue('11131990');
        await t.pressKey('tab');
        await addDriver.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue('7JDX543');
        await addDriver.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByLabel('Arizona');

        //Update driver details 
        await addDriver.driverDetailsCVRolesCardTab.click();
        await driverDetailsRole.yearFirstLicensed.setValue('2019');
        await driverDetailsRole.numOfAccident_PolicyLevel.selectOptionByValue('0');
        await driverDetailsRole.numOfAccident_AccountLevel.selectOptionByValue('0');
        await driverDetailsRole.numOfViolation_PolicyLevel.selectOptionByValue('0');
        await driverDetailsRole.numOfViolation_AccountLevel.selectOptionByValue('0');
        await nextSubmissionWizard.submissionWizardNext.click();

        //add driver
        await addDriver.vehiclesListDetailPanel_tbAdd.click();
        await addDriver.personalAuto_VehicleDVVin_DV.setValue('WDDHF8JB3CA549096');
        await t.wait(1000); 
        await t.pressKey('tab');
        await addDriver.personalAuto_VehicleDVLicenseState_DV.selectOptionByLabel('Arizona');
        await addDriver.personalAuto_VehicleDVCostNew_DV.setValue('1000');
        await t.pressKey('tab');
        await addVehicle.selectFirstDriver();
        await nextSubmissionWizard.submissionWizardNext.click();

        // Clicking next on PA Coverages
        await nextSubmissionWizard.submissionWizardNext.click();

        //clicking next Risk analysis screen 
        await nextSubmissionWizard.submissionWizardNext.click();

        //Clicking Quote button 
        await policyReviewScreen.quoteButton.click();
    }

    async issueSubmission(){
        await quoteScreen.bindOptionsButton.click();
        await quoteScreen.issuePolicyButton.click();
    }

    async verifyPolicyIsCreated() {            
        await quoteScreen.viewPolicy.click();
        let policyStatus = await policySummary.policyFile_SummaryPolicyOverviewDashboardPolicyDetailsDetailViewTileBadge.component.find('.gw-label').innerText;
        console.log("Policy Status:" + policyStatus);
        await t.expect(policyStatus).eql("In Force");
    } 
}
