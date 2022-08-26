'use strict';
import { Selector, t } from 'testcafe';

export class NewRecoverySet {
    constructor() {
        this.payerDropdown = Selector('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-Payer');
        this.payerOption = this.payerDropdown.find('option');
    
        this.reserveLineDropdown = Selector('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-ReserveLineInputSet-ReserveLine');
        this.reserveLineOption = this.reserveLineDropdown.find('option');
    
        this.costTypeDropdown = Selector('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-ReserveLineInputSet-CostType');
        this.costTypeOption = this.costTypeDropdown.find('option');
    
        this.costCategoryDropdown = Selector('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-ReserveLineInputSet-CostCategory');
        this.costCategoryOption = this.costCategoryDropdown.find('option');
    
        this.recoveryCategoryDropdown = Selector('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-RecoveryCategory');
        this.recoveryCategoryOption = this.recoveryCategoryDropdown.find('option');
    
        this.firstLineItemAmount = Selector('#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-EditableRecoveryLineItemsLV-0-Amount');
        this.firstLineItemAmountInput = this.firstLineItemAmount.find('input');
    }
    
	async selectPayer() {
		await t.click(this.payerDropdown).click(this.payerOption.nth(1));
	}

	async selectNewReserveLine() {
		await t.click(this.reserveLineDropdown).click(this.reserveLineOption.withText('New...'));
	}

	async selectCostType() {
		await t.click(this.costTypeDropdown).click(this.costTypeOption.nth(1));
	}

	async selectCostCategory() {
		await t.click(this.costCategoryDropdown).click(this.costCategoryOption.nth(1));
	}

	async selectRecoveryCategory() {
		await t.click(this.recoveryCategoryDropdown).click(this.recoveryCategoryOption.nth(1));
	}

	async inputAmount(valueToEnter) {
		await t.selectText(this.firstLineItemAmountInput).pressKey('delete').typeText(this.firstLineItemAmountInput, valueToEnter).pressKey('tab');
	}
}