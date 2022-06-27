import { AccountDetailSummary } from "../../pages/accountGroup/accountOverview/AccountDetailSummary"
import { AccountDetailSummaryCustom } from "../pages/accountGroup/accountOverview/AccountDetailSummary"
import { AccountGroupMenuLinks } from "../../pages/navigation/menuLinks/AccountGroupMenuLinks"
import { AccountPaymentRequests } from "../../pages/accountGroup/accountDetailPayments/AccountPaymentRequests"
import { AccountSummary } from "../../pages/accountGroup/accountOverview/AccountSummary"
import { NewPaymentInstrumentPopup } from "../../pages/popup/New/NewPaymentInstrumentPopup"
import { AdminScenarios } from "../scenarios/AdminScenarios";

const accountDetailSummary = new AccountDetailSummary();
const accountDetailSummaryCustom = new AccountDetailSummaryCustom();
const accountGroupMenuLinks = new AccountGroupMenuLinks();
const accountPaymentRequests = new AccountPaymentRequests();
const accountSummary = new AccountSummary();
const newPaymentInstrumentPopup = new NewPaymentInstrumentPopup();
const adminScenarios = new AdminScenarios();

export class PaymentScenarios {

    async checkPaymentInstrument() {
        await accountGroupMenuLinks.accountGroup_AccountOverviewAccountOverview_AccountSummary.click();

        let paymentMethod = await accountSummary.accountSummaryScreenPaymentMethod.getValue();
        let paymentInstrument;
            if (paymentMethod.includes('ACH/EFT')) {
                paymentInstrument = "EFT/ACH";
            } else if (paymentMethod.includes('Credit Card')) {
                paymentInstrument = "CC";
            } else {
                paymentInstrument = "Responsive";
            }
        return paymentInstrument;
    }

    async addNonResponsiveEFT_ACH() {
        let response = await this.checkPaymentInstrument();
        if (!(response.includes("EFT/ACH"))) {
            await accountDetailSummary.accountDetailSummaryScreenEdit.click();
            await accountDetailSummary.defaultPaymentInstrumentCreateNewPaymentInstrument.click();
            let randomNumber = Math.floor( Math.random() * 999 + 1);
            await newPaymentInstrumentPopup.newPaymentInstrumentPopupPaymentMethod.selectOptionByLabel('ACH/EFT');
            await newPaymentInstrumentPopup.newPaymentInstrumentPopupToken.setValue(randomNumber + 'ACH-EFT');
            await newPaymentInstrumentPopup.newPaymentInstrumentPopupUpdate.click();
            await accountDetailSummary.accountDetailSummaryScreenUpdate.click();
        }
    }

    async addResponsive() {
        let response = await this.checkPaymentInstrument();
        if (!(response.includes("Responsive"))) {
            await accountGroupMenuLinks.accountGroup_AccountOverviewAccountOverview_AccountDetailSummary.click();
            await accountDetailSummary.accountDetailSummaryScreenEdit.click();
            await accountDetailSummaryCustom.accountDetailSummaryAccountDetailSummaryScreenAccountDetailDVDefaultPaymentInstrument.selectOptionByLabel('Responsive');
            await accountDetailSummary.accountDetailSummaryScreenUpdate.click();
        }
    }

    async getPaymentRequestStatus() {
        await adminScenarios.runBatchProcessInvoice();
        await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailPayments.click();
        await accountGroupMenuLinks.accountGroup_AccountDetailPaymentsAccountDetailPayments_AccountPaymentRequests.click();
        let rowCount = await accountPaymentRequests.accountDetailPaymentsScreenRequestsListLV.rowCount();
        let status = '';
        if (rowCount > 0) {
            status = await accountPaymentRequests.accountDetailPaymentsScreenRequestsListLV.getTextFromCell(0,1);
        }
        return status;
    }

    async validatePaymentRequestStatus() {
        await accountGroupMenuLinks.accountGroup_AccountDetailPaymentsAccountDetailPayments_AccountPaymentRequests.click();
        await adminScenarios.runBatchProcessPaymentRequest();
        let status = await accountPaymentRequests.accountDetailPaymentsScreenRequestsListLV.getTextFromCell(0,1);
        return status;
    }

}