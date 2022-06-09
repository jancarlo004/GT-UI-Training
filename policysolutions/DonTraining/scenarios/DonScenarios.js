import { t } from "testcafe";
import { DonPages } from "../pages/DonPages";

const donPages = new DonPages();

export class DonScenarios {
    async customPersonalAccountCreation() {
        await donPages.accountClickExpandButton();
        await donPages.newAccountButton.click();
        await donPages.newAccountFirstName.setValue("Don");
        await donPages.newAccountLastName.setValue("Campilla");
        await donPages.newAccountSearch.click();
        await donPages.newAccountCreate.click();
        await donPages.newAccountPerson.click();
        await donPages.newAccountAddress.setValue("123 West Ave")
        await donPages.newAccountZip.setValue("92101");
        await t.pressKey("tab");
        await donPages.newAccountAddressType.selectOptionByLabel("Billing");
        await donPages.newAccountProducerCode.selectOptionByLabel ("501-002552 Allrisk Insurance");
        await donPages.newAccountUpdateButton.click();
        await donPages.newSubmission.click();
        await donPages.newSelectProduct.click();
        await donPages.newSelectOffering.selectOptionByLabel("Basic Program");
        await donPages.newSelectNext.click();
        await donPages.newSelectPreQualification.selectOptionByLabel("No - New Driver");
        await donPages.newSelectNext.click();
        await donPages.newSelectNext.click();
        await donPages.selectaddExistingDriver();
        await donPages.addDateOfBirth.setValue ("08/03/1993");
        await donPages.inputLicense.setValue("D123456789");
        await donPages.selectLicenseStateDriver.selectOptionByLabel("California");
        await donPages.selectRolesTab.click();
        await donPages.accidentsPolicy.selectOptionByValue ("0");
        await donPages.accidentsAccount.selectOptionByLabel ("0");
        await donPages.violationsPolicy.selectOptionByLabel ("0");
        await donPages.violationsAccount.selectOptionByLabel ("0")
        await donPages.inputYearFirstLicensed.setValue("2005");
        await donPages.newSelectNext.click();
        await donPages.createVehicle.click();
        await donPages.inputVin.setValue ("M1234567890");
        await t.pressKey("tab");
        await donPages.selectLicenseStateVehicle.selectOptionByLabel("California");
        await donPages.inputCostNew.setValue("2000");
        await donPages.selectPrimaryUse.selectOptionByLabel("Business");
        await donPages.addDriverToQuote.click();
        await donPages.addDriverOnVehicle("Don Campilla");
        await donPages.newSelectNext.click();
        await donPages.newSelectNext.click();
        await donPages.newSelectNext.click();
        await donPages.quoteSubmission.click();
        await donPages.bindPolicy.click();
        await donPages.issuePolicy("Issue Policy");
        await t.debug();
        
    }
}