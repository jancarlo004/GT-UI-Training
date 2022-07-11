'use strict'
import { Kevpages } from "../pages/account/Kevpages";
import { t } from "testcafe";
import { AutoDVPracticePages } from "../../KevTraining/pages/account/AutoDVPracticePages";
import world from "../utils/world";

const kevPages = new Kevpages();
const autoDVPracticePages = new AutoDVPracticePages();

export class AutoDVPracticeCreation {

    async IcreateAutoPolicyinPC() {
        await this.clickNewSubmission("New Submission");
        await this.clickPersonalAutoLOB("Personal Auto");
        await this.selectOfferingScreen("Offering Selection", "Basic Program");
        await this.clickNextButtonOS("Next");
        await this.selectDropDown("Yes");
        await this.qualificationScreenNextButton("Next");
        await this.selectTermType("Term Type", "Annual");
        await this.policyInfoSNextButton("Next");
        await this.assignDrivers("Add", "Existing Driver");
        // if (await autoDVPracticePages.driversScreen.component.find('.gw-label').withText(" ")) {
        //     await this.setValueForTextFieldDrivers("Mobile Phone: Phone Number", "4509646");
        // }
        if (world.driverType == "Existing Driver") {
            await this.setValueForTextFieldDrivers("Mobile Phone: Phone Number", "4509646");
        } else {
            await this.setValueForTextFieldDrivers("Mobile Phone", "4509646");
        }
        await t.pressKey("tab");
        await this.setValueForTextFieldDrivers("License #", "666618699");
        await t.pressKey("tab");
        await this.setValueForDropDown("License State", "Arizona");
        await t.wait(2000);
        await this.clickRolesTab("Roles");
        await this.setValueForTextFieldDrivers("Year First Licensed", "2012");
        await this.setValueForAccidentsAndViolations("1");
        await this.driversNextButton("Next");
        await this.createVehicleButton("Create Vehicle");
        await t.wait(3000);
        await this.setValueForTextFieldVehicles("VIN", "1NXBR32E45Z522411");
        await t.pressKey("tab");
    
}


    async clickNewSubmission(Menu) {
        await autoDVPracticePages.accountMenuActions.click();
        await t.click(autoDVPracticePages.accountMenuActions.component.find('.gw-subMenu').find('.gw-label').withText(Menu));
    }

    async clickPersonalAutoLOB(lob) {
        let lobName = autoDVPracticePages.productSelectionLV.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = lobName.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }

    async selectOfferingScreen(dropDownOS, value){
        let offeringScreen = autoDVPracticePages.offeringScreen.component.find('.gw-label').withExactText(dropDownOS).sibling('div').find('select');
        await t.click(offeringScreen);
        await t.click(offeringScreen.find('option').withText(value));
    }

    async clickNextButtonOS(next){
        await t.click(autoDVPracticePages.offeringScreenCenterToolbar.component.find('.gw-label').withExactText(next));
    }

    async selectDropDown(value){
        let selectDD = autoDVPracticePages.preQualificationLV.component.find('td[id$=-ChoiceSelectInput_NoPost_Cell]').find('select');
        await t.click(selectDD);
        await t.click(selectDD.find('option').withText(value));
    }

    async qualificationScreenNextButton(value){
        await t.click(autoDVPracticePages.qualificationScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(value));
    }

    async selectTermType(dropDownTT, value){
        let selectTermTypeValue = autoDVPracticePages.policyInfoScreen.component.find('.gw-label').withExactText(dropDownTT).sibling('div').find('select');
        await t.click(selectTermTypeValue);
        await t.click(selectTermTypeValue.find('option').withText(value));
    }

    async policyInfoSNextButton(value){
        await t.click(autoDVPracticePages.policyInfoScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(value));
    }

    async assignDrivers(add, exisitingDriver){
        world.driverType = "Existing Driver";
        let clickAddButton = autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(add);
        await t.click(clickAddButton);
        let hoverExistingDriver = autoDVPracticePages.driversScreen.component.find('.gw-subMenu').find('.gw-label').withText(exisitingDriver);
        await t.hover(hoverExistingDriver);
        let clickInsured = autoDVPracticePages.driversScreen.component.find('.gw-subMenu').find('.gw-label').withExactText(world.accountName);
        await t.click(clickInsured);
    }

    async setValueForTextFieldDrivers(fieldName, value) {
        // await t.typeText(autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input'), value);
        // if (await (await autoDVPracticePages.driversScreen.component.)){
            // await t.typeText(autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input'), value);
        // }
        if (await autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input').withExactText("") == true) {
            await t.typeText(autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input'), value);
        }
    }
    // dan
    // async setExistingDriversTextField_Dan(fieldName, value) {
    //     while(await autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input').innerText == null) {
    //         await t.typeText(autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input'), value);
    //     }
    // }

    async setValueForDropDown(labelName, value){
        let dropDown = autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(labelName).sibling('div').find('select');
        await t.click(dropDown);
        await t.click(dropDown.find('option').withText(value));
      }

    async clickRolesTab(label){
        await t.click(autoDVPracticePages.driversScreen.component.find('.gw-label').withExactText(label));
    }  

    async setValueForAccidentsAndViolations(value){
        let numberOfAccidentsPolicyLevel = autoDVPracticePages.driversScreen.component.find('td[id$=-PolicyDriverNumberOfAccidents_Cell').find('select');
        await t.click(numberOfAccidentsPolicyLevel);
        await t.click(numberOfAccidentsPolicyLevel.find('option').withText(value));
        let numberOfAccidentsAccountLevel = autoDVPracticePages.driversScreen.component.find('td[id$=-DriverNumberOfAccidents_Cell').find('select');
        await t.click(numberOfAccidentsAccountLevel);
        await t.click(numberOfAccidentsAccountLevel.find('option').withText(value));
        let numberOfViolationsPolicyLevel = autoDVPracticePages.driversScreen.component.find('td[id$=-PolicyDriverNumberOfViolations_Cell').find('select');
        await t.click(numberOfViolationsPolicyLevel);
        await t.click(numberOfViolationsPolicyLevel.find('option').withText(value));
        let numberOfViolationsAccidentsLevel = autoDVPracticePages.driversScreen.component.find('td[id$=-DriverNumberOfViolations_Cell').find('select');
        await t.click(numberOfViolationsAccidentsLevel);
        await t.click(numberOfViolationsAccidentsLevel.find('option').withText(value));
    }

    async driversNextButton(value){
        await t.click(autoDVPracticePages.driversScreen.component.parent('div').prevSibling('div').find('.gw-label').withText(value));
    }

    async createVehicleButton(label){
        await t.click(autoDVPracticePages.vehicleScreen.component.find('.gw-label').withExactText(label));
    }

    async setValueForTextFieldVehicles(fieldName, value) {
        await t.typeText(autoDVPracticePages.vehicleScreen.component.find('.gw-label').withExactText(fieldName).sibling('div').find('input'), value);
      }
    
}