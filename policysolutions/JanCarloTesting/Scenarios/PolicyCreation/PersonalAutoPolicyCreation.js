import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions";
import { NewSubmission } from "../../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/other/NewSubmission";
import { OfferingScreen } from "../ScenarioPages/OfferingScreen";
import { NewSubmissionWizard } from "../ScenarioPages/NewSubmissionWizard";
import { DriverScreen } from "../ScenarioPages/DriverScreen";
import { VehicleScreen } from "../ScenarioPages/VehicleScreen";
import { QuoteScreen } from "../ScenarioPages/QuoteScreen";
import { t } from "testcafe";
import world from "../../util/world";
import { PcfButton, PcfCheckBox, PcfComponent } from "@gtui/gt-ui-framework";

const accountMenuActions = new AccountMenuActions();
const newSubmission = new NewSubmission();
const offeringScreen = new OfferingScreen();
const newSubmissionWizard = new NewSubmissionWizard();
const driverScreen = new DriverScreen();
const vehicleScreen = new VehicleScreen();
const quoteScreen = new QuoteScreen();

export class PersonalAutoPolicyCreation{

    async personalAutoPolicyCreation(){

        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.clickOnCell(6,0);
        await t.wait(2000);

        await offeringScreen.offeringSelection.selectOptionByLabel("Basic Program");
        await newSubmissionWizard.newSubmissionNextButton.click();
        await t.wait(1000);
        await newSubmissionWizard.newSubmissionNextButton.click();
        await newSubmissionWizard.newSubmissionNextButton.click();
        await t.wait(1000);
        await driverScreen.SelectExistingDriver();
        await t.wait(2000);
        await driverScreen.dateOfBirth.setValue("08/04/1990");
        await driverScreen.licenseNumber.setValue("D05129922");
        await driverScreen.licenseState.selectOptionByLabel("Arizona");
        await driverScreen.rolesTab.click();
        await t.wait(2000);
        await driverScreen.licenseYear.setValue("2010");
        await t.wait(1000);
        await driverScreen.numberOfAccidentPolicyLevel.selectOptionByLabel("0");
        await driverScreen.numberOfAccidentAccountLevel.selectOptionByLabel("0");
        await driverScreen.numberOfViolationsPolicyLevel.selectOptionByLabel("0");
        await driverScreen.numberOfViolationsAccountLevel.selectOptionByLabel("0");
        await newSubmissionWizard.newSubmissionNextButton.click();

        await vehicleScreen.createVehicleButton.click();
        await vehicleScreen.vehicleVin.setValue("5TBJT32166S477646");
        await t.pressKey('tab');
        await vehicleScreen.costNew.setValue("10000");
        await vehicleScreen.licenseState.selectOptionByLabel("Arizona");
        await vehicleScreen.vehicleDriverAssignment.click();
        await vehicleScreen.existingDriver.click();
        await newSubmissionWizard.newSubmissionNextButton.click();
        await newSubmissionWizard.quoteButton.click();

        await quoteScreen.bindOptionsButton.click();
        await quoteScreen.issuePolicyButton.click();
        await quoteScreen.viewPolicy.click();
        await t.wait(2000);
        world.policyNumber = await quoteScreen.policyNum.component.innerText;
    }

    async verifypolicyIssued(){
        let policyBound = "Submission (Bound)";
        
        await t.expect(await quoteScreen.policyStatus.component.innerText).contains(policyBound);
    }
    async test(){
        let collision = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-0-item-0-item");
        let coverage = collision.component.child();
        let covType = coverage.component.parent();

        await t.hover(covType);
        await t.hover(coverage);
        await t.click(collision);
    }
}
   
 