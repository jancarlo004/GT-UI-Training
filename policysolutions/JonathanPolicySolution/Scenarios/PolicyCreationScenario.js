import { t } from "testcafe";
import { PCUtils } from "../util/PCUtils";
import { CreateAutoPolicyScreen } from "../ScenarioPages/CreateAutoPolicyScreen";
import { CreateHomePolicyScreen } from "../ScenarioPages/CreateHomePolicyScreen";
import world from "../util/world";
import { CreateInlandMarinePolicyScreen } from "../ScenarioPages/CreateInlandMarinePolicyScreen";


const createAutoPolicyScreen = new CreateAutoPolicyScreen();
const createHomePolicyScreen = new CreateHomePolicyScreen();
const createInlandMarinePolicyScreen = new CreateInlandMarinePolicyScreen();
const pcUtils = new PCUtils();


export class PolicyCreationScenario{

    async createAutoPolicy(){
        await createAutoPolicyScreen.actionMenus.click();
        await createAutoPolicyScreen.newSubmissionMenu.click();

        await createAutoPolicyScreen.effectiveDate.setValue(await pcUtils.getDateForToday());
        await createAutoPolicyScreen.centerSection.click();
        await createAutoPolicyScreen.selectProduct("Personal Auto");

        //offerings
        await createAutoPolicyScreen.newSubmissionSelectedOffering.selectOptionByLabel("Basic Program");
        await createAutoPolicyScreen.newSubmissionNextButton.click();
 
        //qualifications
        await createAutoPolicyScreen.newSubmissionIsTheApplicantCurrentlyInsured.selectOptionByLabel("Yes");
        await createAutoPolicyScreen.newSubmissionNextButton.click();
 
        //policy info
        await createAutoPolicyScreen.newSubmissionNextButton.click();
 
        //add drivers
        await createAutoPolicyScreen.selectExistingDriver();
        await createAutoPolicyScreen.newSubmissionDob.setValue("05/01/1990");
        await createAutoPolicyScreen.centerSection.click();
        await createAutoPolicyScreen.newSubmissionMaritalStatus.selectOptionByLabel("Single");
        await createAutoPolicyScreen.newSubmissionMobilePhone.setValue("2011231231");
        await t.pressKey('tab');
        await createAutoPolicyScreen.newSubmissionPrimaryEmail.setValue("myemail@getMaxListeners.com");
        await createAutoPolicyScreen.newSubmissionLicenseNo.setValue("D08954796");
        await createAutoPolicyScreen.newSubmissionLicenseState.selectOptionByLabel("Arizona");
        await createAutoPolicyScreen.newSubmissionTabRoles.click();
        await createAutoPolicyScreen.newSubmissionYearFirstLicense.setValue("2020");
        await createAutoPolicyScreen.numOfAccident_AccountLevel.selectOptionByValue("0");
        await createAutoPolicyScreen.numOfAccident_PolicyLevel.selectOptionByValue("0");
        await createAutoPolicyScreen.numOfViolation_PolicyLevel.selectOptionByValue("0");
        await createAutoPolicyScreen.numOfViolation_AccountLevel.selectOptionByValue("0");
        await createAutoPolicyScreen.newSubmissionNextButton.click();
 
        //add vehicles
        await createAutoPolicyScreen.newSubmissionCreateVehicleButton.click();
        await createAutoPolicyScreen.newSubmissionVin.setValue("WBANE73527CM58653");
        await t.pressKey("tab");
        await createAutoPolicyScreen.newSubmissionVehicleLicenseState.selectOptionByLabel("Arizona");
        await createAutoPolicyScreen.newSubmissionCostNew.setValue("1000");
        await createAutoPolicyScreen.selectDriverToVehicle();
        await createAutoPolicyScreen.newSubmissionNextButton.click();

        //coverages
        await createAutoPolicyScreen.newSubmissionNextButton.click();
 
        //risk analysis
        await createAutoPolicyScreen.newSubmissionNextButton.click();
 
        //quote policy
        await createAutoPolicyScreen.newSubmissionQuoteButton.click();
 
        //issue policy
        await createAutoPolicyScreen.bindOptionsButton.click();
        await createAutoPolicyScreen.issuePolicyButton.click();
        world.policyNumber = await createAutoPolicyScreen.newPolicyNumber.component.find('.gw-infoValue').innerText;
    }

