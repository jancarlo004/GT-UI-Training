'use strict';
const {Given, When, Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp"
import { AccountScenario } from "../../Scenarios/AccountScenario";
import { HONewSubmission } from "../../Scenarios/HONewSubmissionScenario";

const onPCApp = new onApp ("PC");
const accountScenario = new AccountScenario();
const homeOwnersNewSubmission = new HONewSubmission();

Given(/^I am a user with the Producer role$/, async function() {                  
    await onPCApp.loginWithUser("aapplegate", "gw");
}); 

When(/^I create Personal Account$/, async function(){
    await accountScenario.createNewAccount();
});

When(/^I submit Homeowners policy$/, async function(){
    await homeOwnersNewSubmission.newSubmissionWizard()
});