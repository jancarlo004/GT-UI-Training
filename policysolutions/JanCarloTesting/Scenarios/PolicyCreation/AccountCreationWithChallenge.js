
import { AccountTabBar } from "../../../pages/navigation/tabBar/AccountTabBar"
import { NewAccount } from "../../../pages/account/NewAccount";
import { AccountPageScreen} from "../ScenarioPages/AccountPageScreen";
import { NewPersonAccountScreen } from "../../../pages/other/NewPersonAccountScreen";
import { AccountCreationWithChallengePages } from "../ScenarioPages/AccountCreationWithChallengePages";
import { t } from "testcafe";
import world from "../../util/world";

const newaccount = new NewAccount();
const accountPageScreen = new AccountPageScreen();
const accounttabBar = new AccountTabBar();
const newPersonAccountScreen = new NewPersonAccountScreen();
const accountCreation = new AccountCreationWithChallengePages();

export class AccountCreationWithChallenge{

    async accountCreationWithChallenge(){

        await accounttabBar.tabBarAccountTab.click();
        !await accounttabBar.tabBarAccountTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(accounttabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accounttabBar.accountTabAccountTab_NewAccount.click();

        await accountCreation.textInputFieldForSearchAccount("First name", "Jan khkjg");
        await accountCreation.textInputFieldForSearchAccount("Last name", " jhgj");
        
        await accountCreation.searchButton();
        await t.wait(1000);

        if(await accountPageScreen.searchResults.rowCount() != 0){
            await accountPageScreen.searchResults.clickOnCell(0,1);
            world.accountName = await newPersonAccountScreen.accountName.component.innerText;
        }else{
        await accountCreation.CreateNewAccount("Person");
        await accountCreation.textInputFieldForCreateAccount("Address 1", "2515 E THOMAS RD");
        await accountCreation.selectInputFieldForCreateAccount("State", "Arizona");
        await accountCreation.selectInputFieldForCreateAccount("Address Type", "Home");
        await accountCreation.textInputFieldForCreateAccount("Organization","enigma");
        await t.pressKey('tab');
        await accountCreation.selectInputFieldForCreateAccount("Producer Code","INT-3 Internal Producer Code - 3");
        await accountCreation.clickUpdateButton("Update");  
        world.accountName = await newPersonAccountScreen.accountName.component.innerText;
        }
    }

    async textInputFieldForSearchAccount(textFieldName, value){
        await t.typeText(accounttabBar.searchAccount.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }

    async selectInputFieldForCreateAccount(selectInputName, selectInputOptionValue){
        let dropdownElements = accounttabBar.createAccount.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
        await t.click(dropdownElements);
        await t.click(dropdownElements.find('option').withText(selectInputOptionValue));

    }
    async textInputFieldForCreateAccount(textFieldName, value){
        await t.typeText(accounttabBar.createAccount.component.find('.gw-label').withExactText(textFieldName).sibling('div').find('input'), value);
    }

    async searchButton(){
        await t.click(accounttabBar.searchAccount.component.find('div.gw-ContentInputWidget[id$=-searchBtns]').find('div.gw-LinkWidget[id$=-Search]'));
    }

    async selectInputFieldForCreateAccount(selectInputName, selectInputOptionValue){
        let dropdownElements = accounttabBar.createAccount.component.find('.gw-label').withExactText(selectInputName).sibling('div').find('select');
        await t.click(dropdownElements);
        await t.click(dropdownElements.find('option').withText(selectInputOptionValue));
    }
}