'use strict';
import {Selector, t} from 'testcafe';

export class NewSubmissionScreen {

    productSelectionLV = Selector('div#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');

    constructor() {
        this.personalAutoProductButton = Selector("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-8-addSubmission");
    }

    async selectProduct(product) {
        let productNameCell = this.productSelectionLV.find('td[id$=-Name_Cell]').withExactText(product);
        let selectButton = productNameCell.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }
}