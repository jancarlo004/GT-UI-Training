import { PcfButton, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";


export class WorkersCompensationWizard{

    stateIds = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-PolicyLinePerStateConfigDV-officialIDs-0-ANI_OfficialIDEntry');
    governingLaw = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-SpecialCoverage');
    Location = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-Loc');
    classCodeSearch = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-ClassCode-SelectClassCode');
    basis = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-AnnualRenum');
    wcSupplementalQuestions = PcfListView('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV');

    flLocation = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CoverageOptionsScreen-WCOptionsPanelSet-WCOptionCardPanelSet-WCFederalLiabilityInputSet-WCLine_WCCovEmpLV-0-Loc');
    flClassCodeSearch = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CoverageOptionsScreen-WCOptionsPanelSet-WCOptionCardPanelSet-WCFederalLiabilityInputSet-WCLine_WCCovEmpLV-0-ClassCode-SelectClassCode');
    flBasis = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-CoverageOptionsScreen-WCOptionsPanelSet-WCOptionCardPanelSet-WCFederalLiabilityInputSet-WCLine_WCCovEmpLV-0-AnnualRenum');


}