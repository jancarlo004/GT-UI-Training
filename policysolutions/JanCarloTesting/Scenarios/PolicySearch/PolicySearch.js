import { PolicySearchPages } from "../ScenarioPages/PolicySearchPages.js"
import world from "../../util/world.js";
import { t } from "testcafe";

const policySearchTab = new PolicySearchPages();

export class PolicySearch{

    async searchPolicy() {
      await policySearchTab.searchTab.click();
      await policySearchTab.searchPolicy.setValue(world.policyNumber);
      await policySearchTab.searchButton.click();
      await t.wait(1000);
    }

    async verifyPolicyExists(){
        await t.expect(await policySearchTab.policySearchListView.rowCount()).gt(0);
    }
}