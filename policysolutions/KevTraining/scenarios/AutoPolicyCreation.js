'use strict'
import { AutoPolicyPages } from "../pages/account/AutoPolicyPages"
import { t } from "testcafe"
import { PcfComponent } from "@gtui/gt-ui-framework";
import { world } from "../../KevTraining/utils/world";
import { DriversAndVehiclesPages } from "../../KevTraining/pages/account/DriversAndVehiclesPages";

const autoPolicyPages = new AutoPolicyPages();
const driversAndVehiclesPages = new DriversAndVehiclesPages();


export class AutoPolicyCreation{

async CreateAutoPolicyWith3DriversAnd3Vehicles (){
    await autoPolicyPages.newSubmission.click();
    await autoPolicyPages.newSubmissionButton.click();
    await autoPolicyPages.lineOfBusinessLV.clickOnCell(6,0);
    await autoPolicyPages.offeringSelection.selectOptionByLabel("Premium Program");
    await autoPolicyPages.nextButton.click();

    // PA Pre-Qualification
    await autoPolicyPages.isTheApplicantCurrentlyInsured.selectOptionByLabel("No - New Driver");
    await autoPolicyPages.nextButton.click();

    // Policy Info
    await autoPolicyPages.nextButton.click();
    
    // Drivers Screen
    await driversAndVehiclesPages.clickExistingDriver();
    await t.wait(2000);
    await driversAndVehiclesPages.addNewDriver();
    await t.wait(2000);
    await autoPolicyPages.nextButton.click();

    // Vehicle Details
    await autoPolicyPages.createVehicleButton.click();
    await autoPolicyPages.vin.setValue("1B7HF16Y21S207435");
    //await autoPolicyPages.vehicleLicensedState.selectOptionByLabel("Arizona");
    await autoPolicyPages.costNew.setValue("1000");
    await autoPolicyPages.assignDriverToVehicle.click();
    // let driver = autoPolicyPages.assignDriverToVehicle.component.find('div.gw-subMenu gw-open').find('div.gw-label').withText(insuredName);
    // await t.click(driver);
        

 }
         


    async VerifyAutoIsBound (){

    
    }
}

        
 
