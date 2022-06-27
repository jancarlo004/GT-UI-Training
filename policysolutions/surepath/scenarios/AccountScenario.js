import { AccountTabBar_Ext } from "./ScenarioPages/Account/AccountTabBar_Ext";
import { NewAccount } from "../../pages/account/NewAccount";
import { NewPersonAccountScreen } from "./ScenarioPages/Account/NewPersonAccountScreen";
import { Summary } from "../../pages/account/Summary";
import { t } from "testcafe";
import world from "../utils/world.js";

const accountTabBar_Ext = new AccountTabBar_Ext();
const newAccount = new NewAccount();
const newPersonAccountScreen = new NewPersonAccountScreen();
const summary = new Summary();

export class AccountScenario {
    constructor() {}
  
    async createPersonalAccount() {
        await accountTabBar_Ext.tabBarAccountTab.click();
        !await accountTabBar_Ext.tabBarAccountTab_Ext.hasClass('gw-hasOpenSubMenu') && await t.click(accountTabBar_Ext.tabBarAccountTab_Ext.find('div.gw-action--expand-button'));
        await accountTabBar_Ext.accountTabAccountTab_NewAccount.click();
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("Ray");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Newton");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        
        //click new account person button
        await newAccount.newAccountScreenNewAccountButton.click();
        await newAccount.newAccountButtonNewAccount_Person.click();
        
        //Enter account details
        await newPersonAccountScreen.addressLine1.setValue("1234 Hillsdale Blvd");
        await newPersonAccountScreen.city.setValue("Foster City")
        await newPersonAccountScreen.addressType.click();
        await newPersonAccountScreen.addressType.selectOptionByLabel("Home");
        await newPersonAccountScreen.selectProducerCode("501-002552 Allrisk Insurance");
        await newPersonAccountScreen.updateButton.click();
        world.accountNumber = await summary.accountDetailsDetailViewTile_DVAccountNumber.getValue();
    }

    async openAccount() {
        await accountTabBar_Ext.tabBarAccountTab.click();
        !await accountTabBar_Ext.tabBarAccountTab_Ext.hasClass('gw-hasOpenSubMenu') && await t.click(accountTabBar_Ext.tabBarAccountTab_Ext.find('div.gw-action--expand-button'));
        await accountTabBar_Ext.tabBarAccountTab_AccounNumberSearchItem.setValue(world.accountNumber.toString());
        await accountTabBar_Ext.tabBarAccountTab_AccounNumberSearchItem_Button.click();
    }

    async checkAccountOverview() {
        const accountStatus = await summary.accountDetailsDetailViewTile_DVAccountStatus.getValue();
        await t.expect(accountStatus).notEql(null);
    }
}