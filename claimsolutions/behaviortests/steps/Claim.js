"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../pageregistry/onApp";
import { FNOLScenario } from "../../scenarios/FNOLScenario.js";
import { ExposureScenario } from "../../scenarios/ExposureScenario.js";
import { ServiceScenario } from "../../scenarios/ServiceScenario.js";
import { VehicleScenario } from "../../scenarios/VehicleScenario.js";
import { t } from "testcafe";

let onCCApp = new onApp("CC");
let fnolScenario = new FNOLScenario();
let exposurescenario = new ExposureScenario();
let servicescenario = new ServiceScenario();
let vehiclescenario = new VehicleScenario();

Given(/^Login to CC$/, async function() {
  await onCCApp.loginWithUser('bbaker ', 'gw');  
});

// When(/^Create new claim$/, async function() {  
//   await fnolScenario.createPAClaimUsingFNOLFullWizardForCCScenario();
// });

When(/^Open the claim created$/, async function() {  
  await fnolScenario.OpenClaim();  
});

// When(/^Create a new Exposure$/, async function() {  
//   await exposurescenario.CreateNewExposure();
// });

// When(/^Validate exposure$/, async function() {  
//   await exposurescenario.ValidateExposure();
// });

// When(/^Create reserve via exposure$/, async function() {  
//   await exposurescenario.CreateReserve();
// });

// When(/^Create service$/, async function() {  
//   await servicescenario.CreateService();
// });

When(/^Add Vehicle$/, async function() {  
  await vehiclescenario.AddVehicle();
});


