import { t } from "testcafe";
import { InlandmarinePolicyPages } from "../pages/InlandMarinePolicyPages";
const inlandmarinepolicypages = new InlandmarinePolicyPages();

export class InlandMarinePolicyScenario{
    async createInlandMarinePolicy(){
        // Policy Info For Inland Marine
        await inlandmarinepolicypages.accountMenuActions.click();
        await inlandmarinepolicypages.newSubmission.click();
        await inlandmarinepolicypages.selectInlandMarineLOB("Inland Marine");
        await inlandmarinepolicypages.organizationType.selectOptionByValue("commonownership");
        await inlandmarinepolicypages.additionalInsured.click();
        await inlandmarinepolicypages.newPerson.click();
        await inlandmarinepolicypages.addInsuredFirstName.setValue("Wiz");
        await inlandmarinepolicypages.addInsuredLastname.setValue("Khalifa");
        await inlandmarinepolicypages.addInsuredBirthdate.setValue("01/26/2016");
        await inlandmarinepolicypages.addInsuredMaritalStatus.selectOptionByValue("S");
        await inlandmarinepolicypages.addInsuredPrimaryPhone.selectOptionByValue("work");
        await inlandmarinepolicypages.addInsuredWorkPhone.setValue("512-228-0233");
        await inlandmarinepolicypages.addInsuredAddressLine1.setValue("251 W 11TH AVE");
        await inlandmarinepolicypages.addInsuredZipCode.setValue("85210");
        await t.pressKey("tab");
        await inlandmarinepolicypages.addInsuredState.selectOptionByValue("AZ");
        await inlandmarinepolicypages.addInsuredAddressType.selectOptionByValue("billing");
        await inlandmarinepolicypages.addInsuredAddressDesc.setValue("Current Address");
        await inlandmarinepolicypages.addInsuredLicenseNumber.setValue("D00477159");
        await inlandmarinepolicypages.addInsuredLicenseState.selectOptionByValue("AZ");
        await inlandmarinepolicypages.addInsuredSSN.setValue("666410172");
        await inlandmarinepolicypages.okButton.click();
        await inlandmarinepolicypages.addedNamedInsureds.click();
        await inlandmarinepolicypages.addInsuredRolesTab.click();
        await inlandmarinepolicypages.addInsuredRelationToPrimary.setValue("Friend");
        await inlandmarinepolicypages.editInsuredOkButton.click();
        await inlandmarinepolicypages.nextButton.click();
        // Coverage Part Selection
        await inlandmarinepolicypages.addCoveragePart.click();
        await inlandmarinepolicypages.accountsReceivable.click();
        await inlandmarinepolicypages.nextButton.click();
        await t.wait(2000);
        // Buildings and Locations
        await inlandmarinepolicypages.addExistingBuilding();
        await inlandmarinepolicypages.buildingDescription.setValue("Building Test");
        await inlandmarinepolicypages.okButtonNewBuilding.click();
        await inlandmarinepolicypages.nextButton.click();
        // Accounts Receivable
        await inlandmarinepolicypages.noReporting.click();
        await inlandmarinepolicypages.businessClass.selectOptionByValue("manufacturer");
        await inlandmarinepolicypages.coinsurancePct.selectOptionByValue("80");
        await inlandmarinepolicypages.addAccountsReceivable.click();
        await inlandmarinepolicypages.locAndBuilding.selectOptionByLabel("1: 250 W 10th AVE, Phoenix, AZ / 1: Building Test");
        await inlandmarinepolicypages.receptacleType.selectOptionByValue("ULClassA");
        await inlandmarinepolicypages.percentDuplicated.selectOptionByValue("50minus");
        await inlandmarinepolicypages.limit.setValue("5000");
        await inlandmarinepolicypages.nextButton.click();
        await t.wait(3000);
        await inlandmarinepolicypages.nextButton.click();
        await t.wait(3000);
        await inlandmarinepolicypages.quoteSubmission.click();
        await inlandmarinepolicypages.bindPolicy.click();
        await inlandmarinepolicypages.issuePolicy("Issue Policy");
        await t.debug();





        

        




        await t.debug();
    }
}