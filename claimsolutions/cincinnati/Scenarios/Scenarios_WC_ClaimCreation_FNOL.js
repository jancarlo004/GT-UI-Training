import { t } from 'testcafe';
import { FNOLWizard } from '../../pages/claim/FNOLWizard';
import { Main_helper } from '../util/helpers/Main_Helper';
import world from '../util/world';

const mainHelper = new Main_helper();
const fnolWizard = new FNOLWizard();

export class Scenarios_WC_ClaimCreation_FNOL {
  
  async searchPolicy() {
    // Tab bar navigation
    const ui_ClaimTab = (await mainHelper.getScreenComponent("TabBar")).component.find('div.gw-TabWidget[id$=-ClaimTab]').find('div.gw-action--expand-button');
    
    await t.click(ui_ClaimTab);
    await t.click(ui_ClaimTab.parent('div').find('div.gw-MenuItemWidget[id$=-ClaimTab_FNOLWizard]'));

    //Search policy screen
    const ui_searchPolicyScreen = await mainHelper.getScreenComponent("FNOLWizard-FNOLWizard_FindPolicyScreen");

    await t.typeText(ui_searchPolicyScreen.component.find('div.gw-TextValueWidget[id$=-policyNumber]'), world.policyInformation.policyNumber);
    await t.click(ui_searchPolicyScreen.component.find('div.gw-LinkWidget[id$=-Search]'));
    await mainHelper.selectListViewValue('FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-PolicyResultLV',1,world.policyInformation.policyNumber,0);
    await t.typeText(ui_searchPolicyScreen.component.find('div.gw-DateValueWidget[id$=-Claim_LossDate]'),await mainHelper.getDateToday());
    await fnolWizard.fNOLWizardNext.click();
  }

  async workerscompensation_FNOLProcess(){
    //Basic Information Screen
    const basicInformation_Screens = {
      basicInformationScreen: "FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen",
      reportedBy_MainContactScreen: "FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-11",
      injuredWorkerNameScreen: "FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-16"
    }

    await fnolWizard.fNOLWizard_BasicInfoScreenClaim_LocationCode.selectNthOption(1);
    await mainHelper.selectOptionDropdown("Name",1,basicInformation_Screens.basicInformationScreen);
    await mainHelper.selectOptionDropdown("Relation to Insured","injuredworker",basicInformation_Screens.reportedBy_MainContactScreen);
    await mainHelper.selectOptionDropdown("Name",1,basicInformation_Screens.injuredWorkerNameScreen);
    await fnolWizard.fNOLWizardNext.click();

    //Loss Details screen
    const lossDetails_Screens = {
      lossDetails:"FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen",
      injuryCardScreen: "FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-Injury_Card"
    }

    await fnolWizard.fNOLWizard_NewLossDetailsScreenDateReportedtoEmployer.setValue(await mainHelper.getDateToday());
    await mainHelper.selectRadioButton("Lost time from work?","Yes",lossDetails_Screens.lossDetails);
    await mainHelper.selectRadioButton("Injury / Illness Result in Death?","Yes",lossDetails_Screens.injuryCardScreen)
    await mainHelper.selectOptionDropdown("Cause of Injury / Source","fall",lossDetails_Screens.injuryCardScreen);
    await mainHelper.selectOptionDropdown("Primary Injury Type","specific",lossDetails_Screens.injuryCardScreen);
    await mainHelper.selectOptionDropdown("Detailed Injury Type",7,lossDetails_Screens.injuryCardScreen);
    await mainHelper.selectRadioButton("Medical attention required?","Yes",lossDetails_Screens.injuryCardScreen);
    await fnolWizard.fNOLWizardNext.click();

    //Save and Assign Claim screen
    const assignmentSection = "FNOLWizard-FullWizardStepSet-FNOLWizard_AssignSaveScreen-3";
    
    await mainHelper.selectOptionDropdown("Assign claim and all exposures to:",1,assignmentSection);
    await fnolWizard.fNOLWizardFinish.click();

    //New Claim Saved screen
    const ui_ClaimSavedScreen = await mainHelper.getScreenComponent("NewClaimSaved-NewClaimSavedScreen");
    world.claimNumber = await (await ui_ClaimSavedScreen.component.find('div.gw-LabelWidget[id$=-Header]').innerText).replace(/\D/g,'');
  }

  async getClaimNumber(){
    console.log(`Claim Number: ${world.claimNumber}`);
  }
}