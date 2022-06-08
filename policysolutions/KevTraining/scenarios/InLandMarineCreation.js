'use strict'
import { Kevpages } from "../pages/account/Kevpages";
import { t } from "testcafe"

const kevPages = new Kevpages();

export class InLandMarineCreation {
    constructor() {}

    async InLandMarineCreation() {
        await kevPages.actions.click();
        await kevPages.newSubmission.click();
        await kevPages.newSubmissionLV.clickOnCell(4,0); 
        await kevPages.orgType.selectOptionByLabel("Common ownership");
        await kevPages.submissionNext.click();
        await t.wait(3000);

        // Coverage Part Selection screen
        await kevPages.addCoveragePart();
        await kevPages.coveragePartCheckBox.click();
        await kevPages.submissionNext.click();
        
        // Buildings and Locations screen
        await kevPages.addBuilding();
        await kevPages.description.setValue("Building test");
        await t.wait(3000);
        await kevPages.okButton2.click();

        await kevPages.submissionNext.click();
        await kevPages.yesReporting.click();
        await kevPages.businessClass.selectOptionByLabel("Manufacturer");
        await kevPages.coninsurancePct.selectOptionByLabel("80%");
        await kevPages.addAccountReceivable.click();
        await kevPages.locbldg.selectOptionByLabel("1: 6220 W HEDGEHOG PL, PHOENIX, AZ / 1: Building test");
        await kevPages.receptacleType.selectOptionByLabel("UL Class A");
        await kevPages.persentDuplicated.selectOptionByLabel("50% or less");
        await kevPages.limit.setValue("123");
        await kevPages.submissionNext.click();
        await kevPages.submissionNext.click();
        await kevPages.quouteButton.click();
        await kevPages.bindOptions.click();
        await kevPages.issuePolicyButton.click();
        await t.wait(3000);


    }

    //  async verifyInLandMarineIsBound(){
    //     let policyBound = "Submission (Bound)";
    //     let policyResult = await kevPages.policyBound.component.innerText;
    //     console.log("result" + policyResult);
    //     await t.expect(policyResult).contains(policyBound);


    //}

    async InlandMarineClaimCreated(){
        


    }

    async verifyInlandMarineClaimIsCreated(){



    }

}