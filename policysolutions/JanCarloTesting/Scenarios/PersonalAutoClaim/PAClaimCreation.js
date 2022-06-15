import {PAClaimCreations} from "../../Scenarios/CCScenarioPages/PAClaimCreations.js"
import { t } from "testcafe";
import world from "../../util/world.js";
import { PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";

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
        await paClaimCreation.nameInsureds.selectFirstOptionWithValue();
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
    async exposureAndReserveCreation(){
        await paClaimCreation.claimSaveLink.click();
        await paClaimCreation.claimMenuActions.click();
        await paClaimCreation.getCollisionExposure();

        let insuredName = await paClaimCreation.insuredName.component.find('.gw-infoValue').innerText;
        
        await paClaimCreation.claimant.selectOptionByLabel(insuredName);
        await paClaimCreation.type.selectOptionByLabel("insured");
        await paClaimCreation.addExposureButton.click();
        await t.wait(1000);
        await paClaimCreation.claimMenuActions.click();
        await paClaimCreation.reserve.click();
        await t.wait(1000);

        let exposureListView = await paClaimCreation.editReserveListView.rowCount() - 1;
        let findCostTypeField = await paClaimCreation.editReserveListView.getCellByColumnName(exposureListView, "Cost Type");
        let costType = PcfSelectInput(findCostTypeField);
        await costType.selectOptionByLabel("Claim Cost");

        let findCostCategory = await paClaimCreation.editReserveListView.getCellByColumnName(exposureListView, "Cost Category");
        let costCategory = PcfSelectInput(findCostCategory);
        await costCategory.selectOptionByLabel("Glass");

        let findNewAvailableReserve = await paClaimCreation.editReserveListView.getCellByColumnName(exposureListView, "New Available Reserves");
        let newAvailablereserve = PcfTextInput(findNewAvailableReserve);
        await newAvailablereserve.setValue("1000");

        await paClaimCreation.saveButton.click();

    }
    async verifyReserveIsCreated(){
        
    }
}