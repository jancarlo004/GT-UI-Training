const {Given,When,Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { PolicyScenarios } from "../../scenarios/PolicyScenarios";

const onPCApp = new onApp("PC");
const policyScenarios = new PolicyScenarios();

Given(/^I am a user with a Producer Role$/, async function(){
    await onPCApp.loginWithUser("bbaker", "gw");
});

When(/^I search for a (.*) policy$/, async function(t, tableHeader){
    //Test data: 1510820435
    await policyScenarios.searchMultiplePolicies(tableHeader[0]);
});

Then(/^(.*) policy was found$/, async function(){
    //Return all results via console.log
});