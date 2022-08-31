import { t } from "testcafe";
import { SearchTabBar } from "../../pages/navigation/tabBar/SearchTabBar";
import { SearchPolicyScreen } from "../ScenarioPages/SearchPolicyScreen";
import world from "../util/world";

const searchPolicyScreen = new SearchPolicyScreen();

export class SearchPolicyScenario{

    async searchPolicy(){
        await searchPolicyScreen.searchTabBar.click();
        await searchPolicyScreen.searchPolicyNumber.setValue(world.policyNumber);
        await searchPolicyScreen.searchButton.click();
        await searchPolicyScreen.policySearchResult.clickOnCell(0,2);
    }


}