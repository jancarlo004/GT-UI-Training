import { ClaimTabBar } from "../scenarios/ScenarioPages/ClaimTabBar";
import { t } from "testcafe";

let claimTabBar = new ClaimTabBar();

export class CCTabBarHelper {

    /*
     * Click the Claim Tab | New Claim to launch the FNOL Wizard in ClaimCenter
     * This method can be called at any time regardless of the current UI page
     */
    async goToFNOLWizard() {
        await claimTabBar.selectFNOLWizardMenuItem();
    }

    async goToClaim(claimNumber){
        await claimTabBar.openTabBarClaimTabMenuItem();
        await t.typeText(claimTabBar.claimTabClaimTab_FindClaim.component, claimNumber).pressKey('enter');
    }

    /*
     * This method can be called only when the current UI page is claim page (e.g. claim summary)
     */
    async getClaimNumberFromClaimTab(){
        return (await claimTabBar.tabBarClaimTab.component.textContent).match(/\d{3}-\d{2}-\d{6}/).toString();
    }
}
