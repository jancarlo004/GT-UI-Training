"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { t } from "testcafe";

let onPCApp = new onApp("PC");

Given(/^I am a user with the Producer role$/, async function() {
  await onPCApp.navigateToApp();
  await onPCApp.loginWithUser('chart', 'gw');
});