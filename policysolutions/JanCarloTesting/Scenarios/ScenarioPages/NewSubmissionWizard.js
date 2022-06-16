'use strict'
import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework"

export class NewSubmissionWizard {
    newSubmissionNextButton = PcfButton("#SubmissionWizard-Next");
    quoteButton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PersonalAutoScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    quoteHome = PcfButton("#SubmissionWizard-Job_RiskAnalysisScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");

    bindOptionsHome = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
    issueHomePolicy = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
    policyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");
}   