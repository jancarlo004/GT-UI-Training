import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";



export class CreateAccountWizardPA{
    InputAddressLine1     = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    InputAddressCity      = PcfTextInput ("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City");
    InputAddressCounty    = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-County");
    InputAddressState     = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    InputAddressZipcode   = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode");
    InputAddressType      = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType");
    InputOrganization     = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer-SelectOrganization");
    InputProducerCode     = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode");
    ButtonUpdate          =PcfButton("#CreateAccount-CreateAccountScreen-Update");

    //check if may existing account
    AccountSearch         =PcfListView("#NewAccount-NewAccountScreen-NewAccountSearchResultsLV");

    //create personal auto policy
    ActionsButton         =PcfButton("#AccountFile-AccountFileMenuActions");

    //New Submission Screen
    ActionsNewSubmission  =PcfComponent("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");

    //offering Selection Screen
    OfferingSelectionScreen =PcfComponent("#SubmissionWizard-OfferingScreen-OfferingSelection");
    OfferingNextButton =PcfButton("#SubmissionWizard-Next");
    //

    vechState = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV");

    //license year
    license_year = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
    newdriver_license_year= PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed");
    
}