import { PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { NewRecoverySet } from "../../../../claimsolutions/pages/other/NewRecoverySet";
import { ClaimMenuActions } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/menuActions/ClaimMenuActions";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";

const claimMenuActions = new ClaimMenuActions();
const newRecoverySet = new NewRecoverySet();
const claimTabBar = new ClaimTabBar();
export class CreateClaimRecoveryScenario{

    claimTabBarParent = claimTabBar.tabBarClaimTab.component.parent().sibling();

    async createClaimRecovery(){

        await claimMenuActions.claimClaimMenuActions.click();
        await t.hover(claimMenuActions.claimMenuActions_NewTransactionClaimMenuActions_NewOtherTrans.component);
        await claimMenuActions.claimMenuActions_NewOtherTransClaimMenuActions_NewTransaction_RecoverySet.click();

        let payer = this.claimTabBarParent.find('div[id$="-Payer_Input"]').withText('Payer');
        await PcfSelectInput(payer.find('div[id$="-Payer"]')).selectOptionByLabel('QIwKvovzgg vJtWlgDuAD');
        
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetReserveLine.selectOptionByLabel('New...');
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetExposure.selectOptionByLabel('(1) Medical Details');
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostType.selectOptionByLabel('Claim Cost');
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostCategory.selectOptionByLabel('Medical');
        await newRecoverySet.recoveryDetailDVRecoveryCategory.selectOptionByLabel('Credit to expense');

        let category = this.claimTabBarParent.find('td[id$="-LineCategory_Cell"]');
        await PcfSelectInput(category).selectOptionByLabel('Doctor')

        let amount = this.claimTabBarParent.find('td[id$="-Amount_Cell"]');
        await PcfTextInput(amount).setValue('100000');
        
        await newRecoverySet.newRecoveryScreenUpdate.click();
        
        await t.debug();
    }
     
    async verifyClaimRecovery(){

        let verifiedWords = 'Financials: Transactions';
        let verifyThisWord = await this.claimTabBarParent.find('.gw-TitleBar--title').innerText;
        console.log(verifyThisWord);

        await t.expect(verifiedWords).contains(verifyThisWord);
        console.log('Claim Recovery Successfully Created');
    }

}

