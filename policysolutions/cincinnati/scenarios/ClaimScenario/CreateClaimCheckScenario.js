import { PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { PcfButton } from "@gtui/gt-ui-framework/bin/pebbles-ui/components/PcfButton";
import { t } from "testcafe";
import { ClaimMenuActions } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/menuActions/ClaimMenuActions";
import { ClaimTabBar } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/tabBar/ClaimTabBar";

const claimMenuActions = new ClaimMenuActions();
const claimTabBar = new ClaimTabBar();

export class CreateClaimCheckScenario{

    claimTabParent = claimTabBar.tabBarClaimTab.component.parent().sibling();

    async createClaimCheck(){

        await claimMenuActions.claimClaimMenuActions.click();
        await claimMenuActions.claimMenuActions_NewTransactionClaimMenuActions_NewTransaction_CheckSet.click();

        //Step 1 of 3: Enter Payee Information
        let primaryPayeeName = this.claimTabParent.find('div[id$="-PrimaryPayee_Name_Input"]').withText('Name');
        await PcfSelectInput(primaryPayeeName.find('div[id$="-PrimaryPayee_Name"]')).selectOptionByLabel('gQSKUShhWh kawQVZfpQE');

        await PcfButton(this.claimTabParent.find('div[id$="-Next"]')).click();// Next Button

        //Step 2 of 3: Enter Payment Information

        let reserveLine = this.claimTabParent.find('div[id$="-ReserveLine_Input"]').withText('Reserve Line');
        await PcfSelectInput(reserveLine.find('div[id$="-ReserveLine"]')).selectOptionByLabel('New...');

        let exposure = this.claimTabParent.find('div[id$="-Exposure_Input"]').withText('Exposure');
        await PcfSelectInput(exposure.find('div[id$="-Exposure"]')).selectOptionByLabel('(1) Medical Details');

        let costType = this.claimTabParent.find('div[id$="-CostType_Input"]').withText('Cost Type');
        await PcfSelectInput(costType.find('div[id$="-CostType"]')).selectOptionByLabel('Claim Cost');

        let costCategory = this.claimTabParent.find('div[id$="-CostCategory_Input"]').withText('Cost Category');
        await PcfSelectInput(costCategory.find('div[id$="-CostCategory"]')).selectOptionByLabel('Medical');

        let paymentType = this.claimTabParent.find('div[id$="-Payment_PaymentType_Input"]').withText('Payment Type');
        await PcfSelectInput(paymentType.find('div[id$="-Payment_PaymentType"]')).selectOptionByLabel('Final');

        let category = this.claimTabParent.find('td[id$="-LineCategory_Cell"]');
        await PcfSelectInput(category.find('div[id$="-LineCategory"]')).selectOptionByLabel('Physical therapy');

        let amount = this.claimTabParent.find('td[id$="-Amount_Cell"]');
        await PcfTextInput(amount.find('div[id$="-Amount"]')).setValue('5000');
        
        await t.wait(2000);

        await PcfButton(this.claimTabParent.find('div[id$="-Next"]')).click();
        await PcfButton(this.claimTabParent.find('div[id$="-Finish"]')).click();
        await t.wait(3000);

    }

    async verifyCreatedCheck(){

        let verifiedWord = 'Financials: Checks';

        let verifyThis = await this.claimTabParent.find('div[id$="-ttlBar"]').innerText;
        
        await t.expect(verifiedWord).contains(verifyThis);

        console.log('Successfully create a Claim Check')

        await t.debug();
    }

}