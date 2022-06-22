
import { AccountTabBar } from "../../../pages/navigation/tabBar/AccountTabBar"
import { NewAccount } from "../../../pages/account/NewAccount";
import { AccountPageScreen} from "../ScenarioPages/AccountPageScreen";
import { t } from "testcafe";

const accountTab = new AccountTabBar();
const newaccount = new NewAccount();
const accountPageScreen = new AccountPageScreen();

export class AccountCreationWithChallenge{

    async accountCreationWithChallenge(){

        await accountTab.tabBarAccountTab.click();
        !await accountTab.tabBarAccountTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(accountTab.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTab.accountTabAccountTab_NewAccount.click();


        await this.FirstName("First name", "Jan Carlo");
        await this.LastName("Last name", " Magnisio");
        await this.Searchbutton();
        await newaccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await t.wait(1000);

        await accountPageScreen.createNewAccountButton.click();
        await accountPageScreen.createNewPersonButton.click();
        await t.wait(2000);
        await this.AddressLine("Address 1", "2515 E THOMAS RD");
        await this.City("City", "PHOENIX");
        await this.State("State", "Arizona");

      
    }

    async FirstName(firstName, value){
        await t.typeText(accountTab.searchAccount.component.find('.gw-label').withExactText(firstName).sibling('div').find('input'), value);
    }
    async LastName(lastName, value){
        await t.typeText(accountTab.searchAccount.component.find('.gw-label').withExactText(lastName).sibling('div').find('input'), value);
    }

    async Searchbutton(){
        await t.click(accountTab.searchAccount.component.find('div.gw-ContentInputWidget[id$=-searchBtns]').find('div.gw-LinkWidget[id$=-Search]'));
    }

    async AddressLine(addressLine, value){
        await t.typeText(accountTab.createAccount.component.find('.gw-label').withExactText(addressLine).sibling('div').find('input'), value);
    }

    async City(city, value){
        await t.typeText(accountTab.createAccount.component.find('.gw-label').withExactText(city).sibling('div').find('input'), value);
    }

    async State(state, value){
        let dropdownElement = await t.click(accountTab.createAccount.component.find('.gw-label').withExactText(state).sibling('div').find('select'));
        await t.click(dropdownElement);
        await t.click(dropdownElement.find('option').withText(value));
    }
}