import { PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { ClaimMenuActions } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/menuActions/ClaimMenuActions";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";
import { NewActivity } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/other/NewActivity";

const claimMenuAction = new ClaimMenuActions();
const claimTabBar = new ClaimTabBar();
const newActivity = new NewActivity();

export class AddAutoPilotActivity{

    autoPilotActivity = claimMenuAction.claimMenuActionsClaimMenuActions_NewActivity.component.nextSibling('div[id$="-NewActivityMenuItemSet_Category"]').withText('Autopilot');

    async addAutoPilotActionRequiredActivity(){


        await claimMenuAction.claimClaimMenuActions.click();
        await t.hover(this.autoPilotActivity);
        await PcfComponent(this.autoPilotActivity.find('div[id$="-0-item"]')).click()
        await newActivity.newActivityScreenNewActivity_UpdateButton.click();
        
    }
    
    async addAutoPilotNotification(){
        
        await claimMenuAction.claimClaimMenuActions.click();
        await t.hover(this.autoPilotActivity);
        await PcfComponent(this.autoPilotActivity.find('div[id$="-1-item"]')).click()
        await newActivity.newActivityScreenNewActivity_UpdateButton.click();

    }

    async verifyAutoPilotActivity(){

        let veriedWord = 'Workplan';

        let verifyThisWord = await claimTabBar.tabBarClaimTab.component.parent().sibling().find('.gw-TitleBar--title').innerText;
        
        await t.expect(veriedWord).contains(verifyThisWord);

    }

}