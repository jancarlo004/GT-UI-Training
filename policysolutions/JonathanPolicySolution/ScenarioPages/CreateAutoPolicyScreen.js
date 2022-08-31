import { PcfButton, PcfComponent, PcfTextInput, PcfSelectInput } from "@gtui/gt-ui-framework";
import {Selector, t} from 'testcafe';


export class CreateAutoPolicyScreen{

    actionMenus = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmissionMenu = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    effectiveDate = PcfTextInput("#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultPPEffDate");
    centerSection = PcfComponent("#gw-center-bottom-section");
    productSelectionLV = Selector('div#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');
    newSubmissionSelectedOffering = PcfSelectInput("#SubmissionWizard-OfferingScreen-OfferingSelection");
    newSubmissionNextButton = PcfButton("#SubmissionWizard-Next");

    newSubmissionIsTheApplicantCurrentlyInsured = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-0-QuestionModalInput-ChoiceSelectInput_NoPost");
    newSubmissionDob = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth");
    newSubmissionMaritalStatus = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-MaritalStatus");
    newSubmissionMobilePhone = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-CellPhone-GlobalPhoneInputSet-NationalSubscriberNumber");
    newSubmissionPrimaryEmail = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-EmailAddress1");
    newSubmissionLicenseNo = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber");
    newSubmissionLicenseState = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState");
    newSubmissionTabRoles = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab");
    newSubmissionYearFirstLicense = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed");
    newSubmissionCreateVehicleButton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add");
    newSubmissionVin = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV");
    newSubmissionVehicleLicenseState = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV");
    newSubmissionCostNew = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV");
    newSubmissionQuoteButton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    numOfAccident_PolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents");
    numOfAccident_AccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents");
    numOfViolation_PolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations");
    numOfViolation_AccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations"); 
    jobLabel = Selector("#SubmissionWizard-JobWizardInfoBar-JobLabel");
    jobNumber = Selector("#SubmissionWizard-SubmissionWizard_QuoteScreen-Quote_SummaryDV-JobNumber")
    totalPremium = Selector("#SubmissionWizard-SubmissionWizard_QuoteScreen-Quote_SummaryDV-TotalPremium");
    bindOptionsButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
    
    bindOnlyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly");
    issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
    viewSubmissionLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob");
    viewPolicyLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy");
    newPolicyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");

    constructor() {
        this.personalAutoProductButton = Selector("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-8-addSubmission");
        this.addDriverButton = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
        this.addExistingDriver = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact");
        this.firstExistingDriver = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");

        this.addDriversToVehicle = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver");
        this.selectExistingDriverToVehicle = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-0-Driver");
    }
    
    async selectProduct(product) {
        let productNameCell = this.productSelectionLV.find('td[id$=-Name_Cell]').withExactText(product);
        let selectButton = productNameCell.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }
    async selectExistingDriver() {
        await t
            .click(this.addDriverButton)
            .hover(this.addExistingDriver)
            .click(this.firstExistingDriver);
    }
    async selectDriverToVehicle(){
        await t
            .click(this.addDriversToVehicle)
            .click(this.selectExistingDriverToVehicle);
    }

}