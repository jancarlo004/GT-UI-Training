"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import {DonScenarios} from "../../scenarios/DonScenarios.js";
let donScenarios = new DonScenarios();
Given(/^a custom Personal Account$/, async function() {
    await donScenarios.customPersonalAccountCreation();
});

When(/^I create a Policy for Personal Auto$/, async function() {
});

Then(/^I successfully created a Policy for Personal Auto$/, async function() {
});


