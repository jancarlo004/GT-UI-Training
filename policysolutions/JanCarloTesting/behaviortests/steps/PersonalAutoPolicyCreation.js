
'use strict'
import { onApp } from "../../../../pageregistry/onApp";
import { PersonalAutoPolicyCreation } from "../../Scenarios/PolicyCreation/PersonalAutoPolicyCreation";
import { AccountCreation } from "../../Scenarios/PolicyCreation/AccountCreation";
import {PAClaimCreation } from "../../../JanCarloTesting/Scenarios/PersonalAutoClaim/PAClaimCreation.js";
import { AccountCreationWithChallenge } from "../../Scenarios/PolicyCreation/AccountCreationWithChallenge";
import { AutoPolicyWithChallenge } from "../../Scenarios/PolicyCreation/AutoPolicyWithChallenge";


const { Given, When, Then } = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const onCCApp = new onApp("CC");
const personalAutoPolicyCreation = new PersonalAutoPolicyCreation();
const accountCreation = new AccountCreation();
const paClaimCreation = new PAClaimCreation();
const accountCreationWithChallenge = new AccountCreationWithChallenge();
const autoPolicyCreationWithChallenge = new AutoPolicyWithChallenge();

Given(/^I create a Personal Auto Policy$/, async function(){
    await accountCreationWithChallenge.accountCreationWithChallenge();
    await autoPolicyCreationWithChallenge.autoPolicyCreation();

});

Then(/^Personal Auto Policy is created$/, async function(){
    await personalAutoPolicyCreation.verifypolicyIssued();
});

When(/^I create personal auto claim$/, async function(){
    await onCCApp.loginWithUser("bbaker","gw");
    await paClaimCreation.PersonalAutoClaimCreation();

});

Then(/^Claim was created$/, async function(){
    await paClaimCreation.verifyClaimIsCreated();
});

When(/^I create exposure and reserves$/, async function(){
    await paClaimCreation.exposureAndReserveCreation();
});
Then(/^reserve is created$/, async function(){
    await paClaimCreation.verifyReserveIsCreated();
});

When(/^I create a service$/, async function(){
    await paClaimCreation.createService();
});