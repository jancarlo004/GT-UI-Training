import { PcfButton } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { SearchTabBar } from "../../../../claimsolutions/pages/navigation/tabBar/SearchTabBar";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";
import { RecoverySearch } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/search/RecoverySearch";
import world from "../../util/world";

const searchTabBar = new SearchTabBar();
const recoverySearch = new RecoverySearch();
const claimTabBar = new ClaimTabBar();

export class SearchClaimRecovery{

    async searchRecovery(){

        await t.click(searchTabBar.tabBarSearchTab.component.find('.gw-action--expand-button'));
        await searchTabBar.searchTabSearch_RecoverySearch.click();
        await recoverySearch.recoverySearchRequiredInputSetClaimNumber.setValue(world.InsuranceInfo.ClaimInfo.claimNumber);
        
        let name = world.PrimaryInsuredInformation.PersonalInfo.fullName.split(" ");

        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVRecoverySearchRequiredInputSetGlobalPersonNameInputSetFirstName.setValue(name[0])
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVRecoverySearchRequiredInputSetGlobalPersonNameInputSetLastName.setValue(name[1])
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await recoverySearch.recoverySearchScreenRecoverySearchResultsLV.clickOnCell(0,1);
        await t.debug();
        
    }

    async recoveryIsFound(){

        let verifiedWords = world.PrimaryInsuredInformation.PersonalInfo.fullName;
        let verifyThisWord = await claimTabBar.tabBarClaimTab.component.parent().sibling().find('div[id$="-ttlBar"]').find('.gw-TitleBar--title').innerText;
        console.log(verifyThisWord);

        await t.expect(verifiedWords).contains(verifyThisWord, 'Unsuccessfully Claim Transactsion');
        console.log("Claim successfully filed");
        await t.pressKey('alt+v');


    }

}