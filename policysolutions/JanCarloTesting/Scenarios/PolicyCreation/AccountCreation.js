import { AccountTabBar } from "../../../pages/navigation/tabBar/AccountTabBar"
import { NewAccount } from "../../../pages/account/NewAccount";
import { NewPersonAccountScreen } from "../../../pages/other/NewPersonAccountScreen";
import { AccountPageScreen} from "../ScenarioPages/AccountPageScreen";
import { t } from "testcafe";
import world from "../../util/world";

const accountTab = new AccountTabBar();
const newaccount = new NewAccount();
const newPersonAccountScreen = new NewPersonAccountScreen();
const accountPageScreen = new AccountPageScreen();

export class AccountCreation{

    async CreatePersonalAccount(){
    
    await accountTab.tabBarAccountTab.click();
    !await accountTab.tabBarAccountTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(accountTab.tabBarAccountTab.component.find('div.gw-action--expand-button'));
    await accountTab.accountTabAccountTab_NewAccount.click();
<<<<<<< HEAD
    await newaccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("Don");
    await newaccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Estrada");
=======
    await newaccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("Dominic");
    await newaccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Campilla");
>>>>>>> 857b05d5ced8a75cb887545183f4eb1a5e1a64fc
    await newaccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
    await t.wait(1000);

        if(await accountPageScreen.searchResults.rowCount() != 0){
            await accountPageScreen.searchResults.clickOnCell(0,1);
            world.accountName = await newPersonAccountScreen.accountName.component.innerText;
        }else{
            await accountPageScreen.createNewAccountButton.click();
            await accountPageScreen.createNewPersonButton.click();
            await t.wait(2000);
            await newPersonAccountScreen.addressLine1.setValue("250 W 10TH AVE");
            await newPersonAccountScreen.city.setValue("MESA");
            await t.pressKey('tab');
            await newPersonAccountScreen.states.selectOptionByLabel("Arizona");
            await newPersonAccountScreen.addressType.selectOptionByLabel("Home");
            await newPersonAccountScreen.organization.setValue("enigma");
            await t.pressKey('tab');
            await newPersonAccountScreen.selectProducerCode("INT-3 Internal Producer Code - 3");
            await newPersonAccountScreen.updateButton.click();
            await t.wait(1000);
            world.accountName = await newPersonAccountScreen.accountName.component.innerText;

        }
    }
}