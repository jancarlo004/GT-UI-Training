import { AccountDetailCharges } from "../../pages/accountGroup/AccountDetailCharges"
import { AccountDetailInvoices } from "../../pages/accountGroup/AccountDetailInvoices"
import { AccountGroupMenuLinks } from "../../pages/navigation/menuLinks/AccountGroupMenuLinks"
import { AccountSummaryCustom } from "../pages/accountGroup/accountOverview/AccountSummary"
import { InvoiceItemDetailPopup } from "../../pages/popup/Invoice/InvoiceItemDetailPopup"
import { TransactionDetailPopup } from "../../pages/popup/Transaction/TransactionDetailPopup"
import { ChargeScenarios } from "../scenarios/ChargeScenarios"
import { Selector, t } from "testcafe"
import world from "../utils/world"

const accountDetailCharges = new AccountDetailCharges();
const accountDetailInvoices = new AccountDetailInvoices();
const accountGroupMenuLinks = new AccountGroupMenuLinks();
const accountSummaryCustom = new AccountSummaryCustom();
const invoiceItemDetailPopup = new InvoiceItemDetailPopup();
const transactionDetailPopup = new TransactionDetailPopup();
const chargeScenarios = new ChargeScenarios();

export class InvoiceScenarios {

    async getInvoiceBillDate(row) {
        const billDateColumnIndex = 1;
        let billDate = await accountDetailInvoices.detailPanelAccountInvoicesLV.getTextFromCell(row, billDateColumnIndex);
        return billDate;
    }

    async getInvoiceDueDate(row) {
        const dueDateColumnIndex = 2;
        let dueDate = await accountDetailInvoices.detailPanelAccountInvoicesLV.getTextFromCell(row, dueDateColumnIndex);
        return dueDate;
    }

    async getInvoiceStatus(row) {
        const statusColumnIndex = 5;
        let status = await accountDetailInvoices.detailPanelAccountInvoicesLV.getTextFromCell(row, statusColumnIndex);
        return status;
    }

    async getInvoiceAmount(row) {
        const amountColumnIndex = 7;
        let amount = await accountDetailInvoices.detailPanelAccountInvoicesLV.getTextFromCell(row, amountColumnIndex);
        return amount;
    }

    async getNextInvoiceWithStatus(status, numInvoiceItems = 1) {
        let invoiceRow = 0;
        let invoiceStatus = "";
        let found = false;
        let rowCount = await accountDetailInvoices.detailPanelAccountInvoicesLV.rowCount();
        if(numInvoiceItems == "an")
            numInvoiceItems = 1;

        while(invoiceRow < rowCount-1 && !found) { 
            invoiceStatus = await this.getInvoiceStatus(invoiceRow);
          
            if(invoiceStatus == status) {
	            await accountDetailInvoices.detailPanelAccountInvoicesLV.clickOnCell(invoiceRow, 1);
                if(await accountDetailInvoices.detailPanelAccountInvoicesLV.rowCount() >= numInvoiceItems)
                    found = true;
                else
                    invoiceRow++;
            }
            else
                invoiceRow++;
        }

        world.rowNumber = found ? invoiceRow : -1;
        world.invoiceAmount = await this.getInvoiceAmount(invoiceRow);
    }

    async openInvoices() {
		await t.click(Selector('#AccountGroup-MenuLinks-AccountGroup_AccountDetailInvoices'));
    }

    async openInvoiceItem() {
        let invoiceRow = 0;
        let chargeType = "";
        let found = false;
        let rowCount = await accountDetailCharges.accountDetailChargesListDetailPanelChargesLV.rowCount();
        
        while(invoiceRow < rowCount && !found) {
            chargeType = await accountDetailCharges.accountDetailChargesListDetailPanelChargesLV.getTextFromCell(invoiceRow, 4);
            if(chargeType == "Premium"){
	            await accountDetailCharges.accountDetailChargesListDetailPanelChargesLV.clickOnCell(invoiceRow, 2);
                found = true;
            }
            else
                invoiceRow++;
        }
        
        await accountDetailCharges.accountDetailChargesListDetailPanelInvoiceItemsLV.clickOnCell(0, 2);
    }

    async openTransaction(event) {
        let invoiceRow = 0;
        let eventType = "";
        let found = false;
        let rowCount = await invoiceItemDetailPopup.itemEventPanelSetItemEventsLV.rowCount();

        while(invoiceRow < rowCount && !found) {
            eventType = await invoiceItemDetailPopup.itemEventPanelSetItemEventsLV.getTextFromCell(invoiceRow, 1);
            if(eventType == event) {
                await invoiceItemDetailPopup.itemEventPanelSetItemEventsLV.clickOnCell(invoiceRow, 2);
                found = true;
            }
            else
                invoiceRow++;
        }
    }

    async getTransactionDetails() {
        let invoiceRow = 0;
        let lineItemType = "";
        let response = { credit: "", debit: "" };
        let rowCount = await transactionDetailPopup.transactionDetailDVTransactionLineItemsLV.rowCount();
        
        while(invoiceRow < rowCount) {
            lineItemType = await transactionDetailPopup.transactionDetailDVTransactionLineItemsLV.getTextFromCell(invoiceRow, 1);
            if(lineItemType == "Credit")
                response.credit = await transactionDetailPopup.transactionDetailDVTransactionLineItemsLV.getTextFromCell(invoiceRow, 2);
            else if(lineItemType == "Debit")
                response.debit = await transactionDetailPopup.transactionDetailDVTransactionLineItemsLV.getTextFromCell(invoiceRow, 2);
            invoiceRow++;
        }

        return response;
    }

    async checkInvoiceItemPushed() {
        await accountDetailCharges.accountDetailChargesListDetailPanelChargesLV.clickOnCell(0,2);
        let newbillDate = await accountDetailCharges.accountDetailChargesListDetailPanelInvoiceItemsLV.getTextFromCell(0, 3);
        t.expect(newbillDate == world.nextPlannedBillDate);
    }

    async checkDelinquencyStatus() {
        await accountGroupMenuLinks.accountGroup_AccountOverviewAccountOverview_AccountSummary.click();
        let response = await accountSummaryCustom.accountSummaryAccountSummaryScreenAccountDetailSummary_DelinquencyAlertAlertBar.component.innerText;
        console.log("response: " + response)
        return response;
    }

    async checkTransaction(event) {
        await chargeScenarios.openCharges();
        await this.openInvoiceItem();
        await this.openTransaction(event);
        return await this.getTransactionDetails();
    }
}