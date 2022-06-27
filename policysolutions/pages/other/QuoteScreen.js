'use strict';
import { PcfButton, PcfComponent } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class QuoteScreen {
    constructor() {
        
        this.jobLabel = PcfComponent("#JobComplete-JobWizardInfoBar-JobLabel")
        this.jobNumber = Selector("#SubmissionWizard-SubmissionWizard_QuoteScreen-Quote_SummaryDV-JobNumber")
        this.totalPremium = Selector("#SubmissionWizard-SubmissionWizard_QuoteScreen-Quote_SummaryDV-TotalPremium");
        this.bindOptionsButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
        this.bindOnlyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly");
        this.issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
        this.viewSubmissionLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob");
        this.viewPolicyLink = Selector("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy");
     
    }
    async viewPolicy() {
        await t
            .click(this.viewPolicyLink);
    }
}