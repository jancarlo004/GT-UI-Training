'use strict'
import { PcfButton } from "@gtui/gt-ui-framework";
import { t } from 'testcafe';

export class QuoteScreen{ 
    quoteButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
    issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
}