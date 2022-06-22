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
        await t.pressKey('tab');
        await paClaimCreation.relationToInsured.selectOptionByLabel("Self/Insured");
        await paClaimCreation.nextButton.click();
        await paClaimCreation.lossCause.selectOptionByLabel("Animal");
        await paClaimCreation.lossLocation.selectFirstOptionWithValue();
        await paClaimCreation.addVehicle.click();
        await paClaimCreation.existingVehicle.selectFirstOptionWithValue();
        await paClaimCreation.updateButton.click();
        await paClaimCreation.nextButton.click();
        await paClaimCreation.finishButton.click();
        await paClaimCreation.claimSaveLink.click();
    }

    async verifyClaimIsCreated(){
        let claimCreated = "New Claim Saved";
        await t.expect(await paClaimCreation.claimCreated.component.innerText).contains(claimCreated);
    }
    async exposureAndReserveCreation(){
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

        let exposureListViewIndex = await paClaimCreation.editReserveListView.rowCount() - 1;
        let findCostTypeField = await paClaimCreation.editReserveListView.getCellByColumnName(exposureListViewIndex, "Cost Type");
        let costType = PcfSelectInput(findCostTypeField);
        await costType.selectOptionByLabel("Claim Cost");

        let findCostCategory = await paClaimCreation.editReserveListView.getCellByColumnName(exposureListViewIndex, "Cost Category");
        let costCategory = PcfSelectInput(findCostCategory);
        await costCategory.selectOptionByLabel("Glass");

        let findNewAvailableReserve = await paClaimCreation.editReserveListView.getCellByColumnName(exposureListViewIndex, "New Available Reserves");
        let newAvailablereserve = PcfTextInput(findNewAvailableReserve);
        await newAvailablereserve.setValue("1000");

        await paClaimCreation.saveButton.click();
        await t.wait(1000);

    }
    async verifyReserveIsCreated(){
       await t.expect(await paClaimCreation.financialListView.rowCount()).gt(0);
   
    }

    async createService(){
        await paClaimCreation.claimMenuActions.click();
        await paClaimCreation.serviceRequest.click();
        await paClaimCreation.addServiceButton.click();
        await t.wait(2000);
        let alternativeAccoumodation = paClaimCreation.addServiceListview.component.find('td[id$=-ServiceLeaf_Cell]').withExactText("Alternative accommodation");
        let findCheckBoxAlternative = alternativeAccoumodation.find('div.gw-IteratorEntryCheckBoxWidget[id$=-_Checkbox]');
        await t.click(findCheckBoxAlternative);
        await paClaimCreation.okButton.click();
        await t.wait(1000);
        await paClaimCreation.requestType.selectOptionByLabel("Quote");
        await paClaimCreation.serviceAddress.selectFirstOptionWithValue();
        await t.pressKey('tab');
        await paClaimCreation.addName.click();
        await paClaimCreation.createAutoBodyRepairShopButton();
        await t.wait(2000);

    }  
}