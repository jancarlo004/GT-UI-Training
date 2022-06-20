import { PolicySearchPages } from "../ScenarioPages/PolicySearchPages.js"
import world from "../../util/world.js";
import { t } from "testcafe";
import { PcfComponent } from "@gtui/gt-ui-framework";

const policySearchTab = new PolicySearchPages();

export class PolicySearch{

    async searchPolicy() {
      await policySearchTab.searchTab.click();
      await policySearchTab.searchPolicy.setValue(world.policyNumber);
      await policySearchTab.searchButton.click();
      await 
      await t.wait(1000);
    }

    async verifyPolicyExists(){
        await t.expect(await policySearchTab.policySearchListView.rowCount()).gt(0);
    }

    async selectExistingDriver(){
        let lobListview = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
        let productName = lobListview.find('td[id$=-Name_Cell]').exactText("Personal Auto");
        let selectButton = productName.sibling('td[id$=-Select]').find('.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }
}