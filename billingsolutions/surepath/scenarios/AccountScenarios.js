import { AccountGroupMenuActions } from "../../pages/navigation/menuActions/AccountGroupMenuActions";
import { AccountsGroupMenuActions } from '../../pages/navigation/menuActions/AccountsGroupMenuActions';
import { AccountsTabBar } from "../../pages/navigation/tabBar/AccountsTabBar";
import { SearchTabBar } from "../../pages/navigation/tabBar/SearchTabBar";
import { NewAccount } from "../../pages/other/NewAccount";
import { NewPolicyWizard } from "../../pages/other/NewPolicyWizard";
import { NewPolicyWizardCustom } from "../pages/other/NewPolicyWizard";
import { ContactSearchPopup } from "../../pages/popup/Contact/ContactSearchPopup";
import { NewAccountContactPopup } from "../../pages/popup/New/NewAccountContactPopup";
import { NewAccountContactPopupCustom } from "../pages/popup/New/NewAccountContactPopup";
import { NewPaymentInstrumentPopup } from "../../pages/popup/New/NewPaymentInstrumentPopup";
import { AccountSearch } from "../../pages/searchGroup/AccountSearch";
import world from "../utils/world";

const accountGroupMenuActions = new AccountGroupMenuActions();
const accountsGroupMenuActions = new AccountsGroupMenuActions();
const accountSearch = new AccountSearch();
const accountsTabBar = new AccountsTabBar();
const contactSearchPopup = new ContactSearchPopup();
const newAccount = new NewAccount();
const newAccountContactPopup = new NewAccountContactPopup();
const newAccountContactPopupCustom = new NewAccountContactPopupCustom();
const newPaymentInstrumentPopup = new NewPaymentInstrumentPopup();
const newPolicyWizard = new NewPolicyWizard();
const newPolicyWizardCustom = new NewPolicyWizardCustom();
const searchTabBar = new SearchTabBar();

export class AccountScenarios {

    async accountSearch(accountNumber) {
        await searchTabBar.tabBarSearchTab.click();
        await accountSearch.accountSearchDVAccountNumberCriterion.setValue(accountNumber);
        await accountSearch.accountSearchAccountSearchScreenAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
    }

    async openAccount(accountNumber) {
        await this.accountSearch(accountNumber);
        await accountSearch.accountSearchScreenAccountSearchResultsLV.clickOnCellByColumnName(0,"Account #");
    }

    async openAccountUsingTabBar(accountNumber) {
        await accountsTabBar.selectTabBarAccountsTabAccountNumberSearchItemMenuItem();
        await accountsTabBar.setTabBarAccountsTabAccountNumberSearchItemTextValue(accountNumber);
    }

    async createNewAccountRandomNumber() {
        let randomNumber = Math.floor( Math.random() * 12028932 + 1);
        let accountNumber = "ACC-MH" + randomNumber;
        await this.createNewAccount(accountNumber);
    }

