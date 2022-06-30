import { InlandMarinePages } from "../CCScenarioPages/InlandMarinePages";
import {t} from "testcafe";
import world from "../../util/world";

const inlandMarinePages = new InlandMarinePages();

export class InLandMarinePolicyCreation {

    async inlandMarinePolicyCreation() {

        await inlandMarinePages.actionsMenuButton.click();
        await inlandMarinePages.newSubmission.click();
        await this.selectInlandMarineLOB("Inland Marine");
        await inlandMarinePages.organizationType.selectFirstOptionWithValue();
        await inlandMarinePages.nextButton.click();
        await inlandMarinePages.addCoverageButton.click();
            
        await inlandMarinePages.contructorsEquipment.click();
        await inlandMarinePages.nextButton.click();
        await inlandMarinePages.nextButton.click();
        await inlandMarinePages.contructorType.selectFirstOptionWithValue();
        await inlandMarinePages.coInsurance.selectFirstOptionWithValue();
        await inlandMarinePages.scheduledEquipment.click();
        await t.wait(1000);
        await inlandMarinePages.description.setValue("test");
        await inlandMarinePages.limit.setValue("1000");
        await inlandMarinePages.nextButton.click();
        await inlandMarinePages.quoteButton.click();
        await inlandMarinePages.bindOption.click();
        await inlandMarinePages.issuePolicyButton.click();
        world.policyNumber = await inlandMarinePages.policyNumber.component.find('.gw-infoValue').innerText;
    }

    async selectInlandMarineLOB(lob){
        let personalAutoLabel = inlandMarinePages.lobListView.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = personalAutoLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }

    async verifyInlanMarinePolicyCreated(){
        let result = "Submission (Bound)";
        await t.expect(await inlandMarinePages.submissionBoundLabel.component.innerText).contains(result);

    }
}