import { PcfSelectInput, PcfButton } from "@gtui/gt-ui-framework";

export class QualificationScreen{
    policytype = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType");
    coverageForm = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm");
    dwelling = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput");
    dwellingFullTimeYesRadioButton = PcfButton("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput_0");

    fireProtection = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingDetailsDV-HOPDwellingProtectionInputSet-ProtectionClass");
    nextButton = PcfButton("#SubmissionWizard-Next");
}