import { debug } from 'console';
import { t } from 'testcafe';
import { Main_helper } from '../util/helpers/Main_Helper';
import world from '../util/world';

const mainHelper = new Main_helper();

export class Scenarios_WC_ClaimCreation_ViewingClaim {
  
  async searchClaim() {
    const ui_claimTabBar = (await mainHelper.getScreenComponent('TabBar')).component.find('div.gw-TabWidget[id$=-ClaimTab]').find('div.gw-action--expand-button');
    
    await t.click(ui_claimTabBar);
    await t.typeText(ui_claimTabBar.parent('div').find('div.gw-SearchItemValueWidget[id$=-ClaimTab_FindClaim]'),world.claimNumber);
    await t.click(ui_claimTabBar.parent('div').find('div.gw-SearchItemButtonWidget[id$=-ClaimTab_FindClaim_Button]'));
  }

  async verifyClaim(){
    const ui_claimSummaryScreen = await mainHelper.getScreenComponent('ClaimSummary-ClaimSummaryScreen');

    let screenExisting = "";

    if(await ui_claimSummaryScreen.component.exists){
        screenExisting = "Yes";
        console.log(`Claim exists`);
      }else{
        screenExisting = "No";
        console.log(`${screenExisting} claim exists`);
    }
  }
}