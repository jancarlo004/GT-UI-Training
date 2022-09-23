'use strict'
import { AccountCreationScenario } from "../../Scenario/AccountCreationScenario";
import { PersonalAutoPolicyCreation } from "../../scenario/PersonalAutoPolicyCreation";
import { onApp } from "../../../../pageregistry/onApp";

const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const accountCreation = new AccountCreationScenario();
const personalAutoCreation = new PersonalAutoPolicyCreation();


Given(/^I Login to PC with a Producer role$/, async function(){
    await onPCApp.loginWithUser("bbaker","gw");
});

When(/^I create Personal Account$/, async function(){
    await accountCreation.createPersonalAccount();
});

When(/^I create Personal Auto Policy$/, async function(){
    await personalAutoCreation.submissionScenario();
    await personalAutoCreation.issueSubmission();
});

Then(/^a Policy was successfully created$/, async function(){
    await personalAutoCreation.verifyPolicyIsCreated();
});



