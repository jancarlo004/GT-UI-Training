"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { SubmissionScenario } from "../../scenarios/SubmissionScenario.js";
import { t } from "testcafe";
import world from "../../utils/world.js";

let submissionScenario = new SubmissionScenario();

Then(/^a premium should exist for the vehicle$/, async function() {
  await submissionScenario.checkPremiumPolicyExist(world.vehicleVin);
});
