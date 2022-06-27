"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { PersonalAutoPolicyCreationScenario } from "../../scenarios/PolicyCreation/personalAutoPolicyCreationScenario.js";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/PolicyCreation/AccountScenario.js";

const onPCApp = new onApp("PC");
const personalAutoPolicyCreationScenario = new PersonalAutoPolicyCreationScenario();
const accountScenario = new AccountScenario();

Given(/^I login in PC$/, async function() {
    await onPCApp.loginWithUser('ssmith', 'gw');
});

When(/^I create a Personal Auto Policy$/, async function() {
  await accountScenario.createPersonalAccount();
  await personalAutoPolicyCreationScenario.createPersonalAutoPolicy();
});

Then(/^I successfully issued Auto Policy$/, async function() {
  await personalAutoPolicyCreationScenario.issuedPersonalAutoPolicy();
  //await personalAutoPolicyCreationScenario.validateAddedContact();
});

