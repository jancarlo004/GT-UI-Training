import { t } from "testcafe";
import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';
import { Main_helper } from "./Main_helper";
import world from "../world";

export class PolicyScenarios_helper extends Main_helper{
    
    async searchPolicyBasedOnLOB(LOB){
        let ui_PolicySearchScreen = await this.getScreenComponent("PolicySearch-PolicySearchScreen");

        for(let indexCounter = 0; indexCounter !== world.LOB.length; indexCounter++){
            if (LOB == world.LOB[indexCounter]){
                await t.typeText(ui_PolicySearchScreen.component.find('div.gw-TextValueWidget[id$=-AccountNumber]'),'1510820435')
                await this.selectDropdownValue('PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearchDV-ProductName',world.LOB[indexCounter]);
                await t.click(ui_PolicySearchScreen.component.find('div.gw-LinkWidget[id$=-Search]'));
                await this.selectListViewValue('PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearch_ResultsLV',5,world.LOB[indexCounter],2);
                console.log(`${world.LOB[indexCounter]} policy is present in the account`);
            }
        }
    } 
}