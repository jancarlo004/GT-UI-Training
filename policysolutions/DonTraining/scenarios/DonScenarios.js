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
        await donPages.selectAddExistingDriver();
        await donPages.AddDateOfBirth.setValue ("08/03/1993");
        await donPages.InputLicense.setValue("D123456789");
        await donPages.SelectLicenseStateDriver.selectOptionByLabel("California");
        await donPages.SelectRolesTab.click();
        await donPages.AccidentsPolicy.selectOptionByValue ("0");
        await donPages.AccidentsAccount.selectOptionByLabel ("0");
        await donPages.ViolationsPolicy.selectOptionByLabel ("0");
        await donPages.ViolationsAccount.selectOptionByLabel ("0")
        await donPages.InputYearFirstLicensed.setValue("2005");
        await donPages.newSelectNext.click();
        await donPages.CreateVehicle.click();
        await donPages.InputVin.setValue ("M1234567890");
        await t.pressKey("tab");
        await donPages.SelectLicenseStateVehicle.selectOptionByLabel("California");
        await donPages.InputCostNew.setValue("2000");
        await donPages.SelectPrimaryUse.selectOptionByLabel("Business");
        await donPages.AddDriverToQuote.click();
        await donPages.AddDriverOnVehicle("Don Campilla");
        await donPages.newSelectNext.click();
        await donPages.newSelectNext.click();
        await donPages.newSelectNext.click();
        await donPages.QuoteSubmission.click();
        await donPages.bindPolicy.click();
        await donPages.issuePolicy("Issue Policy");
        await t.debug();
        
    }
}