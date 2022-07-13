import {t} from 'testcafe';
import world from '../util/world';
import { AccountTabBar } from "../../pages/navigation/tabBar/AccountTabBar";
import { NewAccountScreen } from '../ScenarioPages/NewAccountScreen';


const newAccountScreen = new NewAccountScreen();
const accountTabBar = new AccountTabBar();


export class NewAccountScenario{

    async CreatePersonalAccount(){
        await accountTabBar.tabBarAccountTab.click();
        !await accountTabBar.tabBarAccountTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();

        await newAccountScreen.firstName.setValue("Hero");
        await newAccountScreen.lastName.setValue("Santos");
        await newAccountScreen.accountSearchButton.click();

        if(await newAccountScreen.existingAccountLV.rowCount() !=0){
            await newAccountScreen.existingAccountLV.clickOnCell(0,1);
            world.accountName = await newAccountScreen.accountName.component.innerText;
        }else{
            await newAccountScreen.createNewAccountButton.click();
            await newAccountScreen.newPerson.click();
            await newAccountScreen.address1.setValue("89 Skips Lane");
            await newAccountScreen.zipCode.setValue("85008");
            await newAccountScreen.state.selectOptionByLabel("Arizona");
            await t.pressKey('tab');
            await newAccountScreen.addressType.selectOptionByLabel("Home");
            await newAccountScreen.organizationCode.setValue("Allrisk Insurance");
            await t.pressKey('tab');
            await newAccountScreen.updateButton.click();
        }
    }

}