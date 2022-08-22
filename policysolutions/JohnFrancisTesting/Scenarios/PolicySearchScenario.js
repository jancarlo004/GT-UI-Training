import { CustomMethod } from "../util/helpers";
import { PolicySearch } from "../../pages/search/PolicySearch";
import { SearchResults } from "../ScenariosPages/customPages";
import world from "../util/world";
import { t } from "testcafe";


const helpers = new CustomMethod();
const policySearch = new PolicySearch();
const searchResults = new SearchResults();

export class PolicySearchScenario{

    async searchPolicy(stepArguments){
        let LOB = stepArguments[0];
        switch(LOB) {
            case "Personal Auto":
                await helpers.clickSearchTab("Policies");
                await this.defaultSearchCriteria(LOB)
              break;
            case "Homeowners":
                await helpers.clickSearchTab("Policies");
                await this.defaultSearchCriteria(LOB)
              break;
            case "Inland Marine":
                await helpers.clickSearchTab("Policies");
                await this.defaultSearchCriteria(LOB)
              break;
            default:
          }
    }

    async defaultSearchCriteria(LOB){
      await policySearch.policySearchPolicySearchScreenDatabasePolicySearchPanelSetPolicySearchDVGlobalPersonNameInputSetFirstName.setValue(world.account.firstName[0]);
      await policySearch.policySearchPolicySearchScreenDatabasePolicySearchPanelSetPolicySearchDVGlobalPersonNameInputSetLastName.setValue(world.account.lastName[0]);
      await policySearch.policySearchDVProductName.selectOptionByValue(LOB);
      await policySearch.policySearchPolicySearchScreenDatabasePolicySearchPanelSetPolicySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
    }

    async verifySearchResults(){
      await t.expect(await searchResults.searchResultListView.rowCount()).gt(0);
    }
}