"use strict";
import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework";
import { Selector, t } from "testcafe";

export class ClaimTabBar {
  tabBarClaimTabClaimTab_FindClaimButton = Selector("#TabBar-ClaimTab-ClaimTab_FindClaim_Button");
  tabBarClaimTabClaimTab_FindClaim = Selector("#TabBar-ClaimTab-ClaimTab_FindClaim");
  tabBarClaimTabMoreOptions = PcfButton("#TabBar-ClaimTab > div.gw-action--expand-button > div")
  claimTabClaimTab_FNOLWizard = PcfComponent('#TabBar-ClaimTab-ClaimTab_FNOLWizard');
	claimTabClaimTab_FindClaim = PcfComponent('#TabBar-ClaimTab-ClaimTab_FindClaim');
	tabBarClaimTab = PcfComponent('#TabBar-ClaimTab');
	tabBarWidgetmoreoptions = PcfComponent('#TabBarWidget--more-options');

  async clickTabBarClaimTab_FindClaimButton() {
    await t.click(this.tabBarClaimTabClaimTab_FindClaimButton);
  }

  async setValueTabBarClaimTabClaimTab_FindClaimTextInput(valueToEnter) {
    await t
      .selectText(this.tabBarClaimTabClaimTab_FindClaim.find("input"))
      .pressKey("delete")
      .typeText(this.tabBarClaimTabClaimTab_FindClaim, valueToEnter)
      .pressKey("tab");
  }

  async selectFNOLWizardMenuItem() {
    await this.tabBarClaimTabMoreOptions.click();
    await this.claimTabClaimTab_FNOLWizard.click();
  }
}