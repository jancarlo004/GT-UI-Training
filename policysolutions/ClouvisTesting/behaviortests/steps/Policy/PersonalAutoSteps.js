"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { PersonalAutoScenario } from "../../../scenarios/Policy/PersonalAutoScenario.js";
import { AccountCreation } from "../../../scenarios/Account/AccountCreation";

const onPCApp = new onApp("PC");
const personalAutoScenario = new PersonalAutoScenario();
const accountCreation = new AccountCreation();

Given(/^login in PC$/, async function() {
    await onPCApp.loginWithUser('ssmith', 'gw');
});

When(/^i create a Personal Auto Policy$/, async function() {
    await accountCreation.createAccount();
    await personalAutoScenario.createPersonalAuto();
  
});

Then(/^successfully issued Auto Policy$/, async function() {
    await personalAutoScenario.issuedPolicy("Submission (Bound)");
});
