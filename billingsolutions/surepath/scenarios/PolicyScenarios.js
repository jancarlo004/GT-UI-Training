import { AccountGroupMenuActions } from "../../pages/navigation/menuActions/AccountGroupMenuActions"
import { ContactSearchPopup } from "../../pages/popup/Contact/ContactSearchPopup"
import { NewPolicyWizard } from "../../pages/other/NewPolicyWizard"
import { NewPolicyWizardCustom } from "../pages/other/NewPolicyWizard"
import { AccountScenarios } from "./AccountScenarios"
import world from "../utils/world"

const accountGroupMenuActions = new AccountGroupMenuActions();
const contactSearchPopup = new ContactSearchPopup();
const newPolicyWizard = new NewPolicyWizard();
const newPolicyWizardCustom = new NewPolicyWizardCustom();
const accountScenarios = new AccountScenarios();

export class PolicyScenarios {

    async createPolicyOnAccount(accountNumber) {
        await accountScenarios.openAccount(accountNumber);
        let randomNumber = Math.floor( Math.random() * 9999 + 1);
        await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
        await accountGroupMenuActions.accountDetailMenuActionsAccountDetailMenuActions_NewPolicy.click();
        world.policyNumber = "PA01_" + randomNumber;
        await newPolicyWizard.newPolicyDVPolicyNumber.setValue(world.policyNumber);
        await newPolicyWizard.newPolicyDVPolicyLOB.selectOptionByLabel("Personal Auto");
        await newPolicyWizard.newPolicyDVPaymentPlan.selectOptionByLabel("QA1PAYMENTPLAN01");
        await newPolicyWizard.newPolicyDVDelinquencyPlan.selectOptionByLabel("QA1DELINQUENCYPLAN01");

        await newPolicyWizard.newPolicyContactsLV_tbaddExistingContact.click();
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVContactType.selectOptionByLabel("Person");
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVNameInputSetGlobalPersonNameInputSetFirstName.setValue(world.accountName);
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVNameInputSetGlobalPersonNameInputSetLastName.setValue("Doe");
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchResultsLV.clickOnCell(0, 0);
        await newPolicyWizard.newPolicyWizardNext.click();

        await newPolicyWizard.policyAddChargesLV_tbAdd.click();
        await newPolicyWizardCustom.newPolicyWizardNewPolicyWizardChargeStepScreenPolicyAddChargesListDetailPanelPolicyAddChargesLV_Amount.setValue("1400");
        await newPolicyWizard.newPolicyWizardFinish.click();
    }

}