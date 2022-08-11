import { PcfButton, PcfComponent, PcfTextInput } from "@gtui/gt-ui-framework";
import { Selector, t } from "testcafe";
import { PersonalAuto } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/lOBWizardStepGroup/PersonalAuto";
import { NewSubmission } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/other/NewSubmission";
import { NewPolicyDriverPopup } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/popup/New/NewPolicyDriverPopup";
import { DriverScreen } from "../../JanCarloTesting/Scenarios/ScenarioPages/DriverScreen";
import World from "../utils/World";
import { CreateAccountWizardPA } from "./CreateAccountWizardPA";

const newSubmission = new NewSubmission();
const personalauto = new PersonalAuto();
const createAccountWizardPA = new CreateAccountWizardPA();
const newPolicyDriverPopup = new NewPolicyDriverPopup();
const driverScreen = new DriverScreen();

export class PersonalAutoPA2 {

    //offering screen
    offeringScreen = PcfComponent("#SubmissionWizard-OfferingScreen");
    //qualification screen
    qualificationScreen = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen");
    //drivers screen
    //driversScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen");
    


    async SelectLOB(lob) {
        for (let i = 0; i < await newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.rowCount(); i++) {//search mo per row yung lob
            if (await newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.getTextFromCellByColumnName(i, "Product Name") == lob) {
                await newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.clickOnCell(i, 0)
            }
        }
    }

    async offers(offering) {
        let offer_name = this.offeringScreen.component.find('.gw-label').withText('Offering Selection').sibling('.gw-value').find('Select');
        await t.click(offer_name);
        await t.click(offer_name.find('option').withText(offering));

    }

    async qualification(qualification_menu) {
        let qualification_name = this.qualificationScreen.component.find('td[id$=-ChoiceSelectInput_NoPost_Cell]').find('Select');
        await t.click(qualification_name);
        await t.click(qualification_name.find('option').withText(qualification_menu));
    }
    async existingDrivers() {
        await personalauto.driversLV_tbAddDriver.click();
        let existing_driver_button = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact').component;
        await t.hover(existing_driver_button);
        let primary_driver = await PcfComponent('#SubmissionWizard-JobWizardInfoBar-AccountName').component.find('div.gw-infoValue').innerText;
        await t.click(existing_driver_button.find('div.gw-subMenu').withText(primary_driver));
        console.log(primary_driver);
        World.driver[0] = primary_driver;
        console.log(World.driver[0]);
    }
    async driver_Screen() {
        await personalauto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue(World.DOB);
        await personalauto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetMaritalStatus.selectOptionByLabel(World.maritalstatus[4]);
        await personalauto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetHomePhoneGlobalPhoneInputSetNationalSubscriberNumber.setValue(World.phone_Home);
        await t.pressKey('tab');
        await personalauto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetEmailAddress1.setValue(World.pEmail);
        await personalauto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue(await this.randomvalue_LicenseGenerator(8));
        await personalauto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByLabel(World.drivers_state);
        await personalauto.driverDetailsCVRolesCardTab.click();
        await createAccountWizardPA.license_year.setValue(World.license_year);
        await this.accident_DriverScreen('td[id$=-PolicyDriverNumberOfAccidents_Cell', World.accidents_policy_level);
        await this.accident_DriverScreen('td[id$=-DriverNumberOfAccidents_Cell', World.account_level);
        await this.violation_DriverScreen('td[id$=-PolicyDriverNumberOfViolations_Cell', World.accidents_policy_level);
        await this.violation_DriverScreen('td[id$=-DriverNumberOfViolations_Cell', World.account_level);

    }
    async accident_DriverScreen(columnName, value) {

        let numberOfAccidentsComponent = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-NumberOfAccidentsLabel_Cell');
        let numOfAccidentLabel = numberOfAccidentsComponent.component.find('.gw-value-readonly-wrapper').withText('Number of Accidents');
        if (columnName == 'td[id$=-PolicyDriverNumberOfAccidents_Cell') {
            let accidentViolation = numOfAccidentLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        } else {
            let accidentViolation = numOfAccidentLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        }
    }
    async violation_DriverScreen(columnName, value) {
        let numberOfViolationsComponent = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-NumberOfViolationsLabel_Cell');
        let numOfViolationsLabel = numberOfViolationsComponent.component.find('.gw-value-readonly-wrapper').withText('Number of Violations');
        if (columnName == 'td[id$=-PolicyDriverNumberOfViolations_Cell') {
            let accidentViolation = numOfViolationsLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        } else {
            let accidentViolation = numOfViolationsLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        }
    }
    async newDrivers(counter) {
        for (let i = 0; i < counter; i++) {
            await personalauto.driversLV_tbAddDriver.click();
            let new_driver_button = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType').component;
            await t.click(new_driver_button);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetFirstName.setValue(await this. randomvalue_textfieldGenerator(9));
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetLastName.setValue(await this. randomvalue_textfieldGenerator(9));
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue(World.DOB);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetMaritalStatus.selectOptionByLabel(World.maritalstatus[4]);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetHomePhoneGlobalPhoneInputSetNationalSubscriberNumber.setValue(World.phone_Home);
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetEmailAddress1.setValue(World.pEmail);
            let sameaddress = PcfButton("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-LinkAddressMenuMenuIcon");
            await t.click(sameaddress.component);
            let primary_add = PcfButton("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-0-contactDetail");
            await t.hover(primary_add.component);
            let prim_add = PcfComponent("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-0-contactDetail-PrimaryAddress");
            await t.click(prim_add.component);
            //await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue(World.new_drivers_license);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue(await this.randomvalue_LicenseGenerator(8));
            await t.pressKey('tab');
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByLabel(World.drivers_state);
            await newPolicyDriverPopup.newPolicyDriverPopupContactDetailScreenUpdate.click();
            await createAccountWizardPA.newdriver_license_year.setValue(World.license_year);
            //para sa mga violation to
            await this.accident_NewDriverScreen('td[id$=-PolicyDriverNumberOfAccidents_Cell', World.accidents_policy_level);
            await this.accident_NewDriverScreen('td[id$=-DriverNumberOfAccidents_Cell', World.account_level);
            await this.violation_NewDriverScreen('td[id$=-PolicyDriverNumberOfViolations_Cell', World.accidents_policy_level);
            await this.violation_NewDriverScreen('td[id$=-DriverNumberOfViolations_Cell', World.account_level);
            World.driver[i+1]= await driverScreen.driverListView.getTextFromCellByColumnName(i+1,"Name");
            console.log(World.driver[i+1]);
        }
            let checkbox = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV-_Checkbox");
            await t.click(checkbox.component);
            let retrievebutton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-RetrieveMVRButton");
            await t.click(retrievebutton.component);
    }
    async accident_NewDriverScreen(columnName, value) {
        let numberOfAccidentsComponent = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-NumberOfAccidentsLabel_Cell');
        let numOfAccidentLabel = numberOfAccidentsComponent.component.find('.gw-value-readonly-wrapper').withText('Number of Accidents');
        if (columnName == 'td[id$=-PolicyDriverNumberOfAccidents_Cell') {
            let accidentViolation = numOfAccidentLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        } else {
            let accidentViolation = numOfAccidentLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        }
    }
    async violation_NewDriverScreen(columnName, value) {
        let numberOfViolationsComponent = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-NumberOfViolationsLabel_Cell');
        let numOfViolationsLabel = numberOfViolationsComponent.component.find('.gw-value-readonly-wrapper').withText('Number of Violations');
        if (columnName == 'td[id$=-PolicyDriverNumberOfViolations_Cell') {
            let accidentViolation = numOfViolationsLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        } else {
            let accidentViolation = numOfViolationsLabel.parent('td').sibling(columnName).find('Select');
            await t.click(accidentViolation)
            await t.click(accidentViolation.find('option').withText(value));
        }
    }
    
