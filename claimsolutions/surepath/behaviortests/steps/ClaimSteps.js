"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { ClaimScenario } from "../../scenarios/ClaimScenario.js";
import { FNOLScenario } from "../../scenarios/FNOLScenario"
import { t } from "testcafe";

let onCCApp = new onApp("CC");
let claimScenario = new ClaimScenario();
let fnolScenario = new FNOLScenario();

Given(/^I am an adjuster$/, async function() {
  await onCCApp.navigateToApp();
  await onCCApp.loginWithUser('aapplegate', 'gw');
});

Given(/^a Personal Auto claim$/, async function() {
  await fnolScenario.createPAClaimUsingFNOLFullWizardForCCScenario();
});

When(/^I need to quickly understand a claim I haven’t reviewed$/, async function() {;
  await claimScenario.openClaim();
})

Then(/^I can find an overview of the claim$/, async function() {
  await claimScenario.checkOverview();
})
