// Account creation with if...else statement sample
'use strict'
import { Kevpages } from "../pages/account/Kevpages";
import { t } from "testcafe"
import { AutoPolicyPages } from "../pages/account/AutoPolicyPages";
import world from "../../KevTraining/utils/world"; 

const kevPages = new Kevpages();
const autoPolicyPages = new AutoPolicyPages();

export class AccountCreation{
    async accountCreation(){
        await kevPages.accountTab.click();
        await t.click(kevPages.accountTab.component.find('div.gw-action--expand-button'));
        await kevPages.newAccount.click();
        await kevPages.firstName.setValue("Kevz");
        await kevPages.lastName.setValue("Cortez");
        await kevPages.searchButton.click();
        if(await autoPolicyPages.searchResultLV.rowCount() == 0){
            await kevPages.createNewAccountButton.click();
            await kevPages.person.click();
            await kevPages.address1.setValue("6220 W HEDGEHOG PL");
            await kevPages.city.setValue("PHOENIX");
            await t.pressKey('tab');
            await kevPages.state.selectOptionByLabel("Arizona");
            await kevPages.addressType.selectOptionByLabel("Home");
            await kevPages.organization.setValue("Enigma");
            await t.pressKey('tab');
            await t.wait(1000);
            await kevPages.producerCode.selectOptionByLabel("INT-4 Internal Producer Code - 4");
            await kevPages.updateButton.click();
            world.accountName = await kevPages.insuredName.component.innerText;
        } else{
            await autoPolicyPages.searchResultLV.clickOnCell(await autoPolicyPages.searchResultLV.rowCount()-1,1);
            world.accountName = await kevPages.insuredName.component.innerText;
        }
    }
}
