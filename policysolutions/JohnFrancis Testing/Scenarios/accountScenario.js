import { t } from "testcafe";
import { AccountTabBar } from "../../../pages/navigation/tabBar/AccountTabBar";
import { NewAccount } from "../../../pages/account/NewAccount";
import { NewAccount_Personal } from "../../pages/customPages";
import world from "../../util/world";

const accountTabBar = new AccountTabBar();
const newAccount = new NewAccount();
const newAccount_Personal = new NewAccount_Personal();

export class AccountScenario{
    async createNewAccount(){
        await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue(world.account.firstName);
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue(world.account.lastName);
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await newAccount.newAccountScreenNewAccountButton.click();
        await newAccount.newAccountButtonNewAccount_Person.click();
        await newAccount_Personal.mobileNo.setValue(world.account.mobileNumber);
        await newAccount_Personal.primaryEmailAddress.setValue(world.account.primaryEmailAddress);
        await newAccount_Personal.addressLine1.setValue(world.account.addressLine1);
        await newAccount_Personal.city.setValue(world.account.city);
        await t.pressKey('tab');
        await newAccount_Personal.state.selectOptionByValue(world.account.state);
        await newAccount_Personal.postalCode.setValue(world.account.zipCode);
        await t.pressKey('tab');
        await newAccount_Personal.addressType.selectOptionByValue("home");
        await newAccount_Personal.organization.setValue("Enigma Fire & Casualty");
        await t.pressKey('tab');
        await newAccount_Personal.producerCode.selectNthOption(1);
        await newAccount_Personal.createButton.click();
    }
    // async searchExistingAccount(){
    //     await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
    //     await accountTabBar.accountTabAccountTab_AccountNumberSearchItem.setValue(world.account.accountNo);
    //     await t.pressKey('enter');
    // }
}