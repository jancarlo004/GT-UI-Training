import { t } from "testcafe";
import { AutoPolicyPages } from "../pages/AutoPolicyPages";
const autopolicypages = new AutoPolicyPages();
export class AutoPolicyScenario{
    async createAutoPolicy(){
        await autopolicypages.accountMenuActions.click();
        await autopolicypages.newSubmission.click();
        await autopolicypages.selectAutoLOB("Personal Auto")
        await autopolicypages.offeringSelection.selectOptionByLabel("Basic Program");
        await autopolicypages.nextButton.click();
        await autopolicypages.preQualification.selectOptionByLabel("No - New Driver")
        await autopolicypages.nextButton.click();
        await autopolicypages.nextButton.click();
        await autopolicypages.selectAddExistingDriver();
        await autopolicypages.dateOfBirth.setValue("08/03/1993");
        await autopolicypages.maritalStatus.selectOptionByLabel("Single");
        await autopolicypages.primaryPhone.selectOptionByLabel("Work");
        await autopolicypages.workPhone.setValue("201-555-0123");
        await autopolicypages.licenseNumber.setValue("D05129922");
        await autopolicypages.licenseState.selectOptionByLabel("Arizona");
        await autopolicypages.ssn.setValue("666548430");
        await autopolicypages.rolesTab.click();
        await t.wait(2000);
        await autopolicypages.yearFirstLicensed.setValue("2000");
        await autopolicypages.accidentsPolicy.selectOptionByValue("0");
        await autopolicypages.accidentsAccount.selectOptionByValue("0");
        await autopolicypages.violationsPolicy.selectOptionByValue("0");
        await autopolicypages.violationsAcccount.selectOptionByValue("0");
        await autopolicypages.nextButton.click();
        await autopolicypages.createVehicle.click();
        await autopolicypages.inputVin.setValue("WBADN6343YGM66672");
        await t.pressKey("tab");
        await autopolicypages.licenseStateVehicles.selectOptionByLabel("Arizona");
        await autopolicypages.costNew.setValue("5000");
        await autopolicypages.primaryUse.selectOptionByLabel("Business");
        await autopolicypages.addDriverButton.click();
        await autopolicypages.addDriverOnVehicle("Elina Snow");
        await autopolicypages.nextButton.click();
        await t.wait(1000);
        await autopolicypages.nextButton.click();
        await t.wait(1000);
        await autopolicypages.nextButton.click();
        await t.wait(1000);
        await autopolicypages.quoteButton.click();
        await autopolicypages.bindPolicy.click();
        await autopolicypages.issuePolicy("Issue Policy");
        await t.debug();







        




    }
    
}