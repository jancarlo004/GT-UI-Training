import { PcfButton, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { PcfRadioButton } from "../Components/PcfRadioButton";
import { t } from "testcafe";

export class WcPolicyPages{
    accountsMenuActions = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmission = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    selectWcLob = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    totalAnnualPayroll = PcfTextInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-4-QuestionModalInput-IntegerFieldInput_NoPost");
    clickNext = PcfButton("#SubmissionWizard-Next");
    ssn = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-PolicyOfficialIDInputSet-OfficialIDDV_Input");
    industryCode = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-IndustryCode");
    organizationType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-OrganizationType");
    addClass = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV_tb-Add");
    governingLaw = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-SpecialCoverage");
    location = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-Loc");
    classCode = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-ClassCode");
    basis = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompCoverageConfigScreen-WorkersCompCoverageCV-WorkersCompClassesInputSet-WCCovEmpLV-0-AnnualRenum");
    firstRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-0-QuestionModalInput-BooleanRadioInput_NoPost");
    secondRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-1-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    thirdRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    fourthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    fifthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-4-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    sixthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-5-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    seventhRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-6-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    eightRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-7-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    ninthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-8-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    tenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-9-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    eleventhRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-10-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    twelveRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-11-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    thirteenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-12-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    fourteenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-13-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    fifteenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-14-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    sixteenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-15-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    seventeenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-16-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    eigthteenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-17-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    nineteenthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-18-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    twentyRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-19-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    twentyFirstRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-20-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    twentySecondRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-21-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    twentyThirdRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-22-QuestionModalInput-BooleanRadioInput_NoPost_Cell");
    twentyFourthRadio = PcfRadioButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-WorkersCompSupplementalScreen-QuestionSetsDV-0-QuestionSetLV-23-QuestionModalInput-BooleanRadioInput_NoPost_Cell");


    async selectWcLOB(lob){
        let personalWcLabel = this.selectWcLob.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = personalWcLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
        
    }
    
    
}