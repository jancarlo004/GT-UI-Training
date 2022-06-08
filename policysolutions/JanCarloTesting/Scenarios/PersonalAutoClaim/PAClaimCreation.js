import {PAClaimCreations} from "../../Scenarios/CCScenarioPages/PAClaimCreations.js"
import { t } from "testcafe";
import world from "../../util/world.js";

const paClaimCreation = new PAClaimCreations();

export class PAClaimCreation{

    async PersonalAutoClaimCreation(){
        await paClaimCreation.ClaimTabBar.click();
        !await paClaimCreation.ClaimTabBar.component.hasClass('gw-hasOpenSubMenu') && await t.click(paClaimCreation.ClaimTabBar.component.find('div.gw-action--expand-button'));
        await paClaimCreation.fnolWizard.click();

        await paClaimCreation.searchPolicyNumber.setValue(world.policyNumber);
        await paClaimCreation.searchButton.click();
        await t.wait(3000);

        world.effectiveDate = await paClaimCreation.policyResult.getTextFromCell(0,7);
        await paClaimCreation.lossDate.setValue(world.effectiveDate);
        await paClaimCreation.nextButton.click();
        await paClaimCreation.nameInsured.selectFirstOptionWithValue();
        await t.wait(1000);
        await paClaimCreation.nextButton.click();
        await paClaimCreation.lossCause.selectOptionByLabel("Animal");
        await paClaimCreation.lossLocation.selectFirstOptionWithValue();
        await paClaimCreation.addVehicle.click();
        await paClaimCreation.existingVehicle.selectFirstOptionWithValue();
        await paClaimCreation.updateButton.click();
        await paClaimCreation.nextButton.click();
        await paClaimCreation.finishButton.click();
    }

    async verifyClaimIsCreated(){
        let claimCreated = "New Claim Saved";
        await t.expect(await paClaimCreation.claimCreated.component.innerText).contains(claimCreated);
    }
}