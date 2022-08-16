'use strict';
const {Given, When, Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp"
import { AccountScenario } from "../../Scenarios/AccountScenario";
import { NewSubmissionScenario } from "../../Scenarios/NewSubmissionScenario";

const onPCApp = new onApp ("PC");
const accountScenario = new AccountScenario();
const newSubmissionScenario = new NewSubmissionScenario();

Given(/^I am a user with the Producer role$/, async function() {                  
    await onPCApp.loginWithUser("aapplegate", "gw");
}); 

When(/^I create Personal Account$/, async function(){
    await accountScenario.createNewAccount();
    // await accountScenario.searchExistingAccount();
});

When(/^I submit Personal Auto policy$/, async function(){
    await newSubmissionScenario.NewPASubmissionScenario();
});