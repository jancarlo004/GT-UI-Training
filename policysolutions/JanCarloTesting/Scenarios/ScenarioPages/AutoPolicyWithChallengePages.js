import { PcfButton, PcfComponent, PcfListView } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { QuoteScreen } from "../ScenarioPages/QuoteScreen";
import world from "../../util/world";

const quoteScreen = new QuoteScreen();

export class AutoPolicyWithChallengePages{

    productLV = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    offeringSelection = PcfComponent("#SubmissionWizard-OfferingScreen");
    qualificationScreen = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen");
    policyInfoScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen");
    driverScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen");
    addButton = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
    existingContact = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact");
    newDriverScreen = PcfComponent("#NewPolicyDriverPopup-ContactDetailScreen");
    driversLV = PcfListView("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV");
    retrieveMVRButton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-RetrieveMVRButton");
    vehicleScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen");
    coverageScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PersonalAutoScreen");
    quoteScreen = PcfComponent("#SubmissionWizard-SubmissionWizard_QuoteScreen");
    issuePolicy = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");

    async selectAutoLOB(lob){
        let personalAutoLabel = this.productLV.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = personalAutoLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }

    async selectInputOffering(selectInput, value){
        let selectDropdown = this.offeringSelection.component.find('.gw-label').withText(selectInput).sibling('div').find('select');
        await t.click(selectDropdown);
        await t.click(selectDropdown.find('option').withText(value));
    }

    async offeringScreenNextButton(nextButton){
        await t.click(this.offeringSelection.component.parent('div').prevSibling('div').find('.gw-label').withText(nextButton));
    }
    async qualificationScreenNextButton(nextButton){
        await t.click(this.qualificationScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(nextButton));
    }
    async policyInfoScreenNextButton(nextButton){
        await t.click(this.policyInfoScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(nextButton));
    }
    async SelectExistingDriver(){
        let existingDriverName =  this.addButton.component.find('.gw-subMenu').find('.gw-label').withText(world.accountName);
            await t.click(this.addButton.component).hover(this.existingContact.component).click(existingDriverName);
            await t.wait(2000);
            await this.addMVR();
    }

    async createNewDriver(newPerson){
        for(let i=0; i<= world.driverFirstName.length - 1; i++){
            let newPersons = this.addButton.component.find('.gw-label').withText(newPerson);
            await this.addButton.click();
            await t.click(newPersons);
            await t.wait(1000);
            await this.textInputFieldForCreatedDriver("First name", world.driverFirstName[i]); 
            await this.textInputFieldForCreatedDriver("Last name",world.driverLastName[i]);
            await this.textInputFieldForCreatedDriver("Date of Birth",world.dateOfBirth[i]);
            await this.selectInputFieldForCreatedDriver("Marital Status",world.maritalStatus[i]);
            await this.textInputFieldForCreatedDriver("Address 1",world.addressLine[i]);
            await this.selectInputFieldForCreatedDriver("State",world.state[i]);
            await t.pressKey('tab');
            await this.selectInputFieldForCreatedDriver("Address Type",world.addressType[i]);
            await this.textInputFieldForCreatedDriver("License #",world.licenseNumber[i]);
            await this.selectInputFieldForCreatedDriver("License State",world.licenseState[i]);
            await this.clickOkButton("OK");
            await t.wait(1000);
            await t.click(this.driverScreen.component.find('div.gw-CardTabWidget[id$=-RolesCardTab]').find('.gw-label').withText("Roles"));
            await this.textInputFieldForCreatedContact("Year First Licensed",world.yearLicensed[i]);
            await this.selectNumberOfAccident('td[id$=-PolicyDriverNumberOfAccidents_Cell]',world.numberOfAccidentsPolicyLevel[i]);
            await this.selectNumberOfViolations('td[id$=-PolicyDriverNumberOfViolations_Cell]',world.numberOfViolationsPolicyLevel[i]);
            await this.selectNumberOfAccident('td[id$=-DriverNumberOfAccidents_Cell]',world.numberOfAccidentsAccountLevel[i]);
            await this.selectNumberOfViolations('td[id$=-DriverNumberOfViolations_Cell]',world.numberOfViolationsAccountLevel[i]);
            await this.addMVR();
            await this.storeDriverName();

        }
    }
    async textInputFieldForCreatedDriver(textFieldName, value){
        await t.typeText(this.newDriverScreen.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }
    async selectInputFieldForCreatedDriver(selectInputName, selectInputOptionValue){
        let dropdownElements = this.newDriverScreen.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
        await t.click(dropdownElements);
        await t.click(dropdownElements.find('option').withText(selectInputOptionValue));

    }
    async clickOkButton(okButton){
        await t.click(this.newDriverScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(okButton));
    }
    async textInputFieldForCreatedContact(textFieldName, value){
        await t.typeText(this.driverScreen.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }

    async selectNumberOfAccident(columnName,value){
        if(columnName == 'td[id$=-PolicyDriverNumberOfAccidents_Cell]'){
            let rowName = this.driverScreen.component.find('td[id$=-NumberOfAccidentsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Accidents");
            let dropDown = rowName.parent('td').sibling(columnName).find('select');
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value)); 
        }else{
            let rowName = this.driverScreen.component.find('td[id$=-NumberOfAccidentsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Accidents");
            let dropDown = rowName.parent('td').sibling(columnName).find('select');
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value)); 
        }
    }

