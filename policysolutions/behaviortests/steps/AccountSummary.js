"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/AccountScenario.js";

import { t } from "testcafe";

let onPCApp = new onApp("PC");
let Account = new AccountScenario();

Given(/^Login to PC$/, async function() {
  await onPCApp.loginWithUser('bbaker ', 'gw');
});

When(/^Open Account$/, async function() {
  await Account.openAccount();
});

Then(/^Verify Account Summary$/, async function() {
  await Account.VerifyListofPolicyTerms();
});


