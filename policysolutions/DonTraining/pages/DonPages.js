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
    addExistingDriver = PcfComponent ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact');
    addDateOfBirth = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth');
    selectExistingDriver = PcfComponent ("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");
    inputLicense = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber');
    selectLicenseStateDriver = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState');
    selectRolesTab = PcfButton ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab');
    accidentsPolicy = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents');
    accidentsAccount = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents');
    violationsPolicy = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations');
    violationsAccount = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations');
    inputYearFirstLicensed = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
    createVehicle = PcfButton ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add');
    inputVin = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV');
    selectLicenseStateVehicle = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV');
    inputCostNew = PcfTextInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV');
    selectPrimaryUse = PcfSelectInput ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-primaryuse_DV');
    addDriverToQuote = PcfComponent ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver');
    quoteSubmission = PcfButton ('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote');
    bindPolicy = PcfComponent ('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions');
    



    async issuePolicy(value) {
        await t.click(this.bindPolicy.component.find('div.gw-label').withText(value))

    }


    async addDriverOnVehicle(value) {
        await t.click(this.addDriverToQuote.component.find('div.gw-label').withText(value))

    }

    async selectaddExistingDriver() {

        await t

            .click(this.newAddDriver.component)
            .hover(this.addExistingDriver.component)
            .click(this.selectExistingDriver.component);
    }

    async accountClickExpandButton() {
        await t.click(this.accountTabBar.component.find('div.gw-action--expand-button'));
    }
} 