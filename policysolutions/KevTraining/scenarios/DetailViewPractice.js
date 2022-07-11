'use strict'
import { PcfButton, PcfComponent, PcfListView } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { Kevpages } from "../pages/account/Kevpages";
import world from "../../KevTraining/utils/world";
import { AutoDVPracticePages } from "../pages/account/AutoDVPracticePages";

const kevPages = new Kevpages();
const autoDVPracticePages = new AutoDVPracticePages();


export class DetailViewPractice {

  async detailViewPractice() {
// New Account screen
    await kevPages.accountTab.click();
    await t.click(kevPages.accountTab.component.find('div.gw-action--expand-button'));
    await kevPages.newAccount.click();
    await this.setValueForTextField("First name", "Danilor");
    await this.setValueForTextField("Last name", "Cruz");
    await this.setValueForDropDown("Country", "United States");
    await this.setValueForTextField("ZIP Code", "85083");
    await this.setValueForTextField("City", "Arizona");
    await t.pressKey('tab');
    await this.setValueForTextField("County", "Arizona");
    await t.pressKey('tab');
    await this.setValueForDropDown("State", "Arizona");
    await this.SearchButton("S");
    if(await autoDVPracticePages.searchResultLV.rowCount() == 0){
      await this.CreateNewAccountButton("Person");
      await this.setValueForDropDownCA("Primary Phone", "Mobile");
      await this.setValueForTextFieldCA("Address 1", "6220 W HEDGEHOG PL PHOENIX");
      await t.wait(2000);
      await this.setValueForDropDownCA("Address Type", "Billing");
      await this.setValueForTextFieldCA("Organization", "enigma");
      await t.pressKey('tab');
      await this.setValueForDropDownCA("Producer Code", "INT-3 Internal Producer Code - 3");
      await this.topButton("Update");
      world.accountName = await autoDVPracticePages.insuredName.component.innerText;
      console.log("result " + world.accountName);
    } else{
      await autoDVPracticePages.searchResultLV.clickOnCell(0,1);
      world.accountName = await autoDVPracticePages.insuredName.component.innerText;
      console.log("result " + world.accountName);
    }
  }





  async setValueForTextField(fieldName, value) {
    await t.typeText(kevPages.newAccountDV.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input'), value);

  }
  async setValueForDropDown(dropDown, value) {
    let ValueDropDown = kevPages.newAccountDV.component.find('.gw-label').withExactText(dropDown).sibling('div').find('select');
    await t.click(ValueDropDown);
    await t.click(ValueDropDown.find('option').withText(value));

  }

  async SearchButton(value) {
    await t.click(kevPages.newAccountDV.component.find('.gw-emptyLabel').sibling('div').find('div.gw-shortcutKey').withText(value));
  }

  async CreateNewAccountButton(menu) {
    let createButton = kevPages.newAccountDV.component.parent('div').sibling('div').find('div.gw-ToolbarButtonWidget[id$=-NewAccountButton]');
    await t.click(createButton);
    await t.click(createButton.find('.gw-label').withText(menu));
    
  }

  async setValueForDropDownCA(dropDownCA, value){
    let ValueDropDownCA = kevPages.createAccountDV.component.find('.gw-label').withExactText(dropDownCA).sibling('div').find('select');
    await t.click(ValueDropDownCA);
    await t.click(ValueDropDownCA.find('option').withText(value));

  }

  async setValueForTextFieldCA(fieldNameCA, value){
    await t.typeText(kevPages.createAccountDV.component.find('.gw-label').withExactText(fieldNameCA).sibling('div').find('input'), value);

  }

  async topButton(buttons){
    await t.click(kevPages.createAccountDV.component.parent('div').prevSibling('div').find('.gw-label').withText(buttons));


  }


}
    

