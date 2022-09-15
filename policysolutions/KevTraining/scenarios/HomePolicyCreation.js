'use strict'
import { Kevpages } from "../pages/account/Kevpages";
import { t } from "testcafe"

const kevPages = new Kevpages();

export class HomePolicyCreation{
    constructor() {}

    async homePolicyCreation(){
        // New Submission
        await kevPages.actions.click();
        await kevPages.newSubmission.click();
        await kevPages.newSubmissionLV.clickOnCell(3,0); 
        await kevPages.policyType.selectOptionByLabel("Dwelling");
        await kevPages.coverageForm.selectOptionByLabel("HO2");
        await kevPages.whoOccupiesThisDwelling.selectOptionByLabel("Myself");
        await kevPages.radioButtonYes.click();
        await kevPages.submissionNext.click();
        await kevPages.addNamedInsured.click();
        await kevPages.newPerson.click();

        // Additonal Named Insured screen
        await kevPages.firstNameNew.setValue("Snoop");
        await kevPages.lastNameNew.setValue("Dogg");
        await kevPages.address1New.setValue("351 W 3RD");
        await kevPages.cityNew.setValue("STAKRON");
        await kevPages.zipNew.setValue("80720");
        await t.pressKey('tab');
        await kevPages.stateNew.selectOptionByLabel("Colorado");
        await kevPages.addressTypeNew.selectOptionByLabel("Home");
        await kevPages.okButton.click();
        await kevPages.submissionNext.click();

        // Dwelling screen
        await kevPages.swimmingPoolCheckBox.click();
        await kevPages.fireProtection.selectOptionByLabel("Superior");

    
        // Additional Interests and Insureds screen
        await kevPages.addInterestAndInsured.click();
        await kevPages.selectInterestsAndInsured();
        await kevPages.interestTypeDD.selectOptionByLabel("First Mortgagee");
        await kevPages.effectiveDate.setValue("05242022");
        await kevPages.expirationDate.setValue("05252022");
        await kevPages.descriptionOfInterest.setValue("test automation");
        await kevPages.certReqNo.click();
        await kevPages.contactNumber.setValue("1234567");
        await kevPages.submissionNext.click();
        await t.wait(2000);

        // Dwelling Construction
        await kevPages.wiring.selectOptionByLabel("Copper");
        await kevPages.submissionNext.click();

        // Coverages screen
        await kevPages.coinsurance.selectOptionByLabel("50%");
        await kevPages.lossOfRentalIncomeNo.click();
        await kevPages.puCivilAuthority.selectOptionByLabel("14 Days");
        await kevPages.submissionNext.click();

        // Modifiers screen
        await kevPages.professional.selectOptionByLabel("Software Professionals");
        await kevPages.loyalty.selectOptionByLabel("5 Years Plus");

        await kevPages.submissionNext.click();
        await kevPages.submissionNext.click();

        // Policy Review screen
        await kevPages.quouteButton.click();
        await t.wait(3000);

        // Quote screen
        await kevPages.bindOptions.click();
        await kevPages.issuePolicyButton.click();
        await t.wait(3000);
    }

    async verifyHomeIsBound(){
        let policyBound = "Submission (Bound)";
        let policyResult = await kevPages.policyBound.component.innerText;
        console.log("result " + policyResult);
        await t.expect(policyResult).contains(policyBound);
    }

}