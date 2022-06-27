import { AccountGroupMenuActions } from "../../pages/navigation/menuActions/AccountGroupMenuActions"
import { AccountGroupMenuLinks } from "../../pages/navigation/menuLinks/AccountGroupMenuLinks"
import { AccountSummary } from "../../pages/accountGroup/accountOverview/AccountSummary"
import { NewDirectBillPayment } from "../../pages/other/NewDirectBillPayment"
import { AccountScenarios } from "./AccountScenarios"
import { AdminScenarios } from "./AdminScenarios"
import world from "../utils/world"

const accountGroupMenuLinks = new AccountGroupMenuLinks();
const accountGroupMenuActions = new AccountGroupMenuActions();
const accountSummary = new AccountSummary();
const newDirectBillPayment = new NewDirectBillPayment();
const accountScenarios = new AccountScenarios();
const adminScenarios = new AdminScenarios();

export class DistributionScenarios {

    async makeCreditDistributionForAccount(accountNumber) {
        await accountScenarios.openAccount(accountNumber);
        await accountGroupMenuActions.selectAccountGroupAccountDetailMenuActionsAccountDetailMenuActions_PaymentsAccountDetailMenuActions_NewDirectBillPaymentMenuItem();
        await newDirectBillPayment.setValueNewDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmountTextInput("0.01");
        await newDirectBillPayment.clickNewDirectBillPaymentEditDBPaymentScreenPaymentDetailsExecuteWithoutDistribution()
    }

    async makePaymentDistribution(amtDistributed) {
        await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
        await accountGroupMenuActions.accountDetailMenuActionsAccountDetailMenuActions_Payments.click();
        await accountGroupMenuActions.accountDetailMenuActionsAccountDetailMenuActions_Payments.click();
        await accountGroupMenuActions.accountDetailMenuActions_PaymentsAccountDetailMenuActions_NewDirectBillPayment.click();
        if(amtDistributed == "full amount")
            amtDistributed = world.invoiceAmount;
        await newDirectBillPayment.newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmount.setValue(amtDistributed);
        await newDirectBillPayment.newDirectBillPaymentEditDBPaymentScreenExecuteWithoutDistribution.click();
    }

    async distributeUnappliedAmount(){
        await adminScenarios.runBatchProcessInvoice();
        await adminScenarios.runBatchProcessNewPayment();
    }

    async getUnappliedAmount(){
        await accountGroupMenuLinks.accountGroup_AccountOverviewAccountOverview_AccountSummary.click();
        let response = await accountSummary.accountSummaryScreenAccountUnappliedAmount.getValue();
        return response;
    }
}