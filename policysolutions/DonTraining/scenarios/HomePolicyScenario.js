import { t } from "testcafe";
import {HomePolicyPages} from "../../DonTraining/pages/HomePolicyPages";
const homepolicypages = new HomePolicyPages();
export class HomePolicyScenario{
    async createHomePolicy(){
        await homepolicypages.accountMenuActions.click();
        await homepolicypages.newSubmission.click();
        await homepolicypages.selectHomeLOB("Homeowners");
        await homepolicypages.policyType.selectOptionByLabel("Dwelling");
        await homepolicypages.coverageForm.selectOptionByValue("ho2");
        await homepolicypages.choiceDwelling.selectOptionByValue("Myself");
        await t.wait(2000);
        await homepolicypages.yesRadioButton.click();
        await homepolicypages.nextButton.click();
        await homepolicypages.inputSSN.setValue("666548430");
        await homepolicypages.nextButton.click();
        await homepolicypages.fireProtectionClass.selectOptionByLabel("Superior")
        await t.wait(2000);
        await homepolicypages.nextButton.click();
        await homepolicypages.wiringType.selectOptionByLabel("Copper");
        await homepolicypages.wiringDate.setValue("2005");
        await homepolicypages.nextButton.click();
        await homepolicypages.coinsurance.selectOptionByLabel("50%");
        await homepolicypages.lossOfRentalIncomeNo.click();
        await homepolicypages.prohibitedUse.selectOptionByLabel("14 Days");
        await t.wait(3000);
        await homepolicypages.nextButton.click();
        await t.wait(2000);
        await homepolicypages.nextButton.click();
        await t.wait(2000);
        await homepolicypages.nextButton.click();
        await homepolicypages.quoteButton.click();
        await homepolicypages.bindPolicy.click();
        await homepolicypages.issuePolicy("Issue Policy");
        await t.debug();
        



        

        
       


        
    }

}