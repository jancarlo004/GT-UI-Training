import { PcfButton, PcfComponent, PcfTextInput, PcfSelectInput } from "@gtui/gt-ui-framework";
import {Selector, t} from 'testcafe';

export class CreateInlandMarinePolicyScreen{
    
    actionMenus = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmissionMenu = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    effectiveDate = PcfTextInput("#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultPPEffDate");
    centerSection = PcfComponent("#gw-center-bottom-section");
    productSelectionLV = Selector('div#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');


    async selectProduct(product) {
        let productNameCell = this.productSelectionLV.find('td[id$=-Name_Cell]').withExactText(product);
        let selectButton = productNameCell.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.wait(1000);
        await t.click(selectButton);
    }
}