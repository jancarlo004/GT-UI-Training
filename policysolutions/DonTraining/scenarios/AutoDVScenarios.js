import { timeStamp } from "console";
import { t } from "testcafe";
import { AutoDVPages } from "../../DonTraining/pages/AutoDVPages";
import world from "../utils/world";
const autodvpages = new AutoDVPages();
export class AutoDVScenarios{
    async createDvPaPolicy(){
        await this.clickNewSubmission("New Submission");
        await this.clickPersonalAutoLob("Personal Auto");
        await this.selectOffering("Offering Selection", "Basic Program");
        await this.clickNextOffering("Next");
        await this.selectPreQualification("No - New Driver");
        await this.clickNextQualification("Next");
        await this.clickNextPolicyInfo("Next");
        await this.addDriver("Add", "Existing Driver");
        await this.clickRolesTab("Roles");
        await this.accidentViolationSummary("1");
        await this.clickNextDriverScreen("Next");
        await this.clickCreateVehicle("Create Vehicle");
        await this.inputTextFields("VIN", "1M2AA08Y8RW005688");
        await t.pressKey("tab");
        await this.setValueForDropDown("License State", "Arizona");
        await this.inputTextFields("Cost New", "2000");
        await this.addDriverToVehicles("Add", "Elina Snow");
        await this.clickNextVehicleScreen("Next");
        await this.clickNextPaCoveragesScreen("Next");
        await this.clickNextRiskAnalysisScreen("Next");
        await this.clickQuotePolicyReviewScreen("Quote");

        
        
        
        
        

    }

    async clickNewSubmission(Menu){
        await autodvpages.accountMenuActions.click();
        await t.click(autodvpages.accountMenuActions.component.find('.gw-subMenu').find('.gw-label').withText(Menu));
    }
    async clickPersonalAutoLob(LOB){
        let personalAutoLabel = autodvpages.lobSelectionLV.component.find('td[id$=-Name_Cell]').withExactText(LOB);
        let selectButton = personalAutoLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }
    async selectOffering(Offering, basicProgram){
        let selectOfferingScreen = autodvpages.offeringScreen.component.find('.gw-label').withExactText(Offering).sibling('div').find('select');
        await t.click(selectOfferingScreen);
        await t.click(selectOfferingScreen.find('option').withText(basicProgram));
    }
    async clickNextOffering(nextButton){
        await t.click(autodvpages.offeringNextButton.component.find('.gw-label').withExactText(nextButton));
    }
    async selectPreQualification(value){
        let preQualificationScreen = autodvpages.preQualificationLV.component.find('td[id$=-ChoiceSelectInput_NoPost_Cell').find('select');
        await t.click(preQualificationScreen);
        await t.click(preQualificationScreen.find('option').withText(value));
    }
   async clickNextQualification(nextButton){
        await t.click(autodvpages.qualificationNextButton.component.find('.gw-label').withExactText(nextButton));
   }
   async clickNextPolicyInfo(nextButton){
        await t.click(autodvpages.policyInfoNextButton.component.find('.gw-label').withExactText(nextButton));
   }
   async addDriver(add, existingDriver){
        let addButton = autodvpages.driverScreen.component.find('.gw-label').withExactText(add);
        await t.click(addButton);
        let hoverExistingDriver = autodvpages.driverScreen.component.find('.gw-subMenu').find('.gw-label').withExactText(existingDriver);
        await t.hover(hoverExistingDriver);
        let selectExistingDriver = autodvpages.driverScreen.component.find('.gw-label').withExactText(world.accountName);
        await t.click(selectExistingDriver);
   }  
   async clickRolesTab(roles){
        let rolesButton = autodvpages.driverScreen.component.find('.gw-label').withExactText(roles);
        await t.click(rolesButton);
   }
   async accidentViolationSummary(value){
        let accidentPolicyCell = autodvpages.driverScreen.component.find('td[id$=-PolicyDriverNumberOfAccidents_Cell').find('select');
        await t.click(accidentPolicyCell);
        await t.click(accidentPolicyCell.find('option').withText(value));

        let accidentAccountCell = autodvpages.driverScreen.component.find('td[id$=-DriverNumberOfAccidents_Cell').find('select');
        await t.click(accidentAccountCell);
        await t.click(accidentAccountCell.find('option').withText(value));

        let violationPolicyCell = autodvpages.driverScreen.component.find('td[id$=-PolicyDriverNumberOfViolations_Cell').find('select');
        await t.click(violationPolicyCell);
        await t.click(violationPolicyCell.find('option').withText(value));

        let violationAccountCell = autodvpages.driverScreen.component.find('td[id$=-DriverNumberOfViolations_Cell').find('select');
        await t.click(violationAccountCell);
        await t.click(violationAccountCell.find('option').withText(value));
   }   
   async clickNextDriverScreen(nextButton){
        await t.click(autodvpages.driverNextButton.component.find('.gw-label').withExactText(nextButton));
   }
   async clickCreateVehicle(vehicleButton){
        let createVehicleButton = autodvpages.vehicleScreen.component.find('.gw-label').withExactText(vehicleButton);
        await t.click(createVehicleButton);
   }
   async inputTextFields(label, value){
        await t.typeText(autodvpages.vehicleScreen.component.find('.gw-label').withExactText(label).sibling('div').find('input'),value);                  
   }
   async setValueForDropDown(dropDown, value) {
      let valueDropDown = autodvpages.vehicleScreen.component.find('.gw-label').withExactText(dropDown).sibling('div').find('select');
      await t.click(valueDropDown);
      await t.click(valueDropDown.find('option').withText(value));   
   }
   
   async addDriverToVehicles(add, existingDriver){
     let addDriverToVehicleButton = autodvpages.vehicleScreen.component.find('.gw-label').withExactText(add);
     await t.click(addDriverToVehicleButton);
     let addExistingDriverToVehicle = autodvpages.vehicleScreen.component.find('.gw-label').withExactText(existingDriver);
     await t.click(addExistingDriverToVehicle);
   }
   async clickNextVehicleScreen(nextButton){
     await t.click(autodvpages.vehiclesNextButton.component.find('.gw-label').withExactText(nextButton));
   }
   async clickNextPaCoveragesScreen(nextButton){
     await t.click(autodvpages.paCoveragesNextButton.component.find('.gw-label').withExactText(nextButton));
   }
   async clickNextRiskAnalysisScreen(nextButton){
     await t.click(autodvpages.riskAnalysisNextButton.component.find('.gw-label').withExactText(nextButton));

   } 
   async clickQuotePolicyReviewScreen(quoteButton){
     await t.click(autodvpages.policyReviewQuoteButton.component.find('.gw-label').withExactText(quoteButton));
   }
}

