import { QualificationScreen } from "../../../pages/other/QualificationScreen";
import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions"
import { NewSubmission } from "../../../pages/other/NewSubmission"
import { NextSubmissionWizard } from "../../../pages/navigation/submissionWizard/NextSubmissionWizard";
import { PreQualificationSubmissionWizard } from "../../../pages/navigation/submissionWizard/PreQualificationSubmissionWizard";
import { HOPHomeowners } from "../../../pages/lOBWizardStepGroup/HOPHomeowners";
import { CoveragesSubmissionWizard } from "../../../pages/other/CoveragesSubmissionWizard";
import { PolicyReviewScreen } from "../../../pages/other/PolicyReviewScreen";
import { QuoteScreen } from "../../../pages/other/QuoteScreen";
import{ PaymentScreen } from "../../../pages/other/PaymentScreen";
import { NewAdditionalInsured } from "../../../pages/other/NewAddionalInsured";


import { t } from "testcafe";

const qualificationScreen = new QualificationScreen();
const accountMenuActions = new AccountMenuActions();
const newSubmission = new NewSubmission();
const nextSubmissionWizard = new NextSubmissionWizard();
const preQualificationSubmissionWizard = new PreQualificationSubmissionWizard();
const hopHomeowners = new HOPHomeowners();
const coveragesSubmissionWizard = new CoveragesSubmissionWizard();
const policyReviewScreen = new PolicyReviewScreen();
const quoteScreen = new QuoteScreen();
const paymentScreen = new PaymentScreen();
const newAdditionalInsured = new NewAdditionalInsured();

export class HomeCreationScenario{

    async createHomePolicy(){
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        !await accountMenuActions.accountFileAccountFileMenuActions.component.hasClass('gw-hasOpenSubMenu') && await t.click(accountMenuActions.accountFileAccountFileMenuActions.component.find('div.gw-action--expand-button'));
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await t.wait(1000);
        let productLabel = newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.component.find('td[id$=-Name_Cell]').withExactText("Homeowners");
        let productSelection = productLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(productSelection);
        await t.wait(1000);
        await qualificationScreen.HOPCoveragePartType.selectOptionByLabel('Dwelling');
        await qualificationScreen.HOPCoverageForm.selectOptionByLabel('HO5');
        await qualificationScreen.ChoiceSelectInput.selectOptionByLabel('Myself')
        await preQualificationSubmissionWizard.submissionWizardPreQualificationYes.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await hopHomeowners.hOPDwellingProtectionInputSetProtectionClass.selectOptionByLabel('Standard');
        await nextSubmissionWizard.submissionWizardNext.click();
        await hopHomeowners.hOPDwellingConstructionDetailsDVYearBuilt.setValue('2015');
        await hopHomeowners.hOPDwellingConstructionDetailsDVConstructionType.selectOptionByLabel('Concrete');
        await hopHomeowners.hOPDwellingConstructionDetailsDVNumberOfStories.setValue('2');
        await hopHomeowners.hOPDwellingConstructionDetailsDVGarageType.selectOptionByLabel('Attached Garage - 1 Car');
        await hopHomeowners.hOPDwellingConstructionDetailsDVFoundationType.selectOptionByLabel('Slab');
        await hopHomeowners.hOPDwellingConstructionDetailsDVRoofType.selectOptionByLabel('Metal');
        await hopHomeowners.hOPDwellingConstructionDetailsDVPrimaryHeatingType.selectOptionByLabel('Electricity');
        await hopHomeowners.hOPDwellingConstructionDetailsDVSecondaryHeatingType.selectOptionByLabel('Gas');
        await hopHomeowners.hOPDwellingConstructionDetailsDVPlumbingType.selectOptionByLabel('Galvanized');
        await hopHomeowners.hOPDwellingConstructionDetailsDVWiringType.selectOptionByLabel('Copper');
        await hopHomeowners.hOPDwellingConstructionDetailsDVBreakerType.selectOptionByLabel('Circuit Breaker');
        await nextSubmissionWizard.submissionWizardNext.click();
        await coveragesSubmissionWizard.submissionWizardCoInsurance.selectOptionByLabel('50%');
        await coveragesSubmissionWizard.submissionWizardValuationMethod.selectFirstOptionWithValue('Replacement Cost');
        await coveragesSubmissionWizard.submissionWizardCoveragesLossOfRentalIncomeNO.click();
        await coveragesSubmissionWizard.submissionWizardCoveragesProhibitedUse.selectOptionByLabel('14 Days');
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await policyReviewScreen.quoteButton.click();
        await t.wait(2000);
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await paymentScreen.bindOptionsButton.click();
        await paymentScreen.issuePolicyButton.click();
        await t.wait(3000);
    }

    async issuedHomePolicy(){
        let issuedPolicy = "Submission (Bound)"; 
        await t.expect(await quoteScreen.jobLabel.component.innerText).contains(issuedPolicy);
    
    }

}