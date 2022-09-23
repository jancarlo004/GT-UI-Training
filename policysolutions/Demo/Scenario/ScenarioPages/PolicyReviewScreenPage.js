'use strict';
import { PcfButton } from '@gtui/gt-ui-framework';

export class PolicyReviewScreenPage {
    constructor() {
        
        this.quoteButton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
        this. issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
        this.bindPolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly");
    }
    
}