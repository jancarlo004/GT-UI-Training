import { debug } from "console";
import { t } from "testcafe";
import { AccountCreationPages } from "../pages/AccountCreationPages";
import world from "../utils/world";
const accountcreationpages = new AccountCreationPages();

export class AccountCreationScenario{

    async accountCreation(){
        await accountcreationpages.accountClickExpandButton();
        await accountcreationpages.newAccount.click();
        await accountcreationpages.firstName.setValue("Elina");
        await accountcreationpages.lastName.setValue("Snow");
        await accountcreationpages.search.click();

        if(await accountcreationpages.searchListView.rowCount() != 0){
            await accountcreationpages.searchListView.clickOnCell(0,1);
            world.accountName = await accountcreationpages.existingEnsured.component.innerText;
        }else{
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
            world.accountName = await accountcreationpages.existingEnsured.component.innerText;
        }}}