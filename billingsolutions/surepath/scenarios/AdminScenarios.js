import { AccountDetailInvoicesCustom } from "../pages/accountGroup/AccountDetailInvoices"
import { InvoiceScenarios } from "../scenarios/InvoiceScenarios";
import { Selector, t } from "testcafe"
import world from "../utils/world"

const accountDetailInvoicesCustom = new AccountDetailInvoicesCustom();
const invoiceScenarios = new InvoiceScenarios();

export class AdminScenarios {

    async executeQuickJumpCommand(command) {
        if (await Selector('div#QuickJump').exists && await Selector('div#QuickJump').visible)
            await t.typeText(Selector('div#QuickJump'), command, {replace: true, paste: true }).pressKey('enter');
        else
            await t.typeText(Selector('#QuickJump'), command, {replace: true, paste: true }).pressKey('enter');
    }

    async getCurrentDate() {
        await this.executeQuickJumpCommand("Run Clock");
        return await accountDetailInvoicesCustom.accountDetailInvoicesAccountDetailInvoicesScreen_msgsSelector.component.innerText;
    }

    async moveDate(dateToMoveTo) {
        invoiceScenarios.openInvoices();
        let currentDate = await this.getCurrentDate();
        currentDate = new Date(currentDate);
        let invoiceStatus = dateToMoveTo.toLowerCase().includes("invoice bill date") ? "Planned" : "Billed";

        let invoiceDate = invoiceStatus == ("Planned") ? 
            await invoiceScenarios.getInvoiceBillDate(world.rowNumber) :
            await invoiceScenarios.getInvoiceDueDate(world.rowNumber);
        invoiceDate = new Date(invoiceDate);

        let elapsedDays = Math.ceil((invoiceDate - currentDate) / (1000 * 60 * 60 * 24));

        if(dateToMoveTo.includes("- 1"))
            elapsedDays = elapsedDays - 1;
        else if(dateToMoveTo.includes("+ 1"))
            elapsedDays = elapsedDays + 1;

        if(elapsedDays > 0) {
            await this.executeQuickJumpCommand("Run Clock addDays " + (elapsedDays));
        }

        await this.runInvoiceBatchProcesses();
    }

    async runBatchProcessInvoice() {
        await this.executeQuickJumpCommand("RunBatchProcess Invoice");
    }

    async runBatchProcessInvoiceDue() {
        await this.executeQuickJumpCommand("RunBatchProcess InvoiceDue");
    }

    async runInvoiceBatchProcesses() {
        await this.runBatchProcessInvoice();
        await this.runBatchProcessInvoiceDue();
    }

    async runBatchProcessPaymentRequest() {
        await this.executeQuickJumpCommand("RunBatchProcess PaymentRequest");
    }

    async runBatchProcessNewPayment() {
        await this.executeQuickJumpCommand("RunBatchProcess NewPayment");
    }
}