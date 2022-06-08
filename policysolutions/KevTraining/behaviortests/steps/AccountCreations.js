'use strict'
import { AccountCreation } from "../../scenarios/AccountCreation";
import { t } from "testcafe"
import { onApp } from "../../../../pageregistry/onApp";


const { Given, When, Then } = require("@cucumber/cucumber");
const OnAppPC = new onApp("PC");
const accountCreation = new AccountCreation();

Given(/^I create account in PC$/, async function() {
    await OnAppPC.loginWithUser("bbaker", "gw");
    await accountCreation.accountCreation();
  });

