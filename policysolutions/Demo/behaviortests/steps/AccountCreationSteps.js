'use strict'
import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreationScenario } from "../../Scenario/AccountCreationScenario";

const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const accountCreation = new AccountCreationScenario();

Given(/^I Login to PC with a Producer role$/, async function(){
    await onPCApp.loginWithUser("bbaker","gw");
});

When(/^I create a Personal account$/, async function(){
    await accountCreation.createPersonalAccount();
});

Then(/^an account was successfully created$/, async function(){
    await accountCreation.verifyAccount();
});