    async homePolicyCreation(){
        await createHomePolicyScreen.actionMenus.click();
        await createHomePolicyScreen.newSubmissionMenu.click();

        await createHomePolicyScreen.effectiveDate.setValue(await pcUtils.getDateForToday());
        await createHomePolicyScreen.centerSection.click();
        await createHomePolicyScreen.selectProduct("Homeowners");

        //qualification
        await createHomePolicyScreen.policyType.selectOptionByLabel("Dwelling");
        await createHomePolicyScreen.coverageForm.selectOptionByLabel("HO2");
        await createHomePolicyScreen.whoOccupiesDwelling.selectOptionByLabel("Myself");
        await createHomePolicyScreen.doYouOccupyDwellingFullTime("Do you occupy this dwelling full time?", "Yes");
        await createHomePolicyScreen.submissionNextButton.click();

        //policy info
        await createHomePolicyScreen.submissionNextButton.click();

        //dwelling
        await createHomePolicyScreen.fireProtectionClass.selectFirstOptionWithValue();
        await createHomePolicyScreen.submissionNextButton.click();

        //dwelling construction
        await createHomePolicyScreen.wiring.selectOptionByLabel("Copper");
        await createHomePolicyScreen.submissionNextButton.click();

        //coverage
        await createHomePolicyScreen.coinsurance.selectOptionByLabel("50%");
        await createHomePolicyScreen.rentalIcome.click();
        await createHomePolicyScreen.civilAuthority.selectFirstOptionWithValue();
        await createHomePolicyScreen.submissionNextButton.click();

        //modifier
        await createHomePolicyScreen.submissionNextButton.click();

        //risk analysis
        await createHomePolicyScreen.submissionNextButton.click();

        //quote to issue policy
        await createHomePolicyScreen.submissionQuoteButton.click();
        await createHomePolicyScreen.bindOptionsButton.click();
        await createHomePolicyScreen.issuePolicyButton.click();
        world.policyNumber = await createHomePolicyScreen.newPolicyNumber.component.find('.gw-infoValue').innerText;
    }


    async inlandMarinePolicyCreation(){
        let partSelectOptions = world.coveragePartSelectionOptions;

        await createInlandMarinePolicyScreen.actionMenus.click();
        await createInlandMarinePolicyScreen.newSubmissionMenu.click();
        await createInlandMarinePolicyScreen.effectiveDate.setValue(await pcUtils.getDateForToday());
        await createInlandMarinePolicyScreen.centerSection.click();
        await createInlandMarinePolicyScreen.selectProduct("Inland Marine");

        //policy info
        await createInlandMarinePolicyScreen.organizationType.selectOptionByLabel("Common ownership");
        await createInlandMarinePolicyScreen.submissionNextButton.click();

        //coverage part selection
        await createInlandMarinePolicyScreen.addCoveragePart();
        await createInlandMarinePolicyScreen.submissionNextButton.click();

        //buildings location
        await createInlandMarinePolicyScreen.addNewBuildingAction();
        await createInlandMarinePolicyScreen.submissionNextButton.click();

        //accounts receivable
        if(partSelectOptions.indexOf("Accounts Receivable") !== -1){
            await createInlandMarinePolicyScreen.accountReceivableScreen();
        }

        //contractors equipment
        if(partSelectOptions.indexOf("Contractors Equipment" !== -1)){
            await createInlandMarinePolicyScreen.contractorsEquipmentScreen();
        }

        //signs
    //     if(partSelectOptions.indexOf("Signs" !== -1)){
    //     await createInlandMarinePolicyScreen.signsScreen();
    //     await createInlandMarinePolicyScreen.submissionNextButton.click();
    //     await createInlandMarinePolicyScreen.submissionQuoteButton.click();
    //     await t.debug();
    // }

    }
}
