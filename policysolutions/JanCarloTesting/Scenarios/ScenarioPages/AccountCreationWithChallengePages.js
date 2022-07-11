import { PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class AccountCreationWithChallengePages{

    newAccountScreen = PcfComponent("#NewAccount-NewAccountScreen");
    createAccountScreen = PcfComponent("#CreateAccount-CreateAccountScreen-CreateAccountDV");
    

    async textInputFieldForSearchAccount(textFieldName, value){
        await t.typeText(this.newAccountScreen.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }

    async searchButton(){
        await t.click(this.newAccountScreen.component.find('div.gw-ContentInputWidget[id$=-searchBtns]').find('div.gw-LinkWidget[id$=-Search]'));
    }

    async CreateNewAccount(newAccount){
        let createNewAccountButton = this.newAccountScreen.component.find('div.gw-ToolbarButtonWidget[id$=-NewAccountButton]');
        await t.click(createNewAccountButton);
        await t.click(createNewAccountButton.find('.gw-label').withText(newAccount));   
    }

    async selectInputFieldForCreateAccount(selectInputName, selectInputOptionValue){
        let dropdownElements = this.createAccountScreen.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
        await t.click(dropdownElements);
        await t.click(dropdownElements.find('option').withText(selectInputOptionValue));

    }
    async textInputFieldForCreateAccount(textFieldName, value){
        await t.typeText(this.createAccountScreen.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }

    async selectInputFieldForCreateAccount(selectInputName, selectInputOptionValue){
        let dropdownElements = this.createAccountScreen.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
        await t.click(dropdownElements);
        await t.click(dropdownElements.find('option').withText(selectInputOptionValue));
    }

    async clickUpdateButton(buttonLabel){
        await t.click(this.createAccountScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(buttonLabel));
    }
}