    //random value generators for license 
    async randomvalue_LicenseGenerator(length) {
        var randomvalue_licensegenerator = "";
        var number = '0123456789';
        var numberLength = number.length;
        for (var i = 0; i < length; i++) {
            randomvalue_licensegenerator += number.charAt(Math.floor(Math.random() * numberLength));
        }
        return randomvalue_licensegenerator;
    }
    //random value generators for textfields
    async randomvalue_textfieldGenerator(length) {
        var randomvalue_textfieldgenerator = "";
        var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charLength = char.length;
        for (var i = 0; i < length; i++) {
            randomvalue_textfieldgenerator += char.charAt(Math.floor(Math.random() * charLength));
        }
        return randomvalue_textfieldgenerator;
    }
    async vehicle_Screen(){
        console.log(World.driver.length);
        for(let i=0; i< World.driver.length; i++){
        await personalauto.vehiclesListDetailPanel_tbAdd.click();
        await personalauto.personalAuto_VehicleDVVin_DV.setValue(World.VINNumber[i]);
        await t.pressKey('tab');
        await personalauto.personalAuto_VehicleDVLicenseState_DV.selectOptionByLabel(World.drivers_state);
        await personalauto.personalAuto_VehicleDVCostNew_DV.setValue(World.cost_New)
        await personalauto.driverPctLV_tbAddDriver.click();
        let add_driver_b= PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver');
        await t.click(add_driver_b.component.find('div.gw-subMenu').find('.gw-label').withExactText(World.driver[i]));
        
        } 
    }
    async policyreview_Screen(){
        let quotebutton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
        await t.click(quotebutton.component);
    }
    async payment_Screen(){
        let bind_optionsButton = PcfButton("#SubmissionWizard-SubmissionWizard_PaymentScreen-JobWizardBillingToolbarButtonSet-BindOptions");
        await t.click(bind_optionsButton.component);
        let issue_policyButton = PcfButton("#SubmissionWizard-SubmissionWizard_PaymentScreen-JobWizardBillingToolbarButtonSet-BindOptions-BindAndIssue");
        await t.click(issue_policyButton.component);
    }
}


