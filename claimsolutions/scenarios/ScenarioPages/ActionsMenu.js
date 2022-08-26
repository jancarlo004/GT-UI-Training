"use strict";
import { PcfButton, PcfComponent,PcfSelectInput } from "@gtui/gt-ui-framework";
import { t,Selector } from "testcafe";

export class ActionsMenu {
  sideBarActionsMenu_Button = PcfButton("#Claim-ClaimMenuActions");
  //Choose by Coverage
  ChooseByCoverage_Button = PcfButton("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverage");
  //Policy Coverage  
  PolicyCoverage_Button = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverage-0-item");
  //Liability - Bodily Injury and Property Damage
  Liability_BodilyInjuryandPropertyDamage_Button = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverage-0-item-0-item");
  
  //Liability - Vehicle Damage
  Liability_VehicleDamage_Button = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverage-0-item-0-item-2-item");
  
  //Claimant
  Claimant_dropdown = PcfSelectInput("#NewExposure-NewExposureScreen-NewExposureDV-NewClaimVehicleDamageDV-Claimant_Picker");

  //vehicle
 Vehicle_MenuIcon = PcfButton("#NewExposure-NewExposureScreen-NewExposureDV-NewClaimVehicleDamageDV-Vehicle_Incident-Vehicle_IncidentMenuIcon");
  //new incident
 NewIncident_MenuIcon = PcfButton("#NewExposure-NewExposureScreen-NewExposureDV-NewClaimVehicleDamageDV-Vehicle_Incident-NewClaimVehicleDamageDV_NewIncidentMenuItem");
//select vehicle
 Vehicle_dropdown = PcfSelectInput("#NewVehicleIncidentPopup-NewVehicleIncidentScreen-VehIncidentDetailDV-VehicleIncidentDV-Vehicle_Picker");
//save exposure
 SaveExposure = PcfButton("#NewExposure-NewExposureScreen-Update");
//drivername
Driver_dropdown = PcfSelectInput("#NewVehicleIncidentPopup-NewVehicleIncidentScreen-VehIncidentDetailDV-VehicleIncidentDV-Driver_Picker");
//loss occured
LossOccured_dropdown = PcfSelectInput("#NewVehicleIncidentPopup-NewVehicleIncidentScreen-VehIncidentDetailDV-VehicleIncidentDV-LossOccured");
//ok button
IncidentSave_button = PcfButton("#NewVehicleIncidentPopup-NewVehicleIncidentScreen-Update");
  async CreateNewExposure() {
    await this.sideBarActionsMenu_Button.click();    
    await this.ChooseByCoverage_Button.click();        
    await t.hover(this.PolicyCoverage_Button.component);
    await t.hover(this.Liability_BodilyInjuryandPropertyDamage_Button.component);
    await t.hover(this.Liability_VehicleDamage_Button.component);
    this.Liability_VehicleDamage_Button.click();  
    await this.Claimant_dropdown.selectOptionByLabel("Ray Newton");
    await this.Vehicle_MenuIcon.click();
    await this.NewIncident_MenuIcon.click();
    await this.Vehicle_dropdown.selectOptionByLabel("2005 Mazda RX-8");
    await this.Driver_dropdown.selectOptionByLabel("Ray Newton");
    await this.LossOccured_dropdown.selectOptionByLabel("At premises");
    await this.IncidentSave_button.click();
    await this.SaveExposure.click();    
  }
}

