import { PcfButton, PcfComponent, PcfDateValueInput, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { PcfRadioButton } from "../Component/PcfRadioButton";

export class WorkersCompensationPages{
    // Policy Info
    industryCode = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-IndustryCode');
    ssn = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-PolicyOfficialIDInputSet-OfficialIDDV_Input');
    //WC Coverages
    addClassButton = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV_tb-Add');
    coverageEmpLV = PcfListView('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV');
    supplementalLV = PcfListView('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV');
    tes = PcfDateValueInput
    

    
}