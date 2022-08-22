import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";


export class NewSubmissionPages{
    personalAutoLOBButton = PcfButton('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-6-addSubmission');
    offeringSelection = PcfSelectInput('#SubmissionWizard-OfferingScreen-OfferingSelection');
    preQualificationSelection = PcfSelectInput('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-0-QuestionModalInput-ChoiceSelectInput_NoPost_Cell');
    addNewDriver = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType');
    existingDriver = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver');
    numberOfAccidentsPL = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents');
    numberOfAccidentsAL = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents');
    numberOfViolationsPL = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations');
    numberOfViolationsAL = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations');
    addDriver = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-0-Driver');
    bindOptionsButton = PcfButton('#SubmissionWizard-SubmissionWizard_PaymentScreen-JobWizardBillingToolbarButtonSet-BindOptions');
    quoteButton = PcfButton('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote');
    issueButton = PcfButton('#SubmissionWizard-SubmissionWizard_PaymentScreen-JobWizardBillingToolbarButtonSet-BindOptions-BindAndIssue');
    yearFirstLicensed = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed');
}

export class NewAccount_Personal{
    mobileNo = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-CellPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
    primaryEmailAddress = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-EmailAddress1');
    addressLine1 = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    city = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
    state = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
    postalCode = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
    addressType = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType');
    organization = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer');
    producerCode = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode');
    createButton = PcfButton('#CreateAccount-CreateAccountScreen-Update');
}

export class JobComplete{
    jobCompleteMessage = PcfComponent('#JobComplete-JobCompleteScreen-ttlBar');
}

export class SearchResults{
    searchResultListView = PcfListView('#PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearch_ResultsLV');
}