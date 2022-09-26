import _ from "lodash";
import { t } from "testcafe";
import { SearchTabBar } from "../../../../claimsolutions/pages/navigation/tabBar/SearchTabBar";
import { ClaimSearch } from "../../../../claimsolutions/pages/search/claimSearchesGroup/ClaimSearch";
import { SimpleClaimSearch } from "../../../../claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";
import world from "../../util/world";

const claimTabBar = new ClaimTabBar(); 
const searchtabBar = new SearchTabBar();
const simpleClaimSearch = new SimpleClaimSearch();
const claimSearch = new ClaimSearch();
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
        await simpleClaimSearch.simpleClaimSearchDVClaimNumber.setValue('00000004146');
        await simpleClaimSearch.simpleClaimSearchSimpleClaimSearchScreenSimpleClaimSearchDVClaimSearchAndResetInputSetSearch.click();
        await simpleClaimSearch.simpleClaimSearchScreenSimpleClaimSearchResultsLV.clickOnCell(0,3);

    }

    async searchClaimAdvanceSearch(){

        await t.click(searchtabBar.tabBarSearchTab.component.find('.gw-action--expand-button'));
        await t.hover(searchtabBar.searchTabSearch_ClaimSearchesGroup.component);
        await searchtabBar.tabBarSearchTabSearch_ClaimSearchesGroupClaimSearchesGroup_ClaimSearch.click();
        await claimSearch.claimSearchRequiredInputSetClaimNumber.setValue('00000004146');
        await claimSearch.claimSearchRequiredInputSetPolicyNumber.setValue('5036149590');
        await claimSearch.claimSearchClaimSearchScreenClaimSearchDVClaimSearchRequiredInputSetGlobalPersonNameInputSetFirstName.setValue('iCNCMrUZcJ');
        await claimSearch.claimSearchClaimSearchScreenClaimSearchDVClaimSearchRequiredInputSetGlobalPersonNameInputSetLastName.setValue('anAjAkmrmn');
        await claimSearch.claimSearchClaimSearchScreenClaimSearchDVClaimSearchAndResetInputSetSearch.click();

        let advanceSearchResult = searchtabBar.tabBarSearchTab.component.parent().sibling().find('div[id$="-ClaimSearchResultsLV"]');
        await t.hover(advanceSearchResult);

    }

    async verifySearchClaim(){

        let verifiedWord = 'Summary';
        let verifyThis = await claimTabBar.tabBarClaimTab.component.parent().sibling().find('div[id$="-ttlBar"]').innerText;
        console.log(verifyThis);

        await t.expect(verifiedWord).contains(verifyThis);

        await t.debug();

    }

}