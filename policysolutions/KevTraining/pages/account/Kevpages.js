import { PcfButton, PcfCheckBox, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";


export class Kevpages {

// 
offeringScreen = PcfSelectInput('#offeringSelection = PcfSelectInput("#SubmissionWizard-OfferingScreen-OfferingSelection');

// Account creation
    accountTab = PcfComponent('#TabBar-AccountTab');
    newAccount = PcfButton('#TabBar-AccountTab-AccountTab_NewAccount');
    firstName = PcfTextInput('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName');
    lastName = PcfTextInput('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName');
    searchButton = PcfButton('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
    createNewAccountButton = PcfButton('#NewAccount-NewAccountScreen-NewAccountButton');
    person = PcfButton('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person');
    address1 = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    city = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
    state = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
    addressType = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType');
    organization = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer');
    producerCode = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode');
    updateButton = PcfButton('#CreateAccount-CreateAccountScreen-Update');
    insuredName = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountHolder');
    createAccountDV = PcfComponent('#CreateAccount-CreateAccountScreen-CreateAccountDV');
    newAccountDV = PcfComponent('#NewAccount-NewAccountScreen-NewAccountSearchDV');


// New Submission Home Policy
    actions = PcfComponent('#AccountFile-AccountFileMenuActions');
    newSubmission = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission');
    newSubmissionLV = PcfListView('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');
    policyType = PcfSelectInput('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType');
    coverageForm = PcfSelectInput('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm');
    whoOccupiesThisDwelling = PcfSelectInput('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput');
    radioButtonYes = PcfButton ('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput_0');
    submissionNext = PcfButton('#SubmissionWizard-Next');
    
    // Dwelling screen
    swimmingPoolCheckBox = PcfCheckBox('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingDetailsDV-HOPSwimmingPoolInputSet-SwimmingPool');
    fireProtection = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingDetailsDV-HOPDwellingProtectionInputSet-ProtectionClass');

    // Additional Interests and Insureds screen
    addInterestAndInsured = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-AdditionalInterestCardTab');
    addInterestButton = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV_tb-AddContactsButton');
    addOtherContacts = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV_tb-AddContactsButton-AddOtherContact');
    addContact = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV_tb-AddContactsButton-AddOtherContact-0-acctContact');
        async selectInterestsAndInsured() {
            await t
            .click(this.addInterestButton.component)
            .hover(this.addOtherContacts.component)
            .click(this.addContact.component);
        }
    interestTypeDD = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV-0-Type');
    effectiveDate = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV-0-EffDate');
    expirationDate = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV-0-ExpDate');
    descriptionOfInterest = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV-0-Description');
    certReqNo = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV-0-CertRequired_1');
    contactNumber = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingAdditionalInterestDetailsDV-AdditionalInterestLV-0-ContractNumber');

    // Dwelling Constructions screen
    wiring = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-WiringType');

    // Additional Named Insured screen
    addNamedInsured = PcfButton ('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AdditionalNamedInsuredInputSet-NamedInsuredsLV_tb-AddContactsButton');
    newPerson = PcfButton ('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AdditionalNamedInsuredInputSet-NamedInsuredsLV_tb-AddContactsButton-1-ContactType');
    firstNameNew = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName');
    lastNameNew = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName');
    address1New = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    cityNew = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
    stateNew = PcfSelectInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
    zipNew = PcfTextInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
    addressTypeNew = PcfSelectInput('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressType');
    okButton = PcfButton('#NewAdditionalNamedInsuredPopup-ContactDetailScreen-Update');

    // Coverages screen
    coinsurance = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-0-CoverageInputSet-CovPatternInputGroup-HOPCovACoinsurance');
    lossOfRentalIncomeNo = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDLossOfRent_1');
    puCivilAuthority = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDProhibitedUse');

    // Modifiers screen
    professional = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPModifiersScreen-HOPModifiersPanelSet-LineModifiers-HOPModifiersInputSet-2-TypeKeyModifier');
    loyalty = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPModifiersScreen-HOPModifiersPanelSet-LineModifiers-HOPModifiersInputSet-3-TypeKeyModifier');
    
    // Policy Review screen
    quouteButton = PcfButton('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote');

    // Quote screen
    bindOptions = PcfButton('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions');
    issuePolicyButton = PcfButton('#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue');
    // Verify bound
    policyBound = PcfComponent('#JobComplete-JobWizardInfoBar-JobLabel');
    // Policy find
    policyNumber = PcfComponent('#JobComplete-JobWizardInfoBar-PolicyNumber');

// New Submission In-Land Marine Policy
    orgType = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-OrganizationType');

    // Coverage part selection screen
    clickCoveragePart = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton');
    selectCoveragePart = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-0-eachpart');
        async addCoveragePart() {
        await t.click(this.clickCoveragePart.component)
        .click(this.selectCoveragePart.component);
    }  
    coveragePartCheckBox = PcfCheckBox('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV-0-_Checkbox');

    // Buildings and Locations screen
    expandButton = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-ActionsMenuIcon');
    addBuildingButton = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-AddBuilding');
    newBuilding = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-AddBuilding-AddNewBuilding');
        async addBuilding() {
            await t.click(this.expandButton.component)
            .hover(this.addBuildingButton.component)
            .click(this.newBuilding.component);
        }
    description = PcfTextInput('#IMBuildingPopup-DetailsDV-Description');
    okButton2 = PcfButton('#IMBuildingPopup-Update');
    


// Accounts Receivable screen
    yesReporting = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-reporting_0');
    businessClass = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-businessClass')
    coninsurancePct = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-coinsurance');
    addAccountReceivable = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-Add');
    locbldg = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-buildingcell');
    receptacleType = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-containercell');
    persentDuplicated = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-duplicatedCell');
    limit = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-ARLlimitCell');
    

// Claim
    claimTabBar = PcfComponent('#TabBar-ClaimTab');
    newClaim = PcfComponent('#TabBar-ClaimTab-ClaimTab_FNOLWizard');
    claimPolicyNum = PcfTextInput('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-policyNumber');
    claimSearchButton = PcfButton('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Search');
    claimLossDate = PcfTextInput('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Claim_LossDate');
    claimNextButton = PcfButton('#FNOLWizard-Next');
    claimName = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name');
    claimRelationToInsured = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-Claim_ReportedByType');
    claimLossCause = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsPanel-FNOLWizard_NewLossDetailsPanelSet-Claim_LossCause');
    claimState = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsPanel-FNOLWizard_NewLossDetailsPanelSet-CCAddressInputSet-globalAddressContainer-globalAddress-GlobalAddressInputSet-State');
    claimFinishButton = PcfButton('#FNOLWizard-Finish');

    claimSaved = PcfComponent('#NewClaimSaved-NewClaimSavedScreen-ttlBar');
}   