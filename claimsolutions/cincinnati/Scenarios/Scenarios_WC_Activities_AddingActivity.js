import { t } from 'testcafe';
import { NewActivity } from '../../pages/other/NewActivity';
import { Main_helper } from '../util/helpers/Main_Helper';
import world from '../util/world';

const mainHelper = new Main_helper();
const newActivityPage = new NewActivity();

export class Scenarios_WC_Activities_AddingActivity {
  
  async addActivity(activity) {
    //Navigation
    let chosenActivity = ""+activity;
    const ui_ClaimsActionsButton = (await mainHelper.getScreenComponent('gw-west-panel')).component.find('div.gw-MenuActionsWidget[id$=-ClaimMenuActions]');
    const ui_NewActivityButton = ui_ClaimsActionsButton.find('div.gw-MenuItemWidget[id$=-ClaimMenuActions_NewActivity]').parent('div').find('div.gw-label').withText(chosenActivity);

    await t.click(ui_ClaimsActionsButton);
    await t.click(ui_NewActivityButton);

    let activitySubtype = ui_NewActivityButton.parent('div').parent('div').find('div.gw-subMenu');
    let activitySubtypeTotalCount = await activitySubtype.childElementCount;

    let activitySubtypeCounter = 0;
    let activitySubtypes = [];

    for(; activitySubtypeCounter != activitySubtypeTotalCount; activitySubtypeCounter++){
      activitySubtypes[activitySubtypeCounter] = await activitySubtype.child(activitySubtypeCounter).find('div.gw-label').innerText;
    }

    await t.click(ui_ClaimsActionsButton);
    await this.addActivitySubtype(chosenActivity,activitySubtypes);
  }

  async addActivitySubtype(activity,activitySubtypesArray){
    const ui_ClaimsActionsButton = (await mainHelper.getScreenComponent('gw-west-panel')).component.find('div.gw-MenuActionsWidget[id$=-ClaimMenuActions]');
    const ui_NewActivityButton = ui_ClaimsActionsButton.find('div.gw-MenuItemWidget[id$=-ClaimMenuActions_NewActivity]').parent('div').find('div.gw-label').withText(activity);
    
    for(let subtypeCounter = 0; subtypeCounter != activitySubtypesArray.length; subtypeCounter++){
      const ui_ActivitySubtypeButton = ui_NewActivityButton.parent('div').parent('div').find('div.gw-subMenu').find('div.gw-label').withText(activitySubtypesArray[subtypeCounter]);

      await t.click(ui_ClaimsActionsButton);
      await t.doubleClick(ui_NewActivityButton);
      await t.click(ui_ActivitySubtypeButton);

      // New Activity in Claim screen
      let newActivityScreen = "NewActivity-NewActivityScreen";

      await newActivityPage.newActivityDVActivity_DueDate.setValue(await mainHelper.getDateToday());
      await mainHelper.selectOptionDropdown("Assign To",2,newActivityScreen);
      await newActivityPage.newActivityScreenNewActivity_UpdateButton.click();
    }
  }
}