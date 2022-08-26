"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/AccountScenario.js";

import { t } from "testcafe";

let onPCApp = new onApp("PC");
let Account = new AccountScenario();

Given(/^Login to PC$/, async function() {
  await onPCApp.loginWithUser('su ', 'gw');
});

When(/^Open Account$/, async function() {
  await Account.openAccount();
});

Then(/^Edit Account$/, async function() {
  await Account.EditAccount();
});


