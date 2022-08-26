'use strict';
import { PcfButton, PcfComponent, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class NewCreateCheckWizard {
    constructor() {
        this.payeeName = Selector("#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-PrimaryPayee_Name");
        this.payeeNameTypeOption = this.payeeName.find('option');
        this.nextButton = PcfButton("#NormalCreateCheckWizard-Next");
        this.finishButton = PcfButton("#NormalCreateCheckWizard-Finish");
        this.reserveLine = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-ReserveLine");
        this.costType = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-CostType");
        this.costCategory = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-CostCategory");
        this.paymentType = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-Payment_PaymentType");
        this.lineItemAmount = PcfTextInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-EditablePaymentLineItemsLV-0-Amount");
        this.invoiceNumber = PcfTextInput("#NormalCreateCheckWizard-CheckWizard_CheckInstructionsScreen-NewPaymentInstructionsDV-CheckWizardCheckSummaryInputSet-Check_InvoiceNumber");
    }

    async selectCreateCheckWizard_PayeeName(valueToSelect) {
        await t
        .click(this.payeeName)
        .click(this.payeeNameTypeOption.nth(valueToSelect));
    }

    async selectCreateCheckWizard_ReserveLine() {
        await t.click(this.reserveLine);
		await t.click(this.reserveLine.find('option').withText("New..."));   
    }

    async selectCreateCheckWizard_CostType(valueToSelect) {
        await t.click(this.costType);
		await t.click(this.costType.find('option').withText(valueToSelect));
    }

    async selectCreateCheckWizard_CostCategory(valueToSelect) {
        await t.click(this.costCategory);
		await t.click(this.costCategory.find('option').withText(valueToSelect));
    }

    async selectCreateCheckWizard_PaymentType(valueToSelect) {
        await t.click(this.paymentType);
		await t.click(this.paymentType.find('option').withText(valueToSelect));
    }

    async setCreateCheckWizard_LineItemAmount(valueToEnter) {
        await t.selectText(this.lineItemAmount.find('input')).pressKey('delete').typeText(this.lineItemAmount, valueToEnter).pressKey('tab');
    }

    async setCreateCheckWizard_InvoiceNumber(valueToEnter) {
        await t.selectText(this.invoiceNumber.find('input')).pressKey('delete').typeText(this.invoiceNumber, valueToEnter).pressKey('tab');
    }

    async clickCreateCheckWizardNextButton() {
        await t.click(this.nextButton);
    }

    async clickCreateCheckWizardFinishButton() {
        await t.click(this.finishButton);
    }
}