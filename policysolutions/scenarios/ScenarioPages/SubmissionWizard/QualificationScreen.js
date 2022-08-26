'use strict';
import { PcfComponent, PcfListView, PcfSelectInput } from '@gtui/gt-ui-framework';

export class QualificationScreen {            
        PolicyType = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType");    
        CoverageForm = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm");
        HOPprequalification = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV");
}