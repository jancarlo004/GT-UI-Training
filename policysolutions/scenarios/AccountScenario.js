import { AccountTabBar_Ext } from "./ScenarioPages/Account/AccountTabBar_Ext";
import { NewAccount } from "../../pages/account/NewAccount";
import { NewPersonAccountScreen } from "./ScenarioPages/Account/NewPersonAccountScreen";
import { Summary } from "../../pages/account/Summary";
import {EditAccountScreen} from "./ScenarioPages/Account/EditAccountScreen";
import { t } from "testcafe";
import world, { county } from "../utils/world.js";
import { PcfComponent } from "@gtui/gt-ui-framework";

const accountTabBar_Ext = new AccountTabBar_Ext();
const newAccount = new NewAccount();
const newPersonAccountScreen = new NewPersonAccountScreen();
const summary = new Summary();
const editAccountScreen = new EditAccountScreen();
let existingAccount = false;
let accountNumber = "";

export class AccountScenario {
    constructor() {}
  
    async createPersonalAccount() {
      //click account tab bar and new account
        await accountTabBar_Ext.tabBarAccountTab.click();
        !await accountTabBar_Ext.tabBarAccountTab_Ext.hasClass('gw-hasOpenSubMenu') && await t.click(accountTabBar_Ext.tabBarAccountTab_Ext.find('div.gw-action--expand-button'));
        await accountTabBar_Ext.accountTabAccountTab_NewAccount.click();
        //input names
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("James");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Reid");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await this.CheckIfAccountExists();
        if (existingAccount = false) {
        //click new account person button
        await newAccount.newAccountScreenNewAccountButton.click();
        await newAccount.newAccountButtonNewAccount_Person.click();
        
        
        //Enter account details
        await newPersonAccountScreen.addressLine1.setValue("1234 Hillsdale Blvd");
        await newPersonAccountScreen.city.setValue("Foster City")
        await newPersonAccountScreen.addressType.click();
        await newPersonAccountScreen.addressType.selectOptionByLabel("Home");
        await newPersonAccountScreen.Organization.setValue("Armstrong and Company");
        await newPersonAccountScreen.SearchOrganization.click();
        await newPersonAccountScreen.selectProducerCode("501-002542 Armstrong - Los Angeles");
        await newPersonAccountScreen.updateButton.click();
        //store new accountNumber
        accountNumber = await summary.accountDetailsDetailViewTile_DVAccountNumber.getValue();
        //dito palang store mo ung account number lagay mo sa global variable       
      }
    }

    async openAccount() { 
        await accountTabBar_Ext.tabBarAccountTab.click();
        await accountTabBar_Ext.tabBarAccountTab_AccounNumberSearchItem.setValue(accountNumber);
        await accountTabBar_Ext.tabBarAccountTab_AccounNumberSearchItem_Button.click();
        
    }

    async CheckIfAccountExists() {
      let AccountListviewCount = await newAccount.newAccountScreenNewAccountSearchResultsLV.rowCount();
      if (AccountListviewCount > 0) {
       await newAccount.newAccountScreenNewAccountSearchResultsLV.clickOnCell(0,1);
        existingAccount = true;     
      }
    }

    async EditAccount() {     
        await summary.actionsEditAccount.click();
      // await editAccountScreen.firstname.setValue(world.firstname);
      // await editAccountScreen.lastname.setValue(world.lastname);
      await editAccountScreen.dateofbirth.setValue(world.dateofbirth);
      await editAccountScreen.maritalstatus.selectOptionByLabel(world.maritalstatus);
      await t.pressKey('tab');
      await editAccountScreen.primaryphone.selectOptionByLabel(world.primaryphone);
      await t.pressKey('tab');
      if (world.primaryphone == "Home") {
        await editAccountScreen.homephone.click();
        await editAccountScreen.homephone.setValue(world.homephone);

      }
      else if (world.primaryphone == "Work") {
        await editAccountScreen.workphone.click();
        await editAccountScreen.workphone.setValue(world.workphone);
      }
      else if (world.primaryphone == "Mobile") {
        await editAccountScreen.mobilephone.click();
        await editAccountScreen.mobilephone.setValue(world.mobilephone);
      }      
      await t.pressKey('tab');
      await editAccountScreen.primaryemail.setValue(world.primaryemail);
      await editAccountScreen.secondaryemail.setValue(world.secondaryemail);
   
       if (editAccountScreen.address1 != "") {
         await editAccountScreen.address1.setValue(world.address1);
       }                 
        await editAccountScreen.city.setValue(world.city);
        await editAccountScreen.county.setValue(world.county);
        await editAccountScreen.state.click();       
       await editAccountScreen.update.click();
      }

      async VerifyListofPolicyTerms() {       
       //let result = await accountTabBar_Ext.policyTerms_LVW.getTextFromCellByColumnName(0,"Product");

       let rowcount = await summary.openPolicyTransactionsAccountListViewTileOpenPolicyTransactionsAccountListViewTile_LV.rowCount();
       console.log("Result: " + rowcount);
      //  if (x > 0) {         
      //   // return accountTabBar_Ext.policyTerms_LVW.getContentRow(0);
      //   console.log(accountTabBar_Ext.policyTerms_LVW.getContentRow(0));
      //  }
      //  else {
        
      //   // return "No Policy term is regsitered";
      //  }
      }
}