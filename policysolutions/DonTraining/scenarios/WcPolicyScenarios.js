import { t } from "testcafe";
import {WcPolicyPages} from "../pages/WcPolicyPages";
const wcPolicyPages = new WcPolicyPages();

export class WcPolicyScenarios{
    async wccreation() {
        await wcPolicyPages.accountsMenuActions.click();
        await wcPolicyPages.newSubmission.click();
        await wcPolicyPages.selectWcLOB("Workers' Compensation");
        await wcPolicyPages.totalAnnualPayroll.setValue("10000");
        await wcPolicyPages.clickNext.click();
        await wcPolicyPages.ssn.setValue("526-27-1245");
        await wcPolicyPages.industryCode.setValue("0740");
        await wcPolicyPages.organizationType.selectOptionByValue("commonownership");
        await wcPolicyPages.clickNext.click();
        await wcPolicyPages.clickNext.click();
        await wcPolicyPages.addClass.click();
        await wcPolicyPages.governingLaw.selectOptionByLabel("State Act");
        await wcPolicyPages.location.selectOptionByLabel("1: 250 W 10th AVE, Phoenix, AZ");
        await wcPolicyPages.classCode.setValue("0005");
        await wcPolicyPages.basis.setValue("1000");
        await wcPolicyPages.clickNext.click();
        await wcPolicyPages.firstRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.secondRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.thirdRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.fourthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.fifthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.sixthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.seventhRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.eightRadio.selectRadioButtonByLabel("Yes");
        await wcPolicyPages.ninthRadio.selectRadioButtonByLabel("Yes");
        await wcPolicyPages.tenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.eleventhRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.twelveRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.thirteenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.fourteenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.fifteenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.sixteenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.seventeenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.eigthteenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.nineteenthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.twentyRadio.selectRadioButtonByLabel("Yes");
        await wcPolicyPages.twentyFirstRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.twentySecondRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.twentyThirdRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.twentyFourthRadio.selectRadioButtonByLabel("No");
        await wcPolicyPages.clickNext.click();


















        
        




    }
    //async verifiedPolicy(){

    }
//}
