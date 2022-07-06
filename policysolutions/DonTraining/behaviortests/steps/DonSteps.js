
const { Given, When, Then } = require("@cucumber/cucumber");
import {DonScenarios} from "../../scenarios/DonScenarios.js";
let donScenarios = new DonScenarios();
Given(/^a Personal Account$/, async function() {
    await donScenarios.customPersonalAccountCreation();
});

When(/^I create a Policy for Personal Auto$/, async function() {
});
"use strict";
Then(/^I successfully created a Policy for Personal Auto$/, async function() {
});


