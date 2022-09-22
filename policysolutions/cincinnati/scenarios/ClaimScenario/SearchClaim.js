import { t } from "testcafe";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";
import { SimpleClaimSearch } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch";
import { SearchTabBar } from "../../../pages/navigation/tabBar/SearchTabBar";
import world from "../../util/world";

const claimTabBar = new ClaimTabBar(); 
const simpleClaimSearch = new SimpleClaimSearch();

export class SearchClaim{

    async searchClaim(){

        await t.click(claimTabBar.tabBarClaimTab.component.find('.gw-action--expand-button'));
        await t.typeText(claimTabBar.claimTabClaimTab_FindClaim.component, '00000003980');
        await t.pressKey('Enter');

    }

}