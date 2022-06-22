import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions";
import { OfferingScreen } from "../ScenarioPages/OfferingScreen";
import { NewSubmissionWizard } from "../ScenarioPages/NewSubmissionWizard";
import { DriverScreen } from "../ScenarioPages/DriverScreen";
import { VehicleScreen } from "../ScenarioPages/VehicleScreen";
import { QuoteScreen } from "../ScenarioPages/QuoteScreen";
import { t } from "testcafe";
import world from "../../util/world";

const accountMenuActions = new AccountMenuActions();
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
        await driverScreen.createNewDriver();
        await newSubmissionWizard.newSubmissionNextButton.click();
        await t.wait(2000);
        await this.createNewVehicle();
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

    async createNewVehicle(){
        
        for(let i=0; i< world.drivers.length -1; i++){ 
            await vehicleScreen.createVehicleButton.click();
            await vehicleScreen.vehicleVin.setValue(world.newVehicleVin[i]);
            await vehicleScreen.costNew.setValue(world.costNew[i]);
            await vehicleScreen.licenseState.selectOptionByLabel(world.licenseStateInVehicle[i]);
            await vehicleScreen.vehicleDriverAssignment.click();
            let vehicleAssignedToDrivers =  vehicleScreen.vehicleDriverAssignment.component.find('.gw-subMenu').find('.gw-label').withText(world.drivers[i]);
            await t.click(vehicleAssignedToDrivers);

        }
    }
}

