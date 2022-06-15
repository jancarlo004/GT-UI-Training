'use strict'
import { AutoPolicyPages } from "../pages/account/AutoPolicyPages"
import { t } from "testcafe"
import { PcfComponent } from "@gtui/gt-ui-framework";

const autoPolicyPages = new AutoPolicyPages();


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
    
    // Driver 1:
    await autoPolicyPages.addDriverButton.click();
    await autoPolicyPages.clickExistingDriver();
    await autoPolicyPages.licenseNumber.setValue("666618699");
    await autoPolicyPages.licenseState.selectOptionByLabel("Arizona");
    await autoPolicyPages.rolesTab.click();
    await autoPolicyPages.yearFirstLicensed.setValue("2001");
    await autoPolicyPages.numOfAccidents.selectOptionByLabel("0");
    await autoPolicyPages.numOfViolations.selectOptionByLabel("0");
    await autoPolicyPages.numOfAccidents2.selectOptionByLabel("0");
    await autoPolicyPages.numOfViolations2.selectOptionByLabel("0");

    // Driver 2:
    await autoPolicyPages.addDriverButton.click();
    await autoPolicyPages.newPersonButton.click();
    await autoPolicyPages.newDriverFirstName.setValue("Mocca");
    await autoPolicyPages.newDriverLastName.setValue("Cake");
    await autoPolicyPages.newDriverAddress1.setValue("Amazon");
    await autoPolicyPages.newDriverState.selectOptionByLabel("Arizona");
    await autoPolicyPages.newDriverAddressType.selectOptionByLabel("Billing");
    await autoPolicyPages.newLicenseNumber.setValue("666618699");
    await autoPolicyPages.newLicenseState.selectOptionByLabel("Arizona");
    await autoPolicyPages.okButton.click();
    await autoPolicyPages.rolesTab.click();
    await autoPolicyPages.yearFirstLicensedDrivers.setValue("2002");
    await autoPolicyPages.newNumOfAccidents.selectOptionByLabel("0");
    await autoPolicyPages.newNumOfViolations.selectOptionByLabel("0");
    await autoPolicyPages.newNumOfAccidents2.selectOptionByLabel("0");
    await autoPolicyPages.newNumOfViolations2.selectOptionByLabel("0");

    // Driver 3:
    await autoPolicyPages.addDriverButton.click();
    await autoPolicyPages.newPersonButton.click();
    await autoPolicyPages.newDriverFirstName.setValue("Choco");
    await autoPolicyPages.newDriverLastName.setValue("Cake");
    await autoPolicyPages.newDriverAddress1.setValue("Amazon");
    await autoPolicyPages.newDriverState.selectOptionByLabel("Arizona");
    await autoPolicyPages.newDriverAddressType.selectOptionByLabel("Billing");
    await autoPolicyPages.newLicenseNumber.setValue("666618690");
    await autoPolicyPages.newLicenseState.selectOptionByLabel("Arizona");
    await autoPolicyPages.okButton.click();
    await autoPolicyPages.rolesTab.click();
    await autoPolicyPages.yearFirstLicensedDrivers.setValue("2003");
    await autoPolicyPages.newNumOfAccidents.selectOptionByLabel("0");
    await autoPolicyPages.newNumOfViolations.selectOptionByLabel("0");
    await autoPolicyPages.newNumOfAccidents2.selectOptionByLabel("0");
    await autoPolicyPages.newNumOfViolations2.selectOptionByLabel("0");
    await autoPolicyPages.nextButton.click();

    


     }
         


    async VerifyAutoIsBound (){

    
    }
}

        
 
