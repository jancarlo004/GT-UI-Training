import { PcfButton, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class InlandmarinePolicyPages{
    // Policy Info For Inland Marine
    accountMenuActions = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmission = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    selectInlandMarineLob = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    organizationType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-OrganizationType");
    additionalInsured = PcfButton("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AdditionalNamedInsuredInputSet-NamedInsuredsLV_tb-AddContactsButton");
    newPerson = PcfButton("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AdditionalNamedInsuredInputSet-NamedInsuredsLV_tb-AddContactsButton-1-ContactType");
    addInsuredFirstName = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName");
    addInsuredLastname = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName");
    addInsuredBirthdate = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth");
    addInsuredMaritalStatus = PcfSelectInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-MaritalStatus");
    addInsuredPrimaryPhone = PcfSelectInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-PrimaryPhone");
    addInsuredWorkPhone = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-WorkPhone-GlobalPhoneInputSet-NationalSubscriberNumber");
    addInsuredAddressLine1 = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    addInsuredZipCode = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode");
    addInsuredState = PcfSelectInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    addInsuredAddressType = PcfSelectInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressType");
    addInsuredAddressDesc = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressDescription");
    addInsuredLicenseNumber = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber");
    addInsuredLicenseState = PcfSelectInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState");
    addInsuredSSN = PcfTextInput("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-OfficialIDInputSet-OfficialIDDV_Input");
    okButton = PcfButton("#NewAdditionalNamedInsuredPopup-ContactDetailScreen-Update");
    addedNamedInsureds = PcfButton("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AdditionalNamedInsuredInputSet-NamedInsuredsLV-0-Name");
    addInsuredRolesTab = PcfButton("#EditPolicyContactRolePopup-ContactDetailScreen-PolicyContactRoleDetailsCV-RolesCardTab");
    addInsuredRelationToPrimary = PcfTextInput("#EditPolicyContactRolePopup-ContactDetailScreen-PolicyContactRoleDetailsCV-0-PolicyContactRolePanelSet-PolicyNamedInsuredInfoDV-Relationship");
    editInsuredOkButton = PcfButton("#EditPolicyContactRolePopup-ContactDetailScreen-Update");
    nextButton = PcfButton("#SubmissionWizard-Next");
    // Coverage Part Selection
    addCoveragePart = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton");
    accountsReceivable = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-0-eachpart");
    // Buildings and Locations
   addBuilding = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-ActionsMenuIcon");
   addNewBuilding = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-AddBuilding");
   selectExistingBuilding = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-AddBuilding-AddNewBuilding");
   buildingDescription = PcfTextInput("#IMBuildingPopup-DetailsDV-Description");
   okButtonNewBuilding = PcfButton("#IMBuildingPopup-Update");
    // Accounts Receivable
    noReporting = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-reporting_1");
    businessClass = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-businessClass");
    coinsurancePct = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-coinsurance");
    addAccountsReceivable = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-Add");
    locAndBuilding = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-buildingcell");
    receptacleType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-containercell");
    percentDuplicated = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-duplicatedCell");
    limit = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-0-ARLlimitCell");
    quoteSubmission = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    bindPolicy = PcfComponent("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");






    async selectInlandMarineLOB(lob){
        let inlandMarineLabel = this.selectInlandMarineLob.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = inlandMarineLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }

    async addExistingBuilding(){
        await t.click(this.addBuilding.component)
               .hover(this.addNewBuilding.component)
               .click(this.selectExistingBuilding.component); 
    } 

    async issuePolicy(value) {
        await t.click(this.bindPolicy.component.find('div.gw-label').withText(value))

    }

}