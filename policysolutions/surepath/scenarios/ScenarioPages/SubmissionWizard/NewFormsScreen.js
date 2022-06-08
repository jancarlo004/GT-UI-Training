'use strict';
import { PcfComponent, PcfListView } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class NewFormsScreen {
    constructor() {
        this.formsScreen = PcfComponent("#SubmissionWizard-Forms");
        this.formsDetailViewListView = PcfListView("#SubmissionWizard-FormsScreen-FormsDV-FormsLV");
        this.formsLVFirstRow = Selector("#SubmissionWizard-FormsScreen-FormsDV-FormsLV-0-0");
    }

    async checkFormsLVFirstRowExists() {
        const firstRowExists = await this.formsLVFirstRow.exists;
        await t.expect(firstRowExists).ok();
    }

    async checkFormsLVFirstRowDoesNotExist() {
        const firstRowExists = await this.formsLVFirstRow.exists;
        await t.expect(firstRowExists).notOk();
    }
}