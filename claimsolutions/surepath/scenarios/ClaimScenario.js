import { ClaimTabBar } from "./ScenarioPages/ClaimTabBar";
import { ClaimMenuLinks } from "../../pages/navigation/menuLinks/ClaimMenuLinks";
import { ClaimSummary } from "../../pages/claim/claimSummaryGroup/ClaimSummary";
import { onApp } from "../../../pageregistry/onApp";
import world from "../utils/world";
import {Selector, t} from "testcafe";

const claimTabBar = new ClaimTabBar();
const claimMenuLinks = new ClaimMenuLinks();
const claimSummary = new ClaimSummary();
let onCCApp = new onApp("CC");

export class ClaimScenario {
  constructor() {}

    async openClaim() {
      await claimTabBar.tabBarClaimTab.click();
      await claimTabBar.tabBarClaimTabMoreOptions.click();
      await claimTabBar.setValueTabBarClaimTabClaimTab_FindClaimTextInput(world.claimNumber);
      await claimTabBar.clickTabBarClaimTab_FindClaimButton();
    }

    async checkOverview() {
        await claimMenuLinks.claim_ClaimSummaryGroupClaimSummaryGroup_ClaimSummary.click();
        const lossDate = await claimSummary.claimSummaryScreenLossDate.getValue();
        await t.expect(lossDate).notEql(null);
    }

    today() {
        let date = new Date();
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
    }
}
