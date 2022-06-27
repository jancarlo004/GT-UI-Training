"use strict";
import { onApp } from "../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/PolicyCreation/AccountScenario";
const { Given, When, Then } = require("@cucumber/cucumber");
const accountScenario = new AccountScenario();
const onPCApp = new onApp("PC");

Given(/^Login to PolicyCenter$/, async function() {
    await onPCApp.loginWithUser('ssmith','gw');
});

When(/^Search or Create Account$/, async function() {
  await accountScenario.createPersonalAccount();
});

Then(/^Create a Homeowners Policy$/, async function() {
  await accountScenario.checkAccountOverview();
});