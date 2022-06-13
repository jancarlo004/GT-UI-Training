'use strict'
import { Kevpages } from "../pages/account/Kevpages";
import { t } from "testcafe"

const kevPages = new Kevpages();

export class AccountCreation{
    async accountCreation(){
        await kevPages.accountTab.click();
        await t.click(kevPages.accountTab.component.find('div.gw-action--expand-button'));
        await kevPages.newAccount.click();
        await kevPages.firstName.setValue("Máel");
        await kevPages.lastName.setValue("Strom");
        await kevPages.searchButton.click();
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

    }
}
