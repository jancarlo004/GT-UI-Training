'use strict'
import { PcfComponent } from "@gtui/gt-ui-framework"
import { t } from "testcafe";
import world from "../../utils/world";

export class AutoSubmissionScreen {

    newSubmissionScreen = PcfComponent('#NewSubmission-NewSubmissionScreen');
    offeringScreen = PcfComponent('#SubmissionWizard-OfferingScreen');
    preQualificationScreen = PcfComponent('#SubmissionWizard-SubmissionWizard_PreQualificationScreen');
    policyInfoScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen');
    driverScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen');
    newPolicyDriverContactDetailsScreen = PcfComponent('#NewPolicyDriverPopup-ContactDetailScreen');
    vehicleScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen');
    coverageScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PersonalAutoScreen');
    riskAnalysisScreen = PcfComponent('#SubmissionWizard-Job_RiskAnalysisScreen');
    policyReviewScreen = PcfComponent('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen');
    quoteScreen = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen');

    infoBar = PcfComponent('#JobComplete-JobWizardInfoBar');
    async selectLOB(lob){
        let productLabel = this.newSubmissionScreen.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let productSelection = productLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]'); 
        await t.click(productSelection);
    }
    
    async selectOfferingSelection(value){
        let offeringSelection = this.offeringScreen.component.find('.gw-label').withText("Offering Selection").sibling('div').find('select');
        await t.click(offeringSelection);
        await t.click(offeringSelection.find('option').withAttribute('value', value));
    }

    async addNewDriver(){
        for(let i=0; i<world.vehicleVin.length; i++){
            let driverLVAddButton = this.driverScreen.component.find('.gw-label').withText("Add");
            await t.click(driverLVAddButton);
            await t.click(driverLVAddButton.parent('div').sibling('div').find('.gw-label').withText("New Person"));
            await this.setTextFieldValueForContactDetail("First name", world.driverFirstName[i]);
            await this.setTextFieldValueForContactDetail("Last name", world.driverLastName[i]);
            await this.setTextFieldValueForContactDetail("Date of Birth", world.dateOfBirth[i]);
            await this.selectOptionValueForContactDetail("Marital Status", world.maritalStatus[i]);
            await this.setTextFieldValueForContactDetail("Address 1", world.addressLine[i]);
            await this.selectOptionValueForContactDetail("State", world.state[i]);
            await t.pressKey('tab');
            await this.selectOptionValueForContactDetail("Address Type", world.addressType[i]);
            await this.setTextFieldValueForContactDetail("License #", world.licenseNumber[i]);
            await this.selectOptionValueForContactDetail("License State", world.licenseState[i]);
            await t.click(this.newPolicyDriverContactDetailsScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("OK"));
            await t.click(this.driverScreen.component.find('div.gw-CardTabWidget[id$=-RolesCardTab]').find('.gw-label').withText("Roles"));
            await this.setTextFieldValueForDriver("Year First Licensed", world.yearLicensed[i]);

            await this.selectPolicyNumberOfAccidents(world.numberOfAccidentsPolicyLevel[i]);
            await this.selectAccountNumberOfAccidents(world.numberOfAccidentsAccountLevel[i]);
            await this.selectPolicyNumberOfViolations(world.numberOfViolationsPolicyLevel[i]);
            await this.selectAccountNumberOfViolations(world.numberOfViolationsAccountLevel[i]);
        
        }
    }

    async addVehicle(){
        for(let i=0; i<world.vehicleVin.length; i++){
            let driverName = world.driverFirstName[i] + " " + world.driverLastName[i];
            await t.click(this.vehicleScreen.component.find('.gw-label').withText("Create Vehicle"));
            await this.setTextFieldValueForVehicleDetails("VIN", world.vehicleVin[i]);
            await t.pressKey('tab');
            await this.selectOptionValueForVehicleDetails("License State", world.licenseState[i]);
            await this.setTextFieldValueForVehicleDetails("Cost New", world.costNew[i]);
            let addDriverButton = this.vehicleScreen.component.find('div.gw-AddButtonWidget[id$=-AddDriver]').find('.gw-label').withText("Add");
            await t.click(addDriverButton);
            await t.click(addDriverButton.parent('div').sibling('div.gw-subMenu').find('.gw-label').withExactText(driverName));
        }
    }

    async setTextFieldValueForContactDetail(fName, v){
        await t.typeText(this.newPolicyDriverContactDetailsScreen.component.find('.gw-label').withText(fName).sibling('div').find('input'), v)
    }

    async selectOptionValueForContactDetail(dName, optionVal){
        let ddElement = this.newPolicyDriverContactDetailsScreen.component.find('.gw-label').withText(dName).sibling('div').find('select');
        await t.click(ddElement);
        await t.click(ddElement.find('option').withText(optionVal));
    }

    async setTextFieldValueForDriver(fName, v){
        await t.typeText(this.driverScreen.component.find('.gw-label').withText(fName).sibling('div').find('input'), v)
    }

    async setTextFieldValueForVehicleDetails(fName, v){
        await t.typeText(this.vehicleScreen.component.find('.gw-label').withText(fName).sibling('div').find('input'), v)
    }

    async selectOptionValueForVehicleDetails(dName, optionVal){
        let ddElement = this.vehicleScreen.component.find('.gw-label').withText(dName).sibling('div').find('select');
        await t.click(ddElement);
        await t.click(ddElement.find('option').withText(optionVal));
    }

    async selectPolicyNumberOfAccidents(value){
        let rowName = this.driverScreen.component.find('td[id$=-NumberOfAccidentsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Accidents");
        let dropDown = rowName.parent('td').sibling('td[id$=-PolicyDriverNumberOfAccidents_Cell]').find('select');
        await t.click(dropDown);
        await t.click(dropDown.find('option').withText(value));
    }

    async selectAccountNumberOfAccidents(value){
        let rowName = this.driverScreen.component.find('td[id$=-NumberOfAccidentsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Accidents");
        let dropDown = rowName.parent('td').sibling('td[id$=-DriverNumberOfAccidents_Cell]').find('select');
        await t.click(dropDown);
        await t.click(dropDown.find('option').withText(value));
    }

    async selectPolicyNumberOfViolations(value){
        let rowName = this.driverScreen.component.find('td[id$=-NumberOfViolationsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Violations");
        let dropDown = rowName.parent('td').sibling('td[id$=-PolicyDriverNumberOfViolations_Cell]').find('select');
        await t.click(dropDown);
        await t.click(dropDown.find('option').withText(value));
    }

    async selectAccountNumberOfViolations(value){
        let rowName = this.driverScreen.component.find('td[id$=-NumberOfViolationsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Violations");
        let dropDown = rowName.parent('td').sibling('td[id$=-DriverNumberOfViolations_Cell]').find('select');
        await t.click(dropDown);
        await t.click(dropDown.find('option').withText(value));
    }

    async bindIssueButton(value){
        let bindOptions = this.quoteScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Bind Options");
        let optionValue = bindOptions.parent('div').sibling('div').find('.gw-label').withText(value);
        await t.click(bindOptions);
        await t.click(optionValue);
    }
    
}