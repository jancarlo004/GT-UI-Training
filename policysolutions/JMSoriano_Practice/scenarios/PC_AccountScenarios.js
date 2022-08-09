import { PcfComponent } from '@gtui/gt-ui-framework';
import { t } from 'testcafe';
import { CustomMethods } from '../methods/CustomMethods';
import world from '../utils/world';


export class PC_AccountScenarios {

  customMethods = new CustomMethods();

  ui_TabBar = PcfComponent('#TabBar');
  ui_NewAccountScreen = PcfComponent('#NewAccount-NewAccountScreen');
  ui_CreateAccountScreen = PcfComponent('#CreateAccount-CreateAccountScreen');
  ui_SearchOrganizationScreen = PcfComponent('#OrganizationSearchPopup-OrganizationSearchPopupScreen');
  ui_CreateAccountUpdateCancelBtns = PcfComponent('#CreateAccount-CreateAccountScreen-0');
  ui_AccountDetailsTile = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-0');

    async searchExistingPersonalAccount(accountNum){
      let tabBar_AccountTab = this.ui_TabBar.component.find('div.gw-TabWidget[id$=-AccountTab]');
      await t.click(tabBar_AccountTab.find('div.gw-action--expand-button'));
      await this.customMethods.setTextField('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem',accountNum);
      await t.click(tabBar_AccountTab.find('div.gw-SearchItemButtonWidget[id$=-AccountTab_AccountNumberSearchItem_Button]'))
    }

    async createNewAccount() {
      let tabBar_AccountTab = this.ui_TabBar.component.find('div.gw-TabWidget[id$=-AccountTab]');
      await t.click(tabBar_AccountTab.find('div.gw-action--expand-button'));
      await t.click(tabBar_AccountTab.find('div.gw-subMenu').find('div.gw-MenuItemWidget[id$=AccountTab_NewAccount]'));
      //Enter account information screen
      await this.customMethods.setTextField('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName',world.newAccount_Contact.firstName);
      world.newAccount_Contact.lastName = await this.customMethods.RandomStringGenerator(10); 
      await this.customMethods.setTextField('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName',world.newAccount_Contact.lastName);
      world.newAccount_Contact.fullName = world.newAccount_Contact.firstName + ' ' + world.newAccount_Contact.lastName;
      console.log('Account Name: ' + world.newAccount_Contact.fullName);
      await t.click(this.ui_NewAccountScreen.component.find('div.gw-LinkWidget[id$=-Search]'));
      await t.click(this.ui_NewAccountScreen.component.find('div.gw-ToolbarButtonWidget[id$=-NewAccountButton]'));
      await t.click(this.ui_NewAccountScreen.component.find('div.gw-MenuItemWidget[id$=-NewAccount_Person]'));
      //Create account screen
      await this.customMethods.setTextField('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1',world.newAccount_Contact.addressLine1);
      await this.customMethods.setTextField('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City',world.newAccount_Contact.city);
      await t.pressKey('tab');
      await this.customMethods.selectDropdownValue('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State',world.newAccount_Contact.state);
      await this.customMethods.setTextField('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode',world.newAccount_Contact.zipCode);
      await t.pressKey('tab');
      await this.customMethods.selectDropdownValue('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType',world.newAccount_Contact.addressType);
      await t.click(this.ui_CreateAccountScreen.component.find('.gw-label').withText('Organization').sibling('div').find('div.gw-ImageButtonWidget[id$=-SelectOrganization]'));
      //Organization search screen
      await this.customMethods.setTextField('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-GlobalContactNameInputSet-Name',world.newAccount_Contact.organization);
      await t.click(this.ui_SearchOrganizationScreen.component.find('div.gw-LinkWidget[id$=-Search]'));
      await this.customMethods.selectListViewValue('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchResultsLV',1,world.newAccount_Contact.organization,0);
      await this.customMethods.selectDropdownValue('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode','ProducerCode:3');
      await t.click(this.ui_CreateAccountUpdateCancelBtns.component.find('div.gw-ToolbarButtonWidget[id$=-Update]'));
      world.accountInformation.accountNumber = await this.ui_AccountDetailsTile.component.find('div.gw-TextValueWidget[id$=-AccountNumber]').innerText;
      console.log(world.accountInformation.accountNumber);
    }
  }