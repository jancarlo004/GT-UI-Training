import { t } from "testcafe";
import { QualificationScreen } from "../ScenarioPages/QualificationScreen";
import { DwellingConstructionScreen } from "../ScenarioPages/DwellingConstructionScreen";
import { CoverageScreen } from "../ScenarioPages/CoverageScreen";
import { NewSubmissionWizard } from "../ScenarioPages/NewSubmissionWizard";
import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions";
import { NewSubmission } from "../../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/other/NewSubmission";
import { QuoteScreen } from "../ScenarioPages/QuoteScreen";
import world from "../../util/world";

const accountMenuActions = new AccountMenuActions();
const qualificationScreen = new QualificationScreen();
const dwellingConstructionScreen = new DwellingConstructionScreen();
const coverageScreen = new CoverageScreen();
const newSubmissionWizard = new NewSubmissionWizard();
const newSubmission = new NewSubmission();
const quoteScreen = new QuoteScreen();

export class HomeOwnersPolicyCreation{
    async HomePolicyCreation(){

        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await this.selectHomeLOB("Homeowners")
        await t.wait(2000);

        await qualificationScreen.policytype.selectOptionByLabel("Dwelling");
        await qualificationScreen.coverageForm.selectOptionByLabel("HO2");
        await qualificationScreen.dwelling.selectOptionByLabel("Myself");
        await t.wait(1000);
        await qualificationScreen.dwellingFullTimeYesRadioButton.click();
        await qualificationScreen.nextButton.click();
        await t.wait(1000);
        await qualificationScreen.nextButton.click();
        await qualificationScreen.fireProtection.selectOptionByLabel("Standard");
        await qualificationScreen.nextButton.click();
        await t.wait(2000);

        await dwellingConstructionScreen.wiring.selectOptionByLabel("Copper");
        await dwellingConstructionScreen.wiringYear.setValue("2015");
        await qualificationScreen.nextButton.click();
        await t.wait(1000);

        await coverageScreen.coInsurance.selectOptionByLabel("50%");
        await coverageScreen.lossOfRental.click();
        await coverageScreen.civilAuthority.selectOptionByLabel("14 Days");
        await qualificationScreen.nextButton.click();
        await qualificationScreen.nextButton.click();
        await t.wait(1000);

        await newSubmissionWizard.quoteHome.click();

        await newSubmissionWizard.bindOptionsHome.click();
        await newSubmissionWizard.issueHomePolicy.click();
        world.policyNumber = await newSubmissionWizard.policyNumber.component.find('.gw-infoValue').innerText;
    }

    async selectHomeLOB(lob){
        let personalAutoLabel = coverageScreen.lobListView.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = personalAutoLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }

    async verifyHomePolicyCreation(){
        let policyBound = "Submission (Bound)";
        let policyStatusHome = await quoteScreen.policyStatusHome.component.innerText;
        console.log("Result " + policyStatusHome);
        await t.expect(policyStatusHome).contains(policyBound);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    }
}