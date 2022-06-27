'use strict';
import {Selector, t} from 'testcafe';

export class NewSearchPaymentScreen {
    constructor() {
        this.searchResult = Selector("#PaymentSearch-PaymentSearchScreen-CheckSearchResultsLV")
    }

    async checkSearchPaymentScreen_CheckSearchResultsLV(claimNumber) {
        const searchResultValue = await this.searchResult.textContent;
        await t.expect(searchResultValue).contains(claimNumber);
    }
}