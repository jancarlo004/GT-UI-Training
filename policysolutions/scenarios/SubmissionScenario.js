import { PcfButton, PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import { AccountMenuActions } from "../../pages/navigation/menuActions/AccountMenuActions";
import { NewSubmissionScreen } from "./ScenarioPages/SubmissionWizard/NewSubmissionScreen.js"; //oks na
import { NextSubmissionWizard } from "../../pages/navigation/submissionWizard/NextSubmissionWizard";
import { PersonalAuto } from "../../pages/lOBWizardStepGroup/PersonalAuto";
import { DriverDetailRole } from "./ScenarioPages/SubmissionWizard/DriverDetailsRole.js"; //oks na
import { AddExistingDriver } from "./ScenarioPages/SubmissionWizard/AddExistingDriver.js"; //oks na
import { AddVehicle } from "./ScenarioPages/SubmissionWizard/AddVehicle.js";//oks na
import { PolicyReviewScreen } from "./ScenarioPages/SubmissionWizard/PolicyReviewScreen.js"; //oksna
import { QuoteScreen } from "./ScenarioPages/SubmissionWizard/QuoteScreen.js"; //oksna
import { OfferingScreen } from "./ScenarioPages/SubmissionWizard/OfferingScreen.js"; //oksna
import { PrequalificationScreen } from "./ScenarioPages/SubmissionWizard/PrequalificationScreen.js";//oksna
import { PolicyMenuLinks } from "../../pages/navigation/menuLinks/PolicyMenuLinks";
import { Billing } from "../../pages/policy/Billing";
import { NewFormsScreen } from "./ScenarioPages/SubmissionWizard/NewFormsScreen.js";//oks na
import { QualificationScreen } from "./ScenarioPages/SubmissionWizard/QualificationScreen.js"; //oksna
import world from "../utils/world.js";
import CreateHOPolicyInfo from "../utils/CreateHOPolicyInfo.js";
import { t } from "testcafe";
import { HOPHomeowners } from '../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/lOBWizardStepGroup/HOPHomeowners';
import { PolicyTabBar } from '../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/tabBar/PolicyTabBar';
import { PolicyInfoScreen } from '../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen';
import CreateHOPolicyInfocopy from '../utils/InlandMarineInfo';
import { InlandMarineActions } from './ScenarioPages/SubmissionWizard/InlandMarineActions';
import { IMBuildingPopup } from '../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/popup/IMBuilding/IMBuildingPopup';
import InlandMarineInfo from '../utils/InlandMarineInfo';


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
const qualifications = new QualificationScreen();
const hopHomeowners = new HOPHomeowners();
const policytabbar = new PolicyTabBar();
const policyinfoscreen = new PolicyInfoScreen();
const inlandmarineActions = new InlandMarineActions();

let policyNumber = "";


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

    async createHOSubmission() {
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await newSubmissionScreen.selectProduct("Homeowners");
        //Qualificatoins
        await qualifications.PolicyType.selectOptionByLabel(CreateHOPolicyInfo.policyType);
        
        await qualifications.CoverageForm.selectOptionByLabel(CreateHOPolicyInfo.coverageForm);
        

        await this.WhoOccupiesSelectOptionbyValue("Who occupies this dwelling?",CreateHOPolicyInfo.WhoOccupies);        
        
        if (CreateHOPolicyInfo.WhoOccupies == "Myself") {            
            await this.DoYouOccupyDwellingFullTime("Do you occupy this dwelling full time?",CreateHOPolicyInfo.DoyouOccupythisDwelling);            
        }
        //Navigate To Policy Info
        await nextSubmissionWizard.submissionWizardNext.click();
        //Navigate To Dwelling
        await nextSubmissionWizard.submissionWizardNext.click();
        await this.DwellingDetails();
        //Navigate to Dwelling construction
        await nextSubmissionWizard.submissionWizardNext.click();
        await this.DwellingConstructionDetails();
        //Navigate to Coverages
        await nextSubmissionWizard.submissionWizardNext.click();
        await this.CoveragesDetails();
        //Navigate to Modifiers kindly create method (Modifiers) if there are scenario regarding this screen
        await nextSubmissionWizard.submissionWizardNext.click();
        //Navigate to Risk Analysis kindly create method (Risk Analysis) if there are scenario regarding this screen
        await nextSubmissionWizard.submissionWizardNext.click();
        //Navigate to PolicyReview kindly create method (Modifiers) if there are scenario regarding this screen
        await nextSubmissionWizard.submissionWizardNext.click();                
    }

    async createInlandMarineSubmission() {
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await newSubmissionScreen.selectProduct("Inland Marine");
        await nextSubmissionWizard.submissionWizardNext.click(); 
        await inlandmarineActions.selectCoverageParts(); 
        await nextSubmissionWizard.submissionWizardNext.click(); 
        await inlandmarineActions.addnewLocation(); //add condition here if user wants to add additional/new location besides the default
        await inlandmarineActions.addBuilding();
        await nextSubmissionWizard.submissionWizardNext.click();
        await inlandmarineActions.accountsReceivable();       
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();    
    }

    async WhoOccupiesSelectOptionbyValue(dropdownName, value) {
        let whoOccupies = await qualifications.HOPprequalification.component.find('td[id$=-questionText_Cell]').withExactText(dropdownName).sibling('.gw-CellWidget').find('div.gw-ExpressionRangeValueWidget[id$=-ChoiceSelectInput]');
        let whoOccupiesdd = PcfSelectInput(whoOccupies);
        await whoOccupiesdd.selectOptionByLabel(value);            
    }

    async DoYouOccupyDwellingFullTime(radiobuttonName,value) {            
            let Questionlabel = qualifications.HOPprequalification.component.find('td[id$=-questionText_Cell]').withExactText(radiobuttonName);                                     
            let YesorNorradioButton = Questionlabel.sibling('td[id$=-BooleanRadioInput_Cell]').find('div.gw-BooleanRadioValueWidget[id$=-BooleanRadioInput]').find('.gw-label--inner').withText(value);
            await t.click(YesorNorradioButton);                                
    }   

    async DwellingDetails() {
        //Please input dwelling screen changes here
        await hopHomeowners.hOPDwellingProtectionInputSetProtectionClass.selectOptionByLabel(CreateHOPolicyInfo.FireProtectionClass);                        
    }

    async DwellingConstructionDetails() {
        //Please input dwelling construction screen changes here
       await hopHomeowners.hOPDwellingConstructionDetailsDVWiringType.selectOptionByLabel(CreateHOPolicyInfo.Wiring);             
    }

    async CoveragesDetails() {
          //Please input coverage screen changes here
        //continue        
        await hopHomeowners.hopCoveragesCoinsurance.selectOptionByLabel(CreateHOPolicyInfo.Coinsurance);       
        let LossofRentalIncome = hopHomeowners.hopCoverageDLossOfUse.component.find('div.gw-BooleanRadioValueWidget[id$=-HOPCovDLossOfRent]').find('.gw-label--inner').withText("Yes");        
        await t.click(LossofRentalIncome);
        await hopHomeowners.hopCoverageProhibitUseCivilAuthority.selectOptionByLabel(CreateHOPolicyInfo.ProhibitedUseCivilAuthority);       
    }

    async VerifyPolicyIsCreated() {
        let SummaryPolicyNumber = "";
        await policytabbar.tabBarPolicyTab.click();  
        !await policytabbar.tabBarPolicyTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(policytabbar.tabBarPolicyTab.component.find('div.gw-action--expand-button'));      
        await policytabbar.policyTabPolicyTab_PolicySearchField.setValue(policyNumber);
        await policytabbar.policyTabPolicyTab_SearchPolicyButton.click();
        SummaryPolicyNumber = await quoteScreen.PolicyNumber.component.find(".gw-infoValue").innerText;
        await t.expect(SummaryPolicyNumber).eql(policyNumber);        
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
        policyNumber = await quoteScreen.viewPolicyLink.component.find(".gw-infoValue").innerText;        
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

    async CreateWorkersCompensation() {
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();        
        await newSubmissionScreen.selectProduct("Workers' Compensation");
    }

    async WCPreQualificationRadioButton(table) {        
        let count = table.length - 1;
        for (let i = 0; i <= count; i++) {           
            let question = table[i][0];
            let answer = table[i][1];          
            let questioncell = qualifications.PreQualification.component.find('td[id$=-questionText_Cell]').withExactText(question);
            let rdnAnswerCell = questioncell.sibling('td[id$=-BooleanRadioInput_NoPost_Cell]').find('div.gw-BooleanRadioValueWidget[id$=-BooleanRadioInput_NoPost]').find('.gw-label--inner').withExactText(answer);          
            await t.click(rdnAnswerCell);                                                       
        }        
    }

    async WCProcess() {
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await this.WCCoverages();      
        await nextSubmissionWizard.submissionWizardNext.click();
    }

    async WCSupplemental(table) {
        let count = table.length - 1;         
        if (count > 0) {
            await this.WCSupplementalMixAnswer(table);            
        }
        else {
            await this.WCSupplementDefaultAnswer(table);
        }

    }

    async WCSupplementDefaultAnswer(table) {        
        let supplementalLvw = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV');
        let count = world.WCSuplemental.SupplementalQuestions.length - 1;
        let answer = table[0][1];        
        for (let i=0; i <= count; i++) {
            let question = world.WCSuplemental.SupplementalQuestions[i];
            let questioncell = supplementalLvw.component.find('td[id$=-questionText_Cell]').withText(question);
            let rdnAnswerCell = questioncell.sibling('td[id$=-BooleanRadioInput_NoPost_Cell]').find('div.gw-BooleanRadioValueWidget[id$=-BooleanRadioInput_NoPost]').find('.gw-label--inner').withExactText(answer);
            await t.click(rdnAnswerCell);
        }        
    }

    async WCSupplementalMixAnswer(table) {
        console.log("WCSupplementalMixAnswer method: " + table)
        let supplementalLvw = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV');
        let count = table.length - 1;                
        for (let i=0; i <= count; i++) {            
            let question = table[i][0];
            let answer = table[i][1];
            let questioncell = supplementalLvw.component.find('td[id$=-questionText_Cell]').withText(question);
            let rdnAnswerCell = questioncell.sibling('td[id$=-BooleanRadioInput_NoPost_Cell]').find('div.gw-BooleanRadioValueWidget[id$=-BooleanRadioInput_NoPost]').find('.gw-label--inner').withExactText(answer);
            await t.click(rdnAnswerCell);
        }
    }

    async WCPreQualificationTextField(table) {        
        let count = table.length - 1;
        for (let i = 0; i <= count; i++) {            
            let question = table[i][0];
            let answer = table[i][1];          
            let questioncell = qualifications.PreQualification.component.find('td[id$=-questionText_Cell]').withExactText(question);          
            let txtAnswercell = questioncell.sibling('td[id$=-IntegerFieldInput_NoPost_Cell]').find('div.gw-TextValueWidget[id$=-IntegerFieldInput_NoPost]');        
            await t.typeText(txtAnswercell,answer);                                                                        
          }        
    }

    async WCCoverages() {
        let locationdropdown = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-Loc');
        let classcode = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-ClassCode');
        let basis = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-AnnualRenum');
        workerscomp.submissionWizardLOBWizardStepGroupLineWizardStepSetWorkersCompCoverageConfigScreenWorkersCompCoverageCVWorkersCompClassesInputSetWCCovEmpLV_tbAdd.click();
        await locationdropdown.selectOptionByLabel('1: 250 W 10th AVE, Phoenix, AZ');
        await classcode.setValue('0005')
        await t.pressKey('tab');
        await basis.setValue('1000');
    }
}