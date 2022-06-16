import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions";
import { NewSubmission } from "../../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/other/NewSubmission";
import { OfferingScreen } from "../ScenarioPages/OfferingScreen";
import { NewSubmissionWizard } from "../ScenarioPages/NewSubmissionWizard";
import { DriverScreen } from "../ScenarioPages/DriverScreen";
import { VehicleScreen } from "../ScenarioPages/VehicleScreen";
import { QuoteScreen } from "../ScenarioPages/QuoteScreen";
import { t } from "testcafe";
import world from "../../util/world";
import { PcfButton, PcfComponent, PcfListView } from "@gtui/gt-ui-framework";
import { CoverageScreen } from "../ScenarioPages/CoverageScreen";

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
        await this.selectAutoLOB("Personal Auto");
        await t.wait(2000);

        await offeringScreen.offeringSelection.selectOptionByLabel("Basic Program");
        await newSubmissionWizard.newSubmissionNextButton.click();
        await t.wait(1000);
        await newSubmissionWizard.newSubmissionNextButton.click();
        await newSubmissionWizard.newSubmissionNextButton.click();
        await t.wait(1000);
        await driverScreen.SelectExistingDriver();
        await t.wait(2000);
        console.log("Test");
        let drivers = [];
        for(let i=0; i< await driverScreen.driverListView.rowCount(); i++){
             drivers[i] = await driverScreen.driverListView.getTextFromCellByColumnName(i,"Name");
             console.log(drivers[i]);
         }
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
        world.policyNumber = await quoteScreen.policyNumberLabel.component.find('.gw-infoValue').innerText;
       
    }

    async selectAutoLOB(lob){
        let personalAutoLabel = driverScreen.lobListView.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = personalAutoLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }

    async verifypolicyIssued(){
        let policyBound = "Submission (Bound)";
        
        await t.expect(await quoteScreen.policyStatus.component.innerText).contains(policyBound);
    }
}

