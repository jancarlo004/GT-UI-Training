'use strict';
import { PcfButton, PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class QualificationScreen {

    HOPCoveragePartType = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType")
    HOPCoverageForm = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm")
    ChoiceSelectInput = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput")

    // constructor() {
    //     this.HOPCoveragePartType = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType")
    //     this.HOPCoverageForm = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm")
    //     this.ChoiceSelectInput = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput")
    // }
    // async selectqualificationSelection(valueToSelect) {
    //     await t.click(this.HOPCoveragePartType.component);
	// 	await t.click(this.HOPCoveragePartType.component.find('option').withText(valueToSelect)); 
    // }
    // async selectcoverageForm(valueToSelect){
    //     await t.click(this.HOPCoverageForm.component);
	// 	await t.click(this.HOPCoverageForm.component.find('option').withText(valueToSelect));
    // }
    // async selectoccupiesDwelling(valueToSelect){
    //     await t.click(this.ChoiceSelectInput.component);
	// 	await t.click(this.ChoiceSelectInput.component.find('option').withText(valueToSelect));
    // }
}