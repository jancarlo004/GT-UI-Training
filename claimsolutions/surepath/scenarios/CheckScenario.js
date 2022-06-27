import {NewClaimSaved} from "../../pages/other/NewClaimSaved";
import {ClaimMenuActions} from "../../pages/navigation/menuActions/ClaimMenuActions.js";
import {NewCreateCheckWizard} from "./ScenarioPages/NewCreateCheckWizard.js";
import {SearchTabBar_Ext} from "../scenarios/ScenarioPages/SearchTabBar_Ext";
import {PaymentSearch} from "../../pages/search/PaymentSearch.js";
import {NewSearchPaymentScreen} from "./ScenarioPages/NewSearchPaymentScreen.js";
import world from "../utils/world.js";
import { t } from "testcafe";

const newClaimSaved = new NewClaimSaved();
const claimMenuActions = new ClaimMenuActions();
const newCreateCheckWizard = new NewCreateCheckWizard();
const searchTabBar = new SearchTabBar_Ext();
const paymentSearch = new PaymentSearch();
const newSearchPaymentScreen = new NewSearchPaymentScreen();

export class CheckScenario {
    constructor() {
    }

    async createACheck(type, category, paymentType, amount) {
        let invoiceNumberRandom = Math.floor(Math.random() * 99999999 + 10000000);
        world.invoiceNumber = invoiceNumberRandom.toString();

        await newClaimSaved.newClaimSavedDVGoToClaim.click();
        await claimMenuActions.claimClaimMenuActions.click();
        await claimMenuActions.claimMenuActions_NewTransactionClaimMenuActions_NewTransaction_CheckSet.click();
        await newCreateCheckWizard.selectCreateCheckWizard_PayeeName(1);
        await newCreateCheckWizard.nextButton.click();

        await newCreateCheckWizard.reserveLine.selectOptionByLabel('New');
        await newCreateCheckWizard.costType.selectOptionByLabel(type);
        await newCreateCheckWizard.costCategory.selectOptionByLabel(category);
        await newCreateCheckWizard.paymentType.selectOptionByLabel(paymentType);
        await newCreateCheckWizard.lineItemAmount.setValue(amount);
        await newCreateCheckWizard.nextButton.click();
        await newCreateCheckWizard.invoiceNumber.setValue(world.invoiceNumber);
        await newCreateCheckWizard.finishButton.click();
    }

    async searchCheckByClaimNumber(claimNumber) {
        await searchTabBar.openSearchPayment();
        await paymentSearch.paymentSearchRequiredInputSetClaimNumber.setValue(claimNumber);
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
    }

    async searchCheckByInvoiceNumber(invoiceNumber) {
        await searchTabBar.openSearchPayment();
        await paymentSearch.paymentSearchRequiredInputSetInvoiceNumber.setValue(invoiceNumber);
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
    }

    async findCheckWithClaimNumberExists(claimNumber) {
        await newSearchPaymentScreen.checkSearchPaymentScreen_CheckSearchResultsLV(claimNumber);
    }
}