'use strict'

import {t} from 'testcafe';
import { onApp } from '../../../../pageregistry/onApp';
import { NewAccountScenario } from "../../Scenarios/NewAccountScenario";
import { PolicyCreationScenario } from '../../Scenarios/PolicyCreationScenario';

const { Given, When, Then } = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const newAccountScenario = new NewAccountScenario();
const policyCreationScenario = new PolicyCreationScenario();


Given(/^I logged in Policy Center$/, async function(){
    await onPCApp.loginWithUser("bbaker","gw");
});

Given(/^I Create a (.*) policy$/, async function(t, stepArguments){

    await newAccountScenario.CreatePersonalAccount();

    let LOB = stepArguments[0];
    switch(LOB){
        case "Personal Auto":
            await policyCreationScenario.createAutoPolicy();
    break;
        case "Homeowners":
            await policyCreationScenario.homePolicyCreation();
    break;
        case "Inland Marine":
            await policyCreationScenario.inlandMarinePolicyCreation();
    break;
    default:
    }
});

When(/^I Search the Policy$/, async function(){
    // await policySearch.searchPolicy();
});

// Then(/^I View the Policy$/, async function(){
//     // await policySearch.verifyPolicyExists();
// });