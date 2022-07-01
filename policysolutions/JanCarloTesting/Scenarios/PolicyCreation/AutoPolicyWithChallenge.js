import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions";
import { DriverScreen } from "../ScenarioPages/DriverScreen";
import { OfferingScreen } from "../ScenarioPages/OfferingScreen";
import { NewSubmissionWizard } from "../ScenarioPages/NewSubmissionWizard";
import { AutoPolicyWithChallengePages } from "../ScenarioPages/AutoPolicyWithChallengePages";
import { QuoteScreen } from "../ScenarioPages/QuoteScreen";
import {t} from "testcafe";

const accountMenuActions = new AccountMenuActions();
const driverScreen = new DriverScreen();
const autoPolicyWithChallenge = new AutoPolicyWithChallengePages();

export class AutoPolicyWithChallenge{

    async autoPolicyCreation(){

        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();

        await autoPolicyWithChallenge.selectAutoLOB("Personal Auto");
        await t.wait(1000);

        await autoPolicyWithChallenge.selectInputOffering("Offering Selection", "Basic Program");
        await autoPolicyWithChallenge.offeringScreenNextButton("Next");
        await autoPolicyWithChallenge.qualificationScreenNextButton("Next");
        await autoPolicyWithChallenge.policyInfoScreenNextButton("Next");
        await t.wait(1000);

        await autoPolicyWithChallenge.SelectExistingDriver();
        await autoPolicyWithChallenge.createNewDriver("New Person");
        await autoPolicyWithChallenge.driverScreenNextButton("Next");
        await t.wait(1000);
        await autoPolicyWithChallenge.createNewVehicle();
        await autoPolicyWithChallenge.vehicleScreenNextButton("Next");
        await autoPolicyWithChallenge.coverageScreenNextButton("Quote");
        await autoPolicyWithChallenge.quoteScreenIssuePolicy("Bind Options");

    }
}