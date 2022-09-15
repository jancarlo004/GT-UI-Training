'use strict'
import { PcfButton,PcfComponent,PcfListView,PcfSelectInput,PcfTextInput } from "@gtui/gt-ui-framework"
import { t } from "testcafe";
import world from "../../util/world";

export class DriverScreen {

    addDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
    addExstingDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact");
    existingDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");
    licenseNumberForExistingDriver = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber");
    licenseStateForExistingDriver = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState");
    rolesTab = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab");
    licenseYear = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed");
    numberOfAccidentPolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents");
    numberOfAccidentAccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents");
    numberOfViolationsPolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations");
    numberOfViolationsAccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations");
    dateOfBirthForExistingDriver = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth");
    maritalStatusExistingDriver = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-MaritalStatus");
    addressLineExistingDriver = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    stateExistingDriver = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    lobListView = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    driverListView = PcfListView("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV");
    driverListViewWithCheckBox = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV");
    addNewDriverButton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
    firstName = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName");
    lastName = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName");
    dateOfBirth = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth");
    maritalStatus = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-MaritalStatus");
    addressLine = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    city = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City");
    state = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    zipCode = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode");
    addressTypesss = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressType");
    licenseNumber = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber");
    licenseStateForNewDrivers = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState");
    okButtonsss = PcfButton("#NewPolicyDriverPopup-ContactDetailScreen-Update");
    addNewPerson = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType");
    yearFirstLicensedNewPerson = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed");
    numberOfAccidentPolicyLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents");
    numberOfViolationPolicyLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations");
    numberOfAccidentAccountLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfAccidents");
    numberOfViolationAccountLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfViolations");
    nextButtonNewSubmission = PcfButton("#SubmissionWizard-Next"); 
    retrieveMVR = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-RetrieveMVRButton");
    existingDriverFields = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV");
    driverDetailsScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen");

   

    async textInputFieldForExistingDriver(textFieldName, value){
        await t.typeText(this.existingDriverFields.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }

    async selectInputForExistingDriver(selectInputName, selectInputOptionValue){
        let dropdownElements = this.existingDriverFields.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
        await t.click(dropdownElements);
        await t.click(dropdownElements.find('option').withText(selectInputOptionValue));

    }

    async textInputFieldForDriverScreen(textFieldName, value){
        await t.typeText(this.existingDriverFields.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }

    async selectInputForDriverScreen(selectInputName, selectInputOptionValue){
        let dropdownElements = this.driverDetailsScreen.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
        await t.click(dropdownElements);
        await t.click(dropdownElements.find('option').withText(selectInputOptionValue));

    }

    async createNewDriver(){
        for(let i=0; i<= world.driverFirstName.length - 1; i++){
            await this.addNewDriverButton.click();
            await this.addNewPerson.click();
            await t.wait(1000);
            await this.firstName.setValue(world.driverFirstName[i]);
            await this.lastName.setValue(world.driverLastName[i]);
            await this.dateOfBirth.setValue(world.dateOfBirth[i]);
            await this.maritalStatus.selectOptionByLabel(world.maritalStatus[i]);
            await this.addressLine.setValue(world.addressLine[i]);
            await this.state.selectOptionByLabel(world.state[i]);
            await t.pressKey('tab');
            await this.addressTypesss.selectOptionByLabel(world.addressType[i]);
            await this.licenseNumber.setValue(world.licenseNumber[i]);
            await this.licenseStateForNewDrivers.selectOptionByLabel(world.licenseState[i]);
            await this.okButtonsss.click();
            await t.wait(1000);
            await this.rolesTab.click();
            await this.yearFirstLicensedNewPerson.setValue(world.yearLicensed[i]);
            await this.numberOfAccidentPolicyLevelNewPerson.selectOptionByLabel(world.numberOfAccidentsPolicyLevel[i]);
            await this.numberOfViolationPolicyLevelNewPerson.selectOptionByLabel(world.numberOfViolationsPolicyLevel[i]);
            await this.numberOfAccidentAccountLevelNewPerson.selectOptionByLabel(world.numberOfAccidentsAccountLevel[i]);
            await this.numberOfViolationAccountLevelNewPerson.selectOptionByLabel(world.numberOfViolationsAccountLevel[i]);
            await this.addMVR();
            await this.storeDriverName();

        }
    }
    async addMVR(){
            await this.driverListView.clickOnCell(-1,0);
            await this.retrieveMVR.click();

    }
    async storeDriverName(){
        for(let i=0; i< await this.driverListView.rowCount(); i++){
             world.drivers[i] = await this.driverListView.getTextFromCellByColumnName(i,"Name");

        }
    }

    async SelectExistingDriver(){
        let existingDriverName =  this.component.find('.gw-subMenu').find('.gw-label').withText(world.accountName);
            await t.click(this.addDriver.component).hover(this.addExstingDriver.component).click(existingDriverName);
            await t.wait(2000);
            await this.dateOfBirthForExistingDriver.setValue("08/04/1990");
            await this.licenseNumberForExistingDriver.setValue("D05129922");
            await this.licenseStateForExistingDriver.selectOptionByLabel("Arizona");
            // await this.textInputFieldForExistingDriver("Date of Birth", "08/04/1990");
            // await this.textInputFieldForExistingDriver("License #", "D05129922");
            // await this.selectInputForExistingDriver("License State", "Arizona");
            await this.rolesTab.click();
            await t.wait(2000);
            await this.licenseYear.setValue("2010");
            // await this.textInputFieldForDriverScreen("Year First Licensed", "2010");
            // await this.licenseYear.setValue("2010");
            await t.wait(1000);
            // await this.selectInputForDriverScreen("Policy Level", "0");
            await this.numberOfAccidentPolicyLevel.selectOptionByLabel("0");
            await this.numberOfAccidentAccountLevel.selectOptionByLabel("0");
            await this.numberOfViolationsPolicyLevel.selectOptionByLabel("0");
            await this.numberOfViolationsAccountLevel.selectOptionByLabel("0");
            await this.addMVR();

    }
}

