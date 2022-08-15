import { PcfComponent } from '@gtui/gt-ui-framework';
import { t } from 'testcafe';
import { Main_helper } from '../utils/helpers/Main_helper';
import { AccountTabBar } from '../../pages/navigation/tabBar/AccountTabBar';
import world from '../utils/world';
import { OrganizationSearchPopup } from '../../pages/popup/Organization/OrganizationSearchPopup';
import { exists } from 'fs';

const accountTabBar = new AccountTabBar();
const organizationSearchPopup = new OrganizationSearchPopup();
const helper = new Main_helper();


export class AccountScenarios {

    // async searchExistingPersonalAccount(accountNum){
    //   let tabBar_AccountTab = this.ui_TabBar.component.find('div.gw-TabWidget[id$=-AccountTab]');
    //   await t.click(tabBar_AccountTab.find('div.gw-action--expand-button'));
    //   await helper.setTextField('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem',accountNum);
    //   await t.click(tabBar_AccountTab.find('div.gw-SearchItemButtonWidget[id$=-AccountTab_AccountNumberSearchItem_Button]'))
    // }

    async createNewAccount() {
      await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
      await accountTabBar.accountTabAccountTab_NewAccount.click();
      

      //Enter account information screen --Search for an account
      await t.typeText(accountTabBar.searchAccount.component.find('div.gw-TextValueWidget[id$=-FirstName]'),world.newAccount_Contact.firstName);
      // world.newAccount_Contact.firstName = 'Gold'
      await t.typeText(accountTabBar.searchAccount.component.find('div.gw-TextValueWidget[id$=-FirstName]'),world.newAccount_Contact.firstName);
      // world.newAccount_Contact.lastName = 'Nucleus';
      world.newAccount_Contact.lastName = await helper.RandomStringGenerator(10);
      await t.typeText(accountTabBar.searchAccount.component.find('div.gw-TextValueWidget[id$=-LastName]'),world.newAccount_Contact.lastName);
      world.newAccount_Contact.fullName = world.newAccount_Contact.firstName + ' ' + world.newAccount_Contact.lastName;
      console.log(world.newAccount_Contact.fullName);
      await t.click(accountTabBar.searchAccount.component.find('div.gw-LinkWidget[id$=-Search]'));

      //--Select existing account if an account is existing
      if(await accountTabBar.searchAccount.component.find('div.gw-ListViewWidget[id$=-NewAccountSearchResultsLV]').exists == true){
        await helper.selectListViewValue('NewAccount-NewAccountScreen-NewAccountSearchResultsLV',2,world.newAccount_Contact.fullName,1);
      }
      else{ //--Create new account if account is not existing
        let createNewAccountButton = accountTabBar.searchAccount.component.find('div.gw-ToolbarButtonWidget[id$=-NewAccountButton]');
        await t.click(createNewAccountButton);
        await t.click(createNewAccountButton.find('div.gw-subMenu').find('div.gw-MenuItemWidget[id$=-NewAccount_Person]'));

        //Create account screen
        await t.typeText(accountTabBar.createAccount.component.find('div.gw-TextValueWidget[id$=-AddressLine1]'),world.newAccount_Contact.addressLine1);
        await t.typeText(accountTabBar.createAccount.component.find('div.gw-TextValueWidget[id$=-City]'),world.newAccount_Contact.city);
        await t.pressKey('tab');
        let stateDropdown = accountTabBar.createAccount.component.find('div.gw-ExpressionRangeValueWidget[id$=-State]');
        await t.click(stateDropdown);
        await t.click(stateDropdown.find('option').withAttribute('value',world.newAccount_Contact.state));
        await t.typeText(accountTabBar.createAccount.component.find('div.gw-TextValueWidget[id$=-PostalCode]'),world.newAccount_Contact.zipCode);
        await t.click(accountTabBar.createAccount.component.find('div.gw-ImageButtonWidget[id$=-SelectOrganization]'));

        //Search Organization screen
        await organizationSearchPopup.organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVGlobalContactNameInputSetName.setValue(world.newAccount_Contact.organization);
        await organizationSearchPopup.organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await helper.selectListViewValue('OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchResultsLV',1,world.newAccount_Contact.organization,0);
        
        //Create account screen
        await helper.selectDropdownValue('CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode','ProducerCode:3');
        await accountTabBar.updateButton.click();
      }
    }
  }