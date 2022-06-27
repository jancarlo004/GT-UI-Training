'use strict';
import { NewAccount } from "../../../pages/account/NewAccount"
import { AccountTabBar} from "../../../pages/navigation/tabBar/AccountTabBar"
import { NewPersonAccountScreen } from "../../../pages/account/NewPersonAccountScreen";
import { Summary } from "../../../pages/account/Summary";
import { t } from "testcafe";
//import world from "../../utils/world"

const newAccount = new NewAccount();
const newPersonAccountScreen = new NewPersonAccountScreen();
const accountTabBar = new AccountTabBar();
const summary = new Summary();

export class AccountCreationScenario{

    async createAccount(){
        await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("Clouvis");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Denosta");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        
        await newAccount.newAccountScreenNewAccountButton.click();
        await newAccount.newAccountButtonNewAccount_Person.click();
        
        await newPersonAccountScreen.addressLine1.setValue("6220 W HEDGEHOG PL");
        await newPersonAccountScreen.city.setValue("PHOENIX");
        await newPersonAccountScreen.addressType.click();
        await newPersonAccountScreen.addressType.selectOptionByLabel("Home");
        await newPersonAccountScreen.producer.setValue("enigma");
        await t.pressKey("tab");
        await t.wait(1000);
        await newPersonAccountScreen.selectProducerCode("INT-3 Internal Producer Code - 3");
        await newPersonAccountScreen.updateButton.click();
        await summary.accountDetailsDetailViewTile_DVAccountNumber.getValue();
    }

    async createdAccountSuccessfully(){
        const accountStatus = await summary.accountDetailsDetailViewTile_DVAccountStatus.getValue();
        await t.expect(accountStatus).notEql(null);
    }
}