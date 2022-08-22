import { CustomMethod } from "../util/helpers";
import { PolicySearch } from "../../pages/search/PolicySearch";
import world from "../util/world";


const helpers = new CustomMethod();
const policySearch = new PolicySearch();

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
      
    }
}