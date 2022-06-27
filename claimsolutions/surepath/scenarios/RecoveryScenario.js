import {SearchTabBar_Ext} from "../scenarios/ScenarioPages/SearchTabBar_Ext";
import { NewRecoverySet } from "../../pages/other/NewRecoverySet";
import { NewRecoverySet as NewRecoverySet_SP } from "./ScenarioPages/NewRecoverySet"
import { ClaimMenuActions } from "../../pages/navigation/menuActions/ClaimMenuActions"
import { RecoverySearch } from "../../pages/search/RecoverySearch"
import world from "../utils/world";

const searchTabBar = new SearchTabBar_Ext();
const newRecoverySet = new NewRecoverySet();
const newRecoverySet_SP = new NewRecoverySet_SP();
const claimMenuActions = new ClaimMenuActions();
const recoverySearch = new RecoverySearch();

export class RecoveryScenario {
    constructor() {}

    async createRecovery() {
        await claimMenuActions.claimClaimMenuActions.click();
        await claimMenuActions.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click();
        await claimMenuActions.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.click(); //click twice instead of hover
        await claimMenuActions.claimMenuActions_NewOtherTransClaimMenuActions_NewTransaction_RecoverySet.click();
        await newRecoverySet_SP.selectPayer();
        await newRecoverySet_SP.selectNewReserveLine();
        await newRecoverySet_SP.selectCostType();
        await newRecoverySet_SP.selectCostCategory();
        await newRecoverySet_SP.selectRecoveryCategory();
        await newRecoverySet_SP.inputAmount("500");
        await newRecoverySet.newRecoveryScreenUpdate.click();
      }
    
      async navigateToSearchRecoveriesPage() {
        await searchTabBar.openSearchRecovery();
      }
    
      async searchRecoveryByClaimNumber() {
        await recoverySearch.recoverySearchRequiredInputSetClaimNumber.setValue(world.claimNumber);
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVRecoverySearchOptionalInputSetDateSearchDateSearchRangeValue.selectOptionByLabel("Today");
        await recoverySearch.recoverySearchRecoverySearchScreenRecoverySearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
      }
    
      async getRecoverySearchResultCount() {
        let resultCount = await recoverySearch.recoverySearchScreenRecoverySearchResultsLV.rowCount();
    
        return resultCount;
      }
}