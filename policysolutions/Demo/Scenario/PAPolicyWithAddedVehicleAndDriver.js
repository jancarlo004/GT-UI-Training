import { t } from "testcafe";
import { PolicySummary} from "./ScenarioPages/PolicySummary";
import { QuoteScreenPage } from "./ScenarioPages/QuoteScreenPage";
import { PolicyReviewScreenPage } from "./ScenarioPages/PolicyReviewScreenPage";
import { AddVehiclePage } from "./ScenarioPages/AddVehiclePage";
import { DriverDetailRolePage } from "./ScenarioPages/DriverDetailsRolePage";
import { DriversPage } from "./ScenarioPages/DriversPage";
import { AddingExistingDriver } from "./ScenarioPages/AddingExistingDriver";
import { NextSubmissionWizards } from "./ScenarioPages/NextSubmissionWizards";
import { OfferingPage } from "./ScenarioPages/OfferingPage";
import { NewSubmissionPage } from "./ScenarioPages/NewSubmissionPage";
import { AccountMenuAction } from "./ScenarioPages/AccountMenuAction";
import { ProductPage } from "./ScenarioPages/ProductPage";
import { PreQualificationScreenPage } from "./ScenarioPages/PreQualificationScreenPage";
import tests from "../Util/tests";


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
const productSelector = new ProductPage();


export class PAPolicyWithAddedVehicleAndDriver{
   

    async submissionScenario(){

        //Create New submission and selecting an LOB
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
       
        //Product Selector
        let productSelect = await productSelector.productSelect.component.find('td[id$=-Name_Cell]').withExactText('Personal Auto')
        .sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(productSelect);

        //Selecting Offerings 
        await offeringScreen.offeringSelection.selectOptionByLabel("Basic Program");
        await nextSubmissionWizard.submissionWizardNext.click();

        //Selecting Prequalification Screen 
        await preQualificationScreen.SelectPreQualificationQuestion();
        await nextSubmissionWizard.submissionWizardNext.click();

        //Clicking next on Policy Info 
        await nextSubmissionWizard.submissionWizardNext.click();

        //AddingExisting  Driver 
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
         //Adding New Driver
         await this.addNewDriver();
         await nextSubmissionWizard.submissionWizardNext.click();

        //Adding a Vehicle
        await productSelector.vehiclesListDetailPanel_tbAdd.click();
        await addDriver.personalAuto_VehicleDVVin_DV.setValue('WDDHF8JB3CA549096');
        await t.wait(1000); 
        await t.pressKey('tab');
        await addDriver.personalAuto_VehicleDVLicenseState_DV.selectOptionByLabel('Arizona');
        await addDriver.personalAuto_VehicleDVCostNew_DV.setValue('1000');
        await addVehicle.selectFirstDriver();
        await t.pressKey('tab');

        // adding a new vehicle 
        await this.addNewVehicle();
        await nextSubmissionWizard.submissionWizardNext.click();

        // Clicking next on PA Coverages
        await nextSubmissionWizard.submissionWizardNext.click();

        //clicking next Risk analysis screen 
        await nextSubmissionWizard.submissionWizardNext.click();

        //Clicking Quote button 
        await policyReviewScreen.quoteButton.click();
        await this.issueSubmission();
    }

    async addNewDriver() {
        for(let i=0; i<tests.vehicleVin.length;i++){
            await addDriver.addDriver.click();
            await addDriver.newPerson.click();
            await t.wait(1000);
            await addDriver.firstName.setValue(tests.driverFirstName[i]);
            await addDriver.lastName.setValue(tests.driverLastName[i]);
            await addDriver.dateOfBirth.setValue(tests.dateOfBirth[i]);
            await addDriver.maritalStatus.selectOptionByLabel(tests.maritalStatus[i]);
            await addDriver.addressLine.setValue(tests.addressLine[i]);
            await addDriver.state.selectOptionByLabel(tests.state[i]);
            await t.pressKey('tab');
            await addDriver.addressTypesss.selectOptionByLabel(tests.addressType[i]);
            await addDriver.licenseNumber.setValue(tests.licenseNumber[i]);
            await addDriver.licenseStateForNewDrivers.selectOptionByLabel(tests.licenseState[i]);
            await addDriver.okButtonsss.click();
            await t.wait(1000);
            await addDriver.rolesTab.click();
            await addDriver.yearFirstLicensedNewPerson.setValue(tests.yearLicensed[i]);
            await addDriver.numberOfAccidentPolicyLevelNewPerson.selectOptionByLabel(tests.numberOfAccidentsPolicyLevel[i]);
            await addDriver.numberOfViolationPolicyLevelNewPerson.selectOptionByLabel(tests.numberOfViolationsPolicyLevel[i]);
            await addDriver.numberOfAccidentAccountLevelNewPerson.selectOptionByLabel(tests.numberOfAccidentsAccountLevel[i]);
            await addDriver.numberOfViolationAccountLevelNewPerson.selectOptionByLabel(tests.numberOfViolationsAccountLevel[i]);
        }
        
    }

    async addNewVehicle(){
        for(let i=0; i<tests.vehicleVin.length;i++){
        await productSelector.vehiclesListDetailPanel_tbAdd.click();
        await addDriver.personalAuto_VehicleDVVin_DV.setValue(tests.vehicleVin[i]);
        await t.wait(1000); 
        await t.pressKey('tab');
        await addDriver.personalAuto_VehicleDVLicenseState_DV.selectOptionByLabel(tests.licenseState[i]);
        await addDriver.personalAuto_VehicleDVCostNew_DV.setValue(tests.costNew[i]);
        await addVehicle.selectFirstDriver();
        }
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
