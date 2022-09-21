import { t } from "testcafe";
import { SimpleClaimSearch } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch";
import { SearchTabBar } from "../../../pages/navigation/tabBar/SearchTabBar";
import world from "../../util/world";

const searchTabBar = new SearchTabBar(); 
const simpleClaimSearch = new SimpleClaimSearch();

export class SearchClaim{

    async searchClaim(){

        await t.click(searchTabBar.tabBarSearchTab.component.find('.gw-action--expand-button'));
        await t.hover(searchTabBar.searchTabSearch_ClaimSearchesGroup.component);
        await searchTabBar.tabBarSearchTabSearch_ClaimSearchesGroupClaimSearchesGroup_SimpleClaimSearch.click();
        await simpleClaimSearch.simpleClaimSearchDVPolicyNumber.setValue(world.InsuranceInfo.policyNumber)
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click();
        
    }

}