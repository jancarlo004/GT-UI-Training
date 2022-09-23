import { NewPersonAccountScreen } from "../../pages/other/NewPersonAccountScreen";
import { Summary } from "../../pages/account/Summary";
import { t } from "testcafe";
import { NewAccount } from "../../pages/other/NewAccount";
import { AccountTabBar_Ext } from "../../surepath/scenarios/ScenarioPages/Account/AccountTabBar_Ext";

const newAccount = new NewAccount()
const newPersonAccountScreen = new NewPersonAccountScreen();
const summary = new Summary();
const accountTabBar_Ext = new AccountTabBar_Ext();
let accountNumber = "";

export class AccountCreationScenario {
    Contructor(){}

    async createPersonalAccount() {
        await accountTabBar_Ext.tabBarAccountTab.click();
        !await accountTabBar_Ext.tabBarAccountTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(accountTabBar_Ext.tabBarAccountTab_Ext.find('div.gw-action--expand-button'));
        await accountTabBar_Ext.accountTabAccountTab_NewAccount.click();
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("William");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Smith");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();

        let accountList = await newAccount.newAccountNewAccountScreenNewAccountSearchResultsLV.rowCount();
         
        if (accountList > 0){
        await newAccount.newAccountNewAccountScreenNewAccountSearchResultsLV.clickOnCell(0,1);
        } else {
        
        //Click new account Person 
        await newAccount.newAccountNewAccountScreenNewAccountButton.click();
        await newAccount.newAccountNewAccountScreenNewAccountButtonNewAccount_Person.click();

        //enter account details 
        await newPersonAccountScreen.addressLine1.setValue("250 W 10TH AVE ");
        await newPersonAccountScreen.city.setValue("MESA");
        await t.pressKey('tab');
        await newPersonAccountScreen.states.selectOptionByLabel("Arizona");
        await newPersonAccountScreen.addressType.selectOptionByLabel("Home");
        await newPersonAccountScreen.organization.setValue("enigma");
        await t.pressKey('tab');
        await newPersonAccountScreen.selectProducerCode("INT-3 Internal Producer Code - 3");
        await newPersonAccountScreen.updateButton.click();
       
        }      
        accountNumber = await summary.accountDetailsDetailViewTile_DVAccountNumber.getValue();
       
    }

    async verifyAccount(){
        await accountTabBar_Ext.tabBarAccountTab.click();
        !await accountTabBar_Ext.tabBarAccountTab.component.hasClass('gw-hasOpenSubMenu') && 
        await t.click(accountTabBar_Ext.tabBarAccountTab_Ext.find('div.gw-action--expand-button'));
        await accountTabBar_Ext.tabBarAccountTab_AccounNumberSearchItem.setValue(accountNumber);
        await accountTabBar_Ext.tabBarAccountTab_AccounNumberSearchItem_Button.click();
        let acctNumber = await summary.accountDetailsDetailViewTile_DVAccountNumber.getValue();
        await t.expect(accountNumber).eql(acctNumber);
    }
}
