import { t } from "testcafe";
import { WCClaimCreationFNOLPages_JFM } from "../ScenarioPages/WCClaimCreationFNOLPages_JFM";
import { ClaimTabBar } from "../../pages/navigation/tabBar/ClaimTabBar";
import { FNOLWizard } from "../../pages/claim/FNOLWizard";
import world from "../utils/world";

const wcClaimCreationFNOLPages = new WCClaimCreationFNOLPages_JFM();
const claimTabBar = new ClaimTabBar();
const fNOLWizard = new FNOLWizard();

export class WCClaimCreationFNOL{
    async claimCreationFNOL(){
        await t.click(wcClaimCreationFNOLPages.claimsTab.component.find('div.gw-action--expand-button'));
        await claimTabBar.claimTabClaimTab_FNOLWizard.click();
        await fNOLWizard.fNOLWizardFNOLWizard_FindPolicyScreenFNOLWizardFindPolicyPanelSetGlobalContactNameInputSetName.setValue("Sample WorkersComp");
        await fNOLWizard.fNOLWizardFindPolicyPanelSetSearch.click();
        await t.click(wcClaimCreationFNOLPages.fNOLWizardFindPolicyPanelSetClaim_LossDate.component.find('div.gw-min-visible gw-date-icon'));
    }

    // async selectExistingPolicy(){
    //     let searchedPolicy = fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyResultLV.component.find('td[id$=-PolicyNumber_Cell').withExactText(world.policyNumber);
    //     let selectButton = searchedPolicy.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-selectButton]');
    //     await t.click(selectButton);
    // }
}