'use strict';
import { PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import tests from '../../Util/tests';
import { t } from "testcafe";


export class PreQualificationScreenPage {
    constructor() { 
        this.preQualScreen = PcfComponent ('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-1');
        this.applicantCurrentlyInsured = PcfSelectInput ('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-0-QuestionModalInput-ChoiceSelectInput_NoPost');
        this.preQualTable = PcfComponent('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV');
        this.qualCenterPanel = PcfComponent('#gw-center-panel');
     
    }

    async SelectPreQualificationQuestion(){
        let  question1 = await this.preQualTable.component.find('td[id$=-questionText_Cell]').withText(tests.PreQualificationDropdown[0][0]);
        let answerdropdnw =  question1.sibling('td[id$=-ChoiceSelectInput_NoPost_Cell]').find('div.gw-ExpressionRangeValueWidget[id$=-ChoiceSelectInput_NoPost]');                 
        let answerQuestion1 = PcfSelectInput(answerdropdnw);
        await answerQuestion1.selectOptionByLabel(tests.PreQualificationDropdown[0][1]);
        // this.sampleQuest();

         
        
    }

    // async sampleQuest(){
    //     // let count = tests.PreQualificationRadioButton.length-1;  
    //     // for (let i=0; i <= count; i++) {
    //         let  question1 = await this.preQualScreen.component.find('td[id$=-questionText_Cell]').withText('Is the applicant license currently suspended, canceled, or revoked?');
    //         let answerCell = question1.sibling('td[id$=-BooleanRadioInput_NoPost_Cell]').find('div.gw-BooleanRadioValueWidget[id$=-BooleanRadioInput_NoPost]').withExactText('Yes');
    //         await t.click(answerCell);
    //     // }   
    // }


}