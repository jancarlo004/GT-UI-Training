import { ViewPolicyScreen } from "../ScenarioPages/ViewPolicyScreen";


const viewPolicyScreen = new ViewPolicyScreen();

export class ViewPolicyScenario{

    async viewPolicySummary(){
        await viewPolicyScreen.policySummary.click();
    }

}