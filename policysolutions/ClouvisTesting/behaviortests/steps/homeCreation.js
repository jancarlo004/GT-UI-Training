"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { HomeCreationScenario } from "../../scenarios/PolicyCreation/homePolicyCreation.js";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/PolicyCreation/AccountScenario.js";

const onPCApp = new onApp("PC");
const homePolicyCreation = new HomeCreationScenario();
const accountScenario = new AccountScenario();

Given(/^I login in PC$/, async function() {
    await onPCApp.loginWithUser('ssmith', 'gw');
});

When(/^I create a Homeowners Policy$/, async function() {
  await accountScenario.createPersonalAccount();
  await homePolicyCreation.createHomePolicy();
});

Then(/^I successfully issued Homeowners Policy$/, async function() {
  await homePolicyCreation.issuedHomePolicy();
});
