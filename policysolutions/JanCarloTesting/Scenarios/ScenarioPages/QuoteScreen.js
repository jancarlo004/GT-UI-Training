import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework";

export class QuoteScreen{
    bindOptionsButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
    issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");

    policyStatus = PcfComponent("#JobComplete-JobWizardInfoBar-JobLabel");
    policyStatusHome = PcfComponent("#JobComplete-JobWizardInfoBar-JobLabel");
    viewPolicy = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy");
    policyNum = PcfComponent("#PolicyFile_Summary-PolicyOverviewDashboard-PolicyDetailsDetailViewTile-PolicyDetailsDetailViewTile_DV-PolicyNumber");
    policyNumberLabel = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");
    
}