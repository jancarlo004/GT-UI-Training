import { t } from "testcafe";
import { SearchTabBar } from "../../../../claimsolutions/pages/navigation/tabBar/SearchTabBar"
import { PaymentSearch } from "../../../../claimsolutions/pages/search/PaymentSearch";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";
import world from "../../util/world";

const searchTabBar = new SearchTabBar();
const paymentSearch = new PaymentSearch();
const claimTabBar = new ClaimTabBar();

export class SearchClaimCheck{

    async searchCheck(){
    
        await t.click(searchTabBar.tabBarSearchTab.component.find('.gw-action--expand-button'));
        await searchTabBar.searchTabSearch_PaymentSearch.click();

        await paymentSearch.paymentSearchRequiredInputSetClaimNumber.setValue('00000004428');

        let name = world.PrimaryInsuredInformation.PersonalInfo.fullName.split(" ");
        await t.debug();
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVPaymentSearchRequiredInputSetGlobalPersonNameInputSetFirstName.setValue(name[0]);
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVPaymentSearchRequiredInputSetGlobalPersonNameInputSetLastName.setValue(name[1]);
        await paymentSearch.paymentSearchPaymentSearchScreenPaymentSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await paymentSearch.paymentSearchScreenCheckSearchResultsLV.clickOnCell(0,1);
        
    }

    async checkIsFound(){

        let verifiedWords = 'Check Details';
        let verifyThisWord = await claimTabBar.tabBarClaimTab.component.parent().sibling().find('div[id$="-ttlBar"]').find('.gw-TitleBar--title').innerText;
        console.log(verifyThisWord);

        await t.expect(verifiedWords).contains(verifyThisWord, 'Unsuccessfully Claim Transactsion');
        await t.pressKey('alt+v');


    }


}