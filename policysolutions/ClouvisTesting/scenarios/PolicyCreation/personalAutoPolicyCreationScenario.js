'use strict';
import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions"
import { NewSubmission } from "../../../pages/other/NewSubmission"
import { OfferingScreen } from "../../../pages/other/OfferingScreen"
import { NextSubmissionWizard } from "../../../pages/navigation/submissionWizard/NextSubmissionWizard"
import { PersonalAuto } from "../../../pages/lOBWizardStepGroup/PersonalAuto"
import { AddExistingDriver } from "../../../pages/other/AddExistingDriver"
import { AddVehicle } from "../../../pages/other/AddVehicle"
import { QuoteScreen } from "../../../pages/other/QuoteScreen"
import { PaymentScreen } from "../../../pages/other/PaymentScreen";
import { NewAdditionalInsured } from "../../../pages/other/NewAddionalInsured";
import { PolicyMenuLinks } from "../../../../ignite/previousGeneratedOutput/classFiles/PolicySolutions/pages/navigation/menuLinks/PolicyMenuLinks";
import { DriverDetailsRoleTab } from "../../../pages/other/DriverDetailsRoleTab";
import { Contacts } from "../../../../ignite/previousGeneratedOutput/classFiles/PolicySolutions/pages/policy/Contacts";

import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen";
import world from "../../utils/world";
import { DriverScreen } from "../ScenarioPages/DriverScreen";

const accountMenuActions = new AccountMenuActions();
const newSubmission = new NewSubmission();
const offeringScreen = new OfferingScreen();
const nextSubmissionWizard = new NextSubmissionWizard();
const personalAuto = new PersonalAuto();
const addExistingDriver = new AddExistingDriver();
const addVehicle = new AddVehicle();
const quoteScreen = new QuoteScreen();
const paymentScreen = new PaymentScreen();
const newAdditionalInsured = new NewAdditionalInsured();
const policyMenuLinks = new PolicyMenuLinks();
const driverDetailsRoleTab = new DriverDetailsRoleTab();
const contacts = new Contacts();
const policyInfoScreen = new PolicyInfoScreen();
const driverScreen = new DriverScreen();

export class PersonalAutoPolicyCreationScenario{

    async createPersonalAutoPolicy(){
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await t.wait(1000);
        await this.selectAutoLOB("Personal Auto");
        await t.wait(1000);
        await offeringScreen.selectofferingSelection("Standard Program");
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();

        //await this.addOtherContact();
        await nextSubmissionWizard.submissionWizardNext.click();

        //put method of add new driver
        
        await this.addNewDriver();
        await t.debug();

        //await addExistingDriver.selectExistingDriver();
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue("08041990")
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("D04753290");
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByLabel("Arizona");       
        await personalAuto.driverDetailsCVRolesCardTab.click();
        
        await driverDetailsRoleTab.yearFirstLicensed.setValue("2001");
        await driverDetailsRoleTab.numOfAccident_AccountLevel.selectOptionByLabel("0");
        await driverDetailsRoleTab.numOfAccident_PolicyLevel.selectOptionByLabel("0");
        await driverDetailsRoleTab.numOfViolation_AccountLevel.selectOptionByLabel("0");
        await driverDetailsRoleTab.numOfViolation_PolicyLevel.selectOptionByLabel("0");
        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAuto.vehiclesListDetailPanel_tbAdd.click();
        await t.wait(1000);
        await personalAuto.personalAuto_VehicleDVVin_DV.setValue("1GCRCSE01BZ383562");
        await t.pressKey('tab');
        await t.wait(1000);
        await personalAuto.personalAuto_VehicleDVLicenseState_DV.selectOptionByLabel("Arizona");
        await personalAuto.personalAuto_VehicleDVCostNew_DV.setValue("1000");
        await addVehicle.selectFirstDriver();
        await t.wait(1000);

        

        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPersonalAutoScreenJobWizardToolbarButtonSetQuoteTypeToolbarButtonSetQuote.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await paymentScreen.bindOptionsButton.click();
        await paymentScreen.issuePolicyButton.click();
        await t.wait(1000);
    }

    async selectAutoLOB(lob){
        let productLabel = newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let productSelection = productLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]'); 
        await t.click(productSelection);
    }

    async issuedPersonalAutoPolicy(){
        let issuedPolicy = "Submission (Bound)"; 
        await t.expect(await quoteScreen.jobLabel.component.innerText).contains(issuedPolicy);
        
    }

    async addOtherContact(){
        await policyInfoScreen.namedInsuredsLV_tbAddContactsButton.click();
        await t.hover(policyInfoScreen.submissionWizardLOBWizardStepGroupSubmissionWizard_PolicyInfoScreenSubmissionWizard_PolicyInfoDVAdditionalNamedInsuredInputSetNamedInsuredsLV_tbAddContactsButtonAddOtherContact.component.find('div.gw-action--expand-button'));
        await policyInfoScreen.selectFirstAdditionalInsured.click();
    } 

    async addNewDriver() {

        for(let i=0; i<world.vehicleVin.length;i++){
            await personalAuto.driversLV_tbAddDriver.click();
            await driverScreen.addNewPerson.click();
            await t.wait(1000);
            await driverScreen.firstName.setValue(world.driverFirstName[i]);
            await driverScreen.lastName.setValue(world.driverLastName[i]);
            await driverScreen.dateOfBirth.setValue(world.dateOfBirth[i]);
            await driverScreen.maritalStatus.selectOptionByLabel(world.maritalStatus[i]);
            await driverScreen.addressLine.setValue(world.addressLine[i]);
            await driverScreen.state.selectOptionByLabel(world.state[i]);
            await t.pressKey('tab');
            await driverScreen.addressTypesss.selectOptionByLabel(world.addressType[i]);
            await driverScreen.licenseNumber.setValue(world.licenseNumber[i]);
            await driverScreen.licenseStateForNewDrivers.selectOptionByLabel(world.licenseState[i]);
            await driverScreen.okButtonsss.click();
            await t.wait(1000);
            await driverScreen.rolesTab.click();
            await driverScreen.yearFirstLicensedNewPerson.setValue(world.yearLicensed[i]);
            await driverScreen.numberOfAccidentPolicyLevelNewPerson.selectOptionByLabel(world.numberOfAccidentsPolicyLevel[i]);
            await driverScreen.numberOfViolationPolicyLevelNewPerson.selectOptionByLabel(world.numberOfViolationsPolicyLevel[i]);
            await driverScreen.numberOfAccidentAccountLevelNewPerson.selectOptionByLabel(world.numberOfAccidentsAccountLevel[i]);
            await driverScreen.numberOfViolationAccountLevelNewPerson.selectOptionByLabel(world.numberOfViolationsAccountLevel[i]);
            await driverScreen.addMVR();
            await driverScreen.storeDriverName();

        }

    }

}