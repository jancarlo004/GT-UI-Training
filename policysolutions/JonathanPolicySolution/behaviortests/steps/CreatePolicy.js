'use strict'

import {t} from 'testcafe';
import { onApp } from '../../../../pageregistry/onApp';
import { NewAccountScenario } from "../../Scenarios/NewAccountScenario";
import { PolicyCreationScenario } from '../../Scenarios/PolicyCreationScenario';
import { SearchPolicyScenario } from '../../Scenarios/SearchPolicyScenario';
import { ViewPolicyScenario } from '../../Scenarios/ViewPolicyScenario';

const { Given, When, Then } = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const newAccountScenario = new NewAccountScenario();
const policyCreationScenario = new PolicyCreationScenario();
const searchPolicyScenario = new SearchPolicyScenario();
const viewPolicyScenario = new ViewPolicyScenario();


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
    await searchPolicyScenario.searchPolicy();
});

Then(/^I View the Policy$/, async function(){
    await viewPolicyScenario.viewPolicySummary();
});