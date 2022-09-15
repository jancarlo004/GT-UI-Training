import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { world } from "../../../KevTraining/utils/world";

export class AutoPolicyPages {
    accountTabBar = PcfComponent('#TabBar-AccountTab');
    searchResultLV = PcfListView('#NewAccount-NewAccountScreen-NewAccountSearchResultsLV');

    newSubmission = PcfButton('#AccountFile-AccountFileMenuActions');
    newSubmissionButton = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission');
    lineOfBusinessLV = PcfListView('#NewSubmission-NewSubmissionScreen-ProductOffersDV-1');
    offeringSelection = PcfSelectInput('#SubmissionWizard-OfferingScreen-OfferingSelection');
    nextButton = PcfButton('#SubmissionWizard-Next');
    
    // PA Pre-Qualification
    isTheApplicantCurrentlyInsured = PcfSelectInput('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-0-QuestionModalInput-ChoiceSelectInput_NoPost');

    // Drivers 
    addDriverButton = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver')
    existingDriverButton = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact');
    existingDriver = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver');
        async clickExistingDriver() {
            await t.hover(this.existingDriverButton.component).click(this.existingDriver.component);
        }

    licenseNumber = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber');
    licenseState = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState');
    rolesTab = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab');
    yearFirstLicensed = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
    yearFirstLicensedDrivers = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
    numOfAccidents = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents');
    numOfViolations = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations');
    numOfAccidents2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents');
    numOfViolations2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations');
    newNumOfAccidents = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents');
    newNumOfViolations = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations');
    newNumOfAccidents2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfAccidents');
    newNumOfViolations2 = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfViolations');
    newPersonButton = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType');
    newDriverFirstName = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName');
    newDriverLastName = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName');
    newDriverAddress1 = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    newDriverState = PcfSelectInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
    newDriverAddressType = PcfSelectInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressType');
    newLicenseNumber = PcfTextInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber');
    newLicenseState = PcfSelectInput('#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState');
    okButton = PcfButton('#NewPolicyDriverPopup-ContactDetailScreen-Update');
    
    // Vehicle Details
    createVehicleButton = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add');
    vin = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV');
    vehicleLicensedState = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV');
    costNew = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV');
    driversLV = PcfListView('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV');
    insuredName = PcfComponent("#SubmissionWizard-JobWizardInfoBar-AccountName");
    licensePlate = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicensePlate_DV');
    // Assign Driver to Vehicle
    assignDriverToVehicle = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver');
    
    // Risk Analysis
    uwOkButton = PcfButton('#RiskApprovalDetailsPopup-Update');
    riskAnalysisActions = PcfComponent('#SubmissionWizard-RiskAnalysis');
    uwApproveButton = PcfComponent('#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV-RiskEvaluationPanelSet-1-UWIssueRowSet-Approve');
        async approveButtonUW() {
            await t.click(this.riskAnalysisActions.component);
            while(await this.uwApproveButton.component.visible){
                await t.click(this.uwApproveButton.component);
                await this.uwOkButton.click();
            }
        }
    bindButtonRiskAnalysis = PcfComponent('#SubmissionWizard-Job_RiskAnalysisScreen-JobWizardToolbarButtonSet-BindOptions');
    issuePolicyButton = PcfComponent('#SubmissionWizard-Job_RiskAnalysisScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue');
        async clickIssuePolicy(){
            await t.click(this.bindButtonRiskAnalysis.component).click(this.issuePolicyButton.component);

        }
    
    //Quote screen
    quoteButton = PcfButton('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote');
    bindButton = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions');
    bindOnly = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly');
        async clickBindOnly() {
            await t.click(this.bindButton.component).click(this.bindOnly.component);
        }
    //Bound
    submissionBoundInnerText = PcfComponent('#JobComplete-JobCompleteScreen-ttlBar');
    policyNumber = PcfComponent('#JobComplete-JobWizardInfoBar-PolicyNumber');
}