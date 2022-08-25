import { AccountMenuActions } from "../../../policysolutions/pages/navigation/menuActions/AccountMenuActions";
import { WCPolicyCreationPages } from "../ScenarioPages/WCPolicyCreationPages";
import { t } from "testcafe";

const accountMenuActions = new AccountMenuActions();
const wcPolicyCreation = new WCPolicyCreationPages();

export class WCPolicyCreationScenario{

    async policyCreationForWorkersCompensation(){

        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await this.selectAutoLOB("Workers' Compensation");
        

    }

    async selectAutoLOB(lob){
        let personalAutoLabel = wcPolicyCreation.LobListView.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = personalAutoLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }
}