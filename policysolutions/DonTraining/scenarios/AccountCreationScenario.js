import { debug } from "console";
import { t } from "testcafe";
import { AccountCreationPages } from "../pages/AccountCreationPages";
const accountcreationpages = new AccountCreationPages();

export class AccountCreationScenario{

    async accountCreation(){
        await accountcreationpages.accountClickExpandButton();
        await accountcreationpages.newAccount.click();
        await accountcreationpages.firstName.setValue("Don Dominic");
        await accountcreationpages.lastName.setValue("Campilla");
        await accountcreationpages.search.click();
        await accountcreationpages.newAccountCreate.click();
        await accountcreationpages.newAccountPerson.click();
        await accountcreationpages.addressLine1.setValue("250 W 10th AVE");
        await accountcreationpages.postalCode.setValue("85210");
        await t.pressKey("tab");
        await accountcreationpages.inputState.selectOptionByLabel("Arizona");
        await accountcreationpages.addressType.selectOptionByLabel("Billing");
        await accountcreationpages.orgName.setValue("Enigma");
        await t.pressKey("tab");
        await accountcreationpages.producerCode.selectOptionByLabel("INT-3 Internal Producer Code - 3");
        await accountcreationpages.update.click();
        

    }
}