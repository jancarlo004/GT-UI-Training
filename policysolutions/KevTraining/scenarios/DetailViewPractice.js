'use strict'
import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { Kevpages } from "../pages/account/Kevpages";

const kevPages = new Kevpages();


export class DetailViewPractice {

    async detailViewPractice(){
        await kevPages.accountTab.click();
        await t.click(kevPages.accountTab.component.find('div.gw-action--expand-button'));
        await kevPages.newAccount.click();

        await this.firstName("First name", "betlog");


       }

    async firstName(firstName, value){
        await t.typeText(kevPages.newAccountDV.component.find('.gw-label').withExactText(firstName).sibling('div').find('input'), value);


       }
    
    
}
