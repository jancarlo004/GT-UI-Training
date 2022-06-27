'use strict';
import { CreateAccountScreen } from "../ScenarioPages/CreateAccountScreen";
import { t } from "testcafe";
import { AccountTabBar } from "../../../pages/navigation/tabBar/AccountTabBar";


const createAccountScreen = new CreateAccountScreen();
const accountTabBar = new AccountTabBar();

export class AccountCreation{

    async createAccount(){
        await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        
        await createAccountScreen.setTextFieldValue("First name", "Test");
        await createAccountScreen.setTextFieldValue("Last name", "Denosta");
        await createAccountScreen.selectOptionValue("Country", "US");
        await createAccountScreen.selectOptionValue("State", "AZ");

        await createAccountScreen.searchResetButton("S");
        await createAccountScreen.createNewAccountButton("Person");

        await createAccountScreen.setTextFieldValueForCreateAccount("Address 1", "6220 W HEDGEHOG PL");
        await createAccountScreen.selectOptionValueForCreateAccount("Address Type", "home");
        await t.click(createAccountScreen.createAccountDV.component.find('div.gw-ImageButtonWidget[id$=-SelectOrganization]'));

        await createAccountScreen.setTextFieldValueForOrganization("Organization", "Enigma");
        await createAccountScreen.searchResetButtonOrganization("S");

        await t.pressKey('tab');
        await createAccountScreen.selectOrganizationResultsListView();
        await createAccountScreen.selectOptionValueForCreateAccount("Producer Code", "ProducerCode:3")
        await createAccountScreen.updateCancelButtonForCreateAccount("Update");
    }
}