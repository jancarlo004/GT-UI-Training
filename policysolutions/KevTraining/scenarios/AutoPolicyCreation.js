'use strict'
import { AutoPolicyPages } from "../pages/account/AutoPolicyPages"
import { t } from "testcafe"
import { DriversAndVehiclesPages } from "../../KevTraining/pages/account/DriversAndVehiclesPages";
import world from "../utils/world";
import { ClaimPages } from "../pages/account/Claimpages";

const autoPolicyPages = new AutoPolicyPages();
const driversAndVehiclesPages = new DriversAndVehiclesPages();
const claimpages = new ClaimPages();

export class AutoPolicyCreation{

async CreateAutoPolicyWith3DriversAnd3Vehicles (){
    await autoPolicyPages.newSubmission.click();
    await autoPolicyPages.newSubmissionButton.click();
    await autoPolicyPages.lineOfBusinessLV.clickOnCell(6,0);
    await autoPolicyPages.offeringSelection.selectOptionByLabel("Premium Program");
    await autoPolicyPages.nextButton.click();
    //PA Pre-Qualification
    await autoPolicyPages.isTheApplicantCurrentlyInsured.selectOptionByLabel("No - New Driver");
    await autoPolicyPages.nextButton.click();
    //Policy Info
    await autoPolicyPages.nextButton.click();
    //Drivers Screen
    await driversAndVehiclesPages.clickExistingDriver();
    await t.wait(2000);
    await driversAndVehiclesPages.addNewDriver();
    await t.wait(2000);
    await autoPolicyPages.nextButton.click();
    //Vehicle Details
    await driversAndVehiclesPages.addNewVehicle();
    await autoPolicyPages.nextButton.click(); 

    //PA Coverages
    await autoPolicyPages.nextButton.click(); 

    //Risk Analysis
    await autoPolicyPages.nextButton.click();

    //Policy Review
    await autoPolicyPages.quoteButton.click();
    await t.wait(4000);
    // await autoPolicyPages.approveButtonUW();
    // await autoPolicyPages.clickIssuePolicy();
   

    //Quotepage
    await autoPolicyPages.clickBindOnly();
    world.policyNumber = await autoPolicyPages.policyNumber.component.find('.gw-infoValue').innerText;
    console.log("Policy Number:" + world.policyNumber);
 }

async VerifyAutoIsBound (){
    //Bound
    let PAPolicyBound = "Submission Bound";
    let PAPolicyResult = await autoPolicyPages.submissionBoundInnerText.component.innerText;
    console.log("Result:" + PAPolicyResult);
    await t.expect(PAPolicyResult).contains(PAPolicyBound);
}

async VerifyAutoIsCreatedInClaim(){
    await claimpages.claimTab.click();
    await t.click(claimpages.claimTab.component.find('div.gw-action--expand-button'));
    await claimpages.newClaimButton.click();

    //Step 1 of 5: Search or Create Policy
    await claimpages.policyNumberTextField.setValue(world.policyNumber);
    await claimpages.searchButton.click();
    await claimpages.lossDate.setValue("08/24/2022");
    await claimpages.nextButton.click();

    //Step 2 of 5: Basic Information
    await claimpages.nameClaim.selectOptionByLabel(world.accountName);
    await t.wait(3000);
    await claimpages.nextButton.click();

    //Step 3 of 5: Add Claim information
    await claimpages.lossCause.selectOptionByLabel("Animal");
    await claimpages.claimLocation.selectFirstOption();
    await t.wait(2000);
    await claimpages.nextButton.click();

    //Step 4 of 5: Services
    await t.wait(4000);
    await claimpages.claimLevelServicesCheckbox.click();
    await claimpages.nextButton.click();
    await t.wait(4000);

    //Step 5 of 5: Save and Assign Claim
    await claimpages.newExposureButton.click();
    await claimpages.selectExposure("Policy Level Coverage","Liability - Bodily Injury and Property Damage","Liability - Bodily Injury");
    await claimpages.claimant.selectOptionByLabel(world.accountName);
    await claimpages.injury.click();
    await claimpages.newIncident.click();
    await t.wait(3000);
    await claimpages.lossParty.selectOptionByLabel("Insured's loss");
    await claimpages.okInjury.click();
    await claimpages.okExposure.click();
    await t.wait(3000);
    await claimpages.finishButton.click();
    world.claimNumber = await claimpages.newClaimSavedHeader.component.find('.gw-label').innerText;
    let subStringTest =  world.claimNumber.substring(6, 19);
    console.log("Claim Number:"  + subStringTest);
}

async VerifyIfClaimIsSaved(){
    let ClaimSaved = "New Claim Saved";
    let ClaimSavedResult = await claimpages.newClaimSavedInnerText.component.innerText;
    console.log("Result:" + ClaimSavedResult);
    await t.expect(ClaimSavedResult).contains(ClaimSaved);
    await t.wait(3000);

}
}

        
 
