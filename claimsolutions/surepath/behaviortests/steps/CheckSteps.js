"use strict";
const {Given, When, Then} = require("@cucumber/cucumber");
import {CheckScenario} from "../../scenarios/CheckScenario.js";
import world from "../../utils/world.js";

let checkScenario = new CheckScenario();

Given(/^with a check$/, async function() {
  let type = "Claim Cost";
  let category = "Auto parts";
  let paymentType = "Final";
  let amount = "1000";

  await checkScenario.createACheck(type, category, paymentType, amount);
});

Given(/^I search for a check with its (.*)$/, async function (t,stepArguments) {
  const identifier = stepArguments[0];
  
  if (identifier == "Claim Number") {
    await checkScenario.searchCheckByClaimNumber(world.claimNumber);
  }
  else if (identifier == "Invoice Number") {
    await checkScenario.searchCheckByInvoiceNumber(world.invoiceNumber);
  }
});

Then(/^the check was found$/, async function() {
  await checkScenario.findCheckWithClaimNumberExists(world.claimNumber);
});