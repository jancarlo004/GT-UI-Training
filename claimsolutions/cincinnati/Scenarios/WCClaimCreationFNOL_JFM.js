import { t } from "testcafe";
import { WCClaimCreationFNOLPages_JFM } from "../ScenarioPages/WCClaimCreationFNOLPages_JFM";
import { ClaimTabBar } from "../../pages/navigation/tabBar/ClaimTabBar";
import { FNOLWizard } from "../../pages/claim/FNOLWizard";
import world from "../utils/world";
import { Helper } from "../utils/helpers";

const wcClaimCreationFNOLPages = new WCClaimCreationFNOLPages_JFM();
const claimTabBar = new ClaimTabBar();
const fNOLWizard = new FNOLWizard();
const helper = new Helper();

export class WCClaimCreationFNOL{
    async claimCreationFNOL(){
        //Start New Claim
        await wcClaimCreationFNOLPages.newClaim();

        //Step 1: Search or Create Policy
        await wcClaimCreationFNOLPages.searchOrCreatePolicy("Sample WorkersComp", "09/04/2022");
        await fNOLWizard.fNOLWizardNext.click();

        //Step 2 of 4: Basic information
        await fNOLWizard.fNOLWizard_BasicInfoScreenClaim_LocationCode.selectNthOption(1);
        await wcClaimCreationFNOLPages.addNewPerson();
        await fNOLWizard.fNOLWizard_BasicInfoScreenClaim_ReportedByType.selectOptionByLabel("Employee");
        await wcClaimCreationFNOLPages.addInjuredWorker();
        await fNOLWizard.fNOLWizardNext.click();

        //Step 3 of 4: Step 3 of 4: Add claim information
        await helper.radioButtonSelect(fNOLWizard.fNOLWizard_NewLossDetailsScreenInjurySeverity_TimeLossReport, "No");
        await helper.dateAndTime('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-DateReportedtoEmployer', "09/04/2022", "12:00")       
    }
}