    async createNewAccount(accountNumber) {
        world.accountNumber = accountNumber;

        await accountsTabBar.tabBarAccountsTab.click();
        await accountsGroupMenuActions.accountsGroupAccountsMenuActions.click();
        await accountsGroupMenuActions.accountsMenuActionsAccountsMenuActions_NewAccount.click();
        await newAccount.newAccountDVAccountNumber.setValue(accountNumber);
        let randomNumber = Math.floor( Math.random() * 92037429 + 1);
        world.accountName = "John" + randomNumber;
        await newAccount.newAccountDVAccountName.setValue(world.accountName);
        await newAccount.newAccountDVBillingPlan.selectOptionByLabel("QA1BILLINGPLAN01");
        await newAccount.newAccountDVDelinquencyPlan.selectOptionByLabel("QA1DELINQUENCYPLAN01");
        await newAccount.newAccountDVSendInvoicesBy.selectOptionByLabel("Email");

        await newAccount.newAccountNewAccountScreenNewAccountDVPaymentInstrumentCreateNewPaymentInstrument.click();
        await newPaymentInstrumentPopup.newPaymentInstrumentPopupPaymentMethod.selectOptionByLabel('ACH/EFT');
        await newPaymentInstrumentPopup.newPaymentInstrumentPopupToken.setValue('123ACH-EFT');
        await newPaymentInstrumentPopup.newPaymentInstrumentPopupUpdate.click();

        //*** Add a Contact to the account */
        await newAccount.newAccountContactsLV_tbaddNewContact.click();
        await newAccount.newAccountNewAccountScreenNewAccountDVNewAccountContactsLV_tbaddNewContactaddNewPerson.click();

        await newAccountContactPopupCustom.stateSelectInput.selectOptionByValue("CA");
        await newAccountContactPopupCustom.firstNameInput.setValue(world.accountName);
        await newAccountContactPopupCustom.lastNameInput.setValue("Doe");
        await newAccountContactPopupCustom.addressLine1Input.setValue("1332 Everett Street");
        await newAccountContactPopupCustom.cityInput.setValue("El Cerrito");
        await newAccountContactPopup.newAccountContactPopupNewAccountContactScreenAccountContactCVAccountContactDetailDVglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon.click();
        // await t.pressKey('tab'); // Trigger auto-fill
        await newAccountContactPopupCustom.postalCodeInput.setValue("94530");
        await newAccountContactPopup.newAccountContactPopupNewAccountContactScreenAccountContactCVAccountContactDetailDVglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon.click();
        // await t.pressKey('tab'); // Trigger auto-fill
        //Select 'Yes'
        await newAccountContactPopupCustom.primaryPayerRangeRadioYesOption.click();
        await newAccountContactPopupCustom.addNewRolesButton.click();
        await newAccountContactPopupCustom.rolesSelectInput.selectOptionByValue('insured');
        // The BC configuration determines how many buttons and what buttons appear
        // Standalone will have two buttons - OK and Cancel
        // Integrated will have three buttons - Update, Cancel, Check for Duplicates
        await newAccountContactPopupCustom.updateButton.component.exists ? 
            await newAccountContactPopupCustom.updateButton.click() : 
            await newAccountContactPopupCustom.okButton.click();
        
        await newAccount.newAccountScreenUpdate.click();

        //** Add a New Policy to the just created account  */
        await accountGroupMenuActions.accountGroupAccountDetailMenuActions.click();
        await accountGroupMenuActions.accountDetailMenuActionsAccountDetailMenuActions_NewPolicy.click();
        world.policyNumber = "PA01_" + randomNumber;
        await newPolicyWizard.newPolicyDVPolicyNumber.setValue(world.policyNumber);
        await newPolicyWizard.newPolicyDVPolicyLOB.selectOptionByLabel("Personal Auto");
        await newPolicyWizard.newPolicyDVPaymentPlan.selectOptionByLabel("QA1PAYMENTPLAN01");
        await newPolicyWizard.newPolicyDVDelinquencyPlan.selectOptionByLabel("QA1DELINQUENCYPLAN01");

        await newPolicyWizard.newPolicyContactsLV_tbaddExistingContact.click();
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVContactType.selectOptionByLabel("Person");
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVNameInputSetGlobalPersonNameInputSetFirstName.setValue(world.accountName);
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVNameInputSetGlobalPersonNameInputSetLastName.setValue("Doe");
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await contactSearchPopup.contactSearchPopupContactSearchScreenContactSearchResultsLV.clickOnCell(0, 0);
        await newPolicyWizard.newPolicyWizardNext.click();
        
        await newPolicyWizard.policyAddChargesLV_tbAdd.click();
        await newPolicyWizardCustom.newPolicyWizardNewPolicyWizardChargeStepScreenPolicyAddChargesListDetailPanelPolicyAddChargesLV_Amount.setValue("1400");
        await newPolicyWizard.newPolicyWizardFinish.click();
    }
}
