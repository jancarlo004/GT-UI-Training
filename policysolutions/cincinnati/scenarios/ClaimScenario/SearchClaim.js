import _ from "lodash";
import { t } from "testcafe";
import { WASI } from "wasi";
import { SearchTabBar } from "../../../../claimsolutions/pages/navigation/tabBar/SearchTabBar";
import { SimpleClaimSearch } from "../../../../claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";
import world from "../../util/world";

const claimTabBar = new ClaimTabBar(); 
const searchtabBar = new SearchTabBar();
const simpleClaimSearch = new SimpleClaimSearch();
export class SearchClaim{

    async searchClaim(){

        await t.click(claimTabBar.tabBarClaimTab.component.find('.gw-action--expand-button'));
        await t.typeText(claimTabBar.claimTabClaimTab_FindClaim.component, '00000004134');
        await t.pressKey('Enter');

    }

    async searchClaimSimpleSearch(){

        await t.click(searchtabBar.tabBarSearchTab.component.find('.gw-action--expand-button'));
        await t.hover(searchtabBar.searchTabSearch_ClaimSearchesGroup.component);
        await searchtabBar.tabBarSearchTabSearch_ClaimSearchesGroupClaimSearchesGroup_SimpleClaimSearch.click();
        await simpleClaimSearch.simpleClaimSearchDVClaimNumber.setValue(world.InsuranceInfo.ClaimInfo.claimNumber);
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click();
        await simpleClaimSearch.simpleClaimSearchScreenSimpleClaimSearchResultsLV.clickOnCell(0,3);

    }

}