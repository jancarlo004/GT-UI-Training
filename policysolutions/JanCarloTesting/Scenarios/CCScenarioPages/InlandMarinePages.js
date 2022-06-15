import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework"

export class InlandMarinePages{

    actionsMenuButton = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmission = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    newSubmissionLOB = PcfListView("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    organizationType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-OrganizationType");
    nextButton = PcfButton("#SubmissionWizard-Next");
    addCoverageButton = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton");
    accountsReceivable = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-0-eachpart");
    contructorsEquipment = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-1-eachpart");
    signs = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-2-eachpart");
    contructorType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-contrEqContractorType");
    coInsurance = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-coinsurance");
    scheduledEquipment = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-ScheduledEquipmentPanelSet-Add");
    description = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-ScheduledEquipmentPanelSet-description");
    limit = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-ScheduledEquipmentPanelSet-coveragePattern-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput");
    quoteButton = PcfButton("#SubmissionWizard-Job_RiskAnalysisScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    bindOption = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
    issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
    policyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");
    lobListView = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");

}