    async selectNumberOfViolations(columnName, value){
        if(columnName == 'td[id$=-DriverNumberOfAccidents_Cell]'){
            let rowName = this.driverScreen.component.find('td[id$=-NumberOfViolationsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Violations");
            let dropDown = rowName.parent('td').sibling(columnName).find('select');
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value));
        }else{
            let rowName = this.driverScreen.component.find('td[id$=-NumberOfViolationsLabel_Cell]').find('.gw-value-readonly-wrapper').withText("Number of Violations");
            let dropDown = rowName.parent('td').sibling(columnName).find('select');
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value));
        }
    }

    async addMVR(){
        await this.driversLV.clickOnCell(-1,0);
        await this.retrieveMVRButton.click();

}
async storeDriverName(){
    for(let i=0; i< await this.driversLV.rowCount(); i++){
         world.drivers[i] = await this.driversLV.getTextFromCellByColumnName(i,"Name");

    }
}

    async driverScreenNextButton(nextButton){
    await t.click(this.driverScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(nextButton));
}

async createNewVehicle(){
        
    for(let i=0; i< world.drivers.length; i++){ 
        // let driverName = world.driverFirstName[i] + " " + world.driverLastName[i];
        await t.click(this.vehicleScreen.component.find('.gw-label').withText("Create Vehicle"));
        await this.textInputFieldForCreateVehicle("VIN", world.newVehicleVin[i]);
        await t.pressKey('tab');
        await this.selectInputFieldForCreateVehicle("License State",world.licenseStateInVehicle[i]);
        await this.textInputFieldForCreateVehicle("Cost New", world.costNew[i]);

        let addDriverButton = this.vehicleScreen.component.find('div.gw-AddButtonWidget[id$=-AddDriver]').find('.gw-label').withText("Add");
        await t.click(addDriverButton);
        await t.click(addDriverButton.parent('div').sibling('div.gw-subMenu').find('.gw-label').withExactText(world.drivers[i]));

    }
}
async textInputFieldForCreateVehicle(textFieldName, value){
    await t.typeText(this.vehicleScreen.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
}
async selectInputFieldForCreateVehicle(selectInputName, selectInputOptionValue){
    let dropdownElements = this.vehicleScreen.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
    await t.click(dropdownElements);
    await t.click(dropdownElements.find('option').withText(selectInputOptionValue));
}

async vehicleScreenNextButton(nextButton){
    await t.click(this.vehicleScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(nextButton));
}
async coverageScreenNextButton(nextButton){
    await t.click(this.coverageScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(nextButton));
}

async quoteScreenIssuePolicy(nextButton){
    let bindOptionsButton = this.quoteScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(nextButton);
    await t.click(bindOptionsButton);
    await this.issuePolicy.click();
    world.policyNumber = await quoteScreen.policyNumberLabel.component.find('.gw-infoValue').innerText;

    }
}