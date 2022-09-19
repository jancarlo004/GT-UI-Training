import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { PreQualificationSubmissionWizard } from "../../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/submissionWizard/PreQualificationSubmissionWizard";
import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions";
import { BillingInfoSubmissionWizard } from "../../../pages/navigation/submissionWizard/BillingInfoSubmissionWizard";
import { FormsSubmissionWizard } from "../../../pages/navigation/submissionWizard/FormsSubmissionWizard";
import { PolicyReviewSubmissionWizard } from "../../../pages/navigation/submissionWizard/PolicyReviewSubmissionWizard";
import { PrevSubmissionWizard } from "../../../pages/navigation/submissionWizard/PrevSubmissionWizard";
import { RiskAnalysisSubmissionWizard } from "../../../pages/navigation/submissionWizard/RiskAnalysisSubmissionWizard";
import { PolicyTabBar } from "../../../pages/navigation/tabBar/PolicyTabBar";
import { NewSubmission } from "../../../pages/policy/NewSubmission";

const accountMenuActions = new AccountMenuActions();
const newSubmission = new NewSubmission();
const preQualificationSubmissionWizard = new PreQualificationSubmissionWizard(); 
const riskAnalysisSubmissionWizard = new RiskAnalysisSubmissionWizard();
const policyReviewSubmissionWizard = new PolicyReviewSubmissionWizard();
const prevSubmissionWizard = new PrevSubmissionWizard();
const formsSubmissionWizard = new FormsSubmissionWizard();
const billingInfoSubmissionWizard = new BillingInfoSubmissionWizard();
const policyTabBar = new PolicyTabBar();


export class SubmissionScenario{

    policyTabBarParent = policyTabBar.tabBarPolicyTab.component.parent().sibling();
    policyContractParent = preQualificationSubmissionWizard.submissionWizardPreQualification.component.sibling();

    async startSubmission(lob){

        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        

        let productName = newSubmission.productOffersDVProductSelectionLV.component.find('td[id$="-Name_Cell"]').withText(lob);
        await PcfButton(productName.prevSibling()).click();

    }

    async navigateToQualificationScreen(){

        await preQualificationSubmissionWizard.submissionWizardPreQualification.click();

    }

    async navigateToPolicyScreen(){

        await PcfComponent(this.policyContractParent.find('div[id$="-PolicyInfo"]')).click();

    }

    async navigateToRiskAnalysis(){

        await riskAnalysisSubmissionWizard.submissionWizardRiskAnalysis.click();

    }

    async navigateToPolicyReview(){

        await policyReviewSubmissionWizard.submissionWizardPolicyReview.click();

    }

    async quotePolicy(){

        await this.navigateToPolicyReview();
        await PcfButton(this.policyTabBarParent.find('div[id$="-Quote"]')).click();

    }

    async navigateToFormScreen(){

        await formsSubmissionWizard.submissionWizardForms.click();

    }

    async navigateToPaymentScreen(){

        await billingInfoSubmissionWizard.submissionWizardBillingInfo.click();

    }

    async issuePolicy(){

        let bindOption = this.policyTabBarParent.find('div[id$="-BindOptions"]');
        await PcfButton(bindOption).click();
        await PcfButton(bindOption.find('div[id$="-BindAndIssue"]')).click();        

    }

    async verifyIssuePolicy(){

        let policyVerificationWords = 'Submission (Bound)';
        let verifyThisWords = await policyTabBar.tabBarPolicyTab.component.parent().sibling().find('div[id$="-JobLabel"]').innerText;

        await t.expect(policyVerificationWords).contains(verifyThisWords);
      
    }    



}