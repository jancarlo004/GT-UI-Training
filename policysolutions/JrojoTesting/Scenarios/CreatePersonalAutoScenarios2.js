import { t } from "testcafe";
import { PersonalAuto } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/lOBWizardStepGroup/PersonalAuto";
import { AccountMenuActions } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/menuActions/AccountMenuActions";
import { NextSubmissionWizard } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/submissionWizard/NextSubmissionWizard";
import { NewSubmission } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/other/NewSubmission";
import World from "../utils/World";
import { CreateAccountWizardPA } from "../Pages/CreateAccountWizardPA";
import { PersonalAutoPA2 } from "../Pages/CreateAutoPA2";
import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework";

const createAccountWizardPA = new CreateAccountWizardPA();
const accountMenuActions = new AccountMenuActions();
const personalAutoPA2 = new PersonalAutoPA2();
const nextSubmissionWizard = new NextSubmissionWizard();
export class CreatePersonalAutoScenarios2 {
    async createPersonalAuto() {
        await createAccountWizardPA.ActionsButton.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await personalAutoPA2.SelectLOB(World.lineofbussiness[0]);
        await personalAutoPA2.offers(World.offersauto[0]);
       // await t.click(personalAutoPA2.offeringScreen.component.parent('div').prevSibling('div').find('.gw-label').withText('Next'));
        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAutoPA2.qualification(World.qualificationmenu[4]);
      //await t.click(personalAutoPA2.qualificationScreen.component.parent('div').prevSibling('div').find('.gw-label').withText('Next'));
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAutoPA2.existingDrivers();
        await personalAutoPA2.driver_Screen();
        await t.wait(3000);
        await personalAutoPA2.newDrivers(2);
        await nextSubmissionWizard.submissionWizardNext.click();
        console.log(World.driver);
        await personalAutoPA2.vehicle_Screen();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAutoPA2.policyreview_Screen();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAutoPA2.payment_Screen();
    }

    async verify_policy_issued_successfully(value){
        let labelsubmission= PcfComponent("#JobComplete-JobWizardInfoBar-JobLabel");
        await t.expect(value).contains(await labelsubmission.component.find('.gw-label').innerText);
    }
}