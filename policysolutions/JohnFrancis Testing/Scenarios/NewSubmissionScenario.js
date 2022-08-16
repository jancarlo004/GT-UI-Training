import { t } from "testcafe";
import { AccountMenuActions } from "../../pages/navigation/menuActions/AccountMenuActions";
import { NewSubmissionPages } from "../ScenariosPages/customPages";
import { NextSubmissionWizard } from "../../pages/navigation/submissionWizard/NextSubmissionWizard";
import { PersonalAuto } from "../../pages/lOBWizardStepGroup/PersonalAuto";
import { BillingInfoSubmissionWizard } from "../../pages/navigation/submissionWizard/BillingInfoSubmissionWizard";
import { CustomMethod } from "../util/helpers";
import world from "../util/world";

const actionsButton = new AccountMenuActions();
const newSubmissionPages = new NewSubmissionPages();
const nextButton = new NextSubmissionWizard();
const personalAuto = new PersonalAuto();
const billingInfo = new BillingInfoSubmissionWizard();
const driverMethod = new CustomMethod();

export class NewSubmissionScenario{

    async NewPASubmissionScenario(){
        await actionsButton.accountFileAccountFileMenuActions.click();
        await actionsButton.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await newSubmissionPages.personalAutoLOBButton.click();
        //Offerings
        await newSubmissionPages.offeringSelection.selectNthOption(1);
        await nextButton.submissionWizardNext.click();
        //Qualification
        await newSubmissionPages.preQualificationSelection.selectNthOption(2);
        await nextButton.submissionWizardNext.click();
        //Policy Info
        await nextButton.submissionWizardNext.click();
        //Drivers
        //Existing Driver
        await driverMethod.existingDriver();
        //2 New Drivers
        await driverMethod.createNewDriver(2);
        await nextButton.submissionWizardNext.click();
        //Vehicles
        await driverMethod.createNewVehicle(3);
        await nextButton.submissionWizardNext.click();
        //PA Coverages
        await nextButton.submissionWizardNext.click();
        //Risk Analysis
        await nextButton.submissionWizardNext.click();
        //Quote
        await newSubmissionPages.quoteButton.click();
        //Payment
        await billingInfo.submissionWizardBillingInfo.click();
        //Issue
        await newSubmissionPages.bindOptionsButton.click();
        await newSubmissionPages.issueButton.click();
        await t.pressKey('enter');
    }
}