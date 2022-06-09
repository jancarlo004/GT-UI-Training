import { PcfButton, PcfCheckBox, PcfComponent, PcfDateValueInput, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class DonPages {
    accountTabBar = PcfComponent('#TabBar-AccountTab');
    newAccountButton = PcfComponent ('#TabBar-AccountTab-AccountTab_NewAccount');
    newAccountFirstName = PcfTextInput ('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName');
    newAccountLastName = PcfTextInput ('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName');
    newAccountSearch = PcfComponent ('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
    newAccountCreate = PcfComponent ('#NewAccount-NewAccountScreen-NewAccountButton');
    newAccountPerson  = PcfButton ('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person');
    newAccountAddress = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    newAccountZip = PcfTextInput ('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
    newAccountAddressType = PcfSelectInput ('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType');
    newAccountProducerCode = PcfSelectInput ('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode');
    newAccountUpdateButton = PcfButton ('#CreateAccount-CreateAccountScreen-Update');
    newSubmission = PcfButton ('#AccountFile_Summary-AccountSummaryDashboard-OpenPolicyTransactionsAccountListViewTile-NewSubmission');
    newSelectProduct = PcfButton ('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-6-addSubmission');
    newSelectOffering = PcfSelectInput ('#SubmissionWizard-OfferingScreen-OfferingSelection');
    newSelectNext = PcfButton ("#SubmissionWizard-Next");
    newSelectPreQualification = PcfSelectInput ("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-0-QuestionModalInput-ChoiceSelectInput_NoPost");
    newAddDriver = PcfComponent ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver');
    AddExistingDriver = PcfComponent ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact');
    AddDateOfBirth = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth');
    SelectExistingDriver = PcfComponent ("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");
    InputLicense = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber');
    SelectLicenseStateDriver = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState');
    SelectRolesTab = PcfButton ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab');
    AccidentsPolicy = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents');
    AccidentsAccount = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents');
    ViolationsPolicy = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations');
    ViolationsAccount = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations');
    InputYearFirstLicensed = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
    CreateVehicle = PcfButton ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add');
    InputVin = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV');
    SelectLicenseStateVehicle = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV');
    InputCostNew = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV');
    SelectPrimaryUse = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-primaryuse_DV');
    AddDriverToQuote = PcfComponent ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver');
    QuoteSubmission = PcfButton ('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote');
    bindPolicy = PcfComponent ('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions');


    async issuePolicy(value) {
        await t.click(this.bindPolicy.component.find('div.gw-label').withText(value))

    }



    async AddDriverOnVehicle(value) {
        await t.click(this.AddDriverToQuote.component.find('div.gw-label').withText(value))

    }

    async selectAddExistingDriver() {

        await t

            .click(this.newAddDriver.component)
            .hover(this.AddExistingDriver.component)
            .click(this.SelectExistingDriver.component);
    }

    async accountClickExpandButton() {
        await t.click(this.accountTabBar.component.find('div.gw-action--expand-button'));
    }
} 