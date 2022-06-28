'use strict'
import { PcfComponent } from "@gtui/gt-ui-framework"
import { t } from "testcafe";

export class CreateAccountScreen {

    newAccountSearchDV = PcfComponent('#NewAccount-NewAccountScreen');
    createAccountDV = PcfComponent('#CreateAccount-CreateAccountScreen');
    organizationSearchPopupScreen = PcfComponent('#OrganizationSearchPopup-OrganizationSearchPopupScreen');

    async setTextFieldValue(fieldName, value){
        await t.typeText(this.newAccountSearchDV.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value);
    }

    async selectOptionValue(dropdownName, optionValue){
        let dropdownElement = this.newAccountSearchDV.component.find('.gw-label').withText(dropdownName).sibling('div').find('select');
        await t.click(dropdownElement);
        await t.click(dropdownElement.find('option').withAttribute('value', optionValue));  
    }

    async searchResetButton(buttonName){
       await t.click(this.newAccountSearchDV.component.find('.gw-emptyLabel').sibling('div').find('div.gw-shortcutKey').withText(buttonName));
    }

    async setTextFieldValueForCreateAccount(fName, v){
        await t.typeText(this.createAccountDV.component.find('.gw-label').withText(fName).sibling('div').find('input'), v)
    }

    async selectOptionValueForCreateAccount(dName, optionVal){
        let ddElement = this.createAccountDV.component.find('.gw-label').withText(dName).sibling('div').find('select');
        await t.click(ddElement);
        await t.click(ddElement.find('option').withAttribute('value', optionVal));
    }

    async createNewAccountButton(menu){
        let createButton = this.newAccountSearchDV.component.find('div.gw-ToolbarButtonWidget[id$=-NewAccountButton]')
        await t.click(createButton);
        await t.click(createButton.find('.gw-label').withText(menu));
    }

    async setTextFieldValueForOrganization(fName , value) {
        await t.typeText(this.organizationSearchPopupScreen.component.find('.gw-label').withText(fName).sibling('div').find('input'), value);
    }

    async searchResetButtonOrganization(buttonName) {
        await t.click(this.organizationSearchPopupScreen.component.find('.gw-emptyLabel').sibling('div').find('div.gw-shortcutKey').withText(buttonName));
    }

    async selectOrganizationResultsListView(orgName){
        let organizationSearchResults = this.organizationSearchPopupScreen.component.find('div.gw-ListViewWidget[id$=-OrganizationSearchResultsLV]').find('td[id$=-Name_Cell]').withExactText(orgName);
        let organizationSelection = organizationSearchResults.sibling('td').find('div').find('.gw-label').withText("Select");
        await t.click(organizationSelection);
    }

    async updateCancelButtonForCreateAccount(buttonName){
        await t.click(this.createAccountDV.component.parent('div').prevSibling('div').find('.gw-label').withText(buttonName));
        
    }
}