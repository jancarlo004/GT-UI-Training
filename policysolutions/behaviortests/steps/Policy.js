"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { PolicyScenario } from "../../../TestPractice/scenarios/PolicyScenario.js";

import { t } from "testcafe";

let onPCApp = new onApp("PC");
let policyScenario = new PolicyScenario();

Given(/^Login to PC$/, async function() {
  await onPCApp.loginWithUser('bbaker ', 'gw');
});

When(/^Open Account$/, async function() {
  await policyScenario.SearchForPolicy();
});


