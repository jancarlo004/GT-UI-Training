
'use strict'
import { onApp } from "../../../../pageregistry/onApp";
import { PersonalAutoPolicyCreation } from "../../Scenarios/PolicyCreation/PersonalAutoPolicyCreation";
import { AccountCreation } from "../../Scenarios/PolicyCreation/AccountCreation";
import {PAClaimCreation } from "../../../JanCarloTesting/Scenarios/PersonalAutoClaim/PAClaimCreation.js"



const { Given, When, Then } = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const onCCApp = new onApp("CC");
const personalAutoPolicyCreation = new PersonalAutoPolicyCreation();
const accountCreation = new AccountCreation();
const paClaimCreation = new PAClaimCreation();

Given(/^I create a Personal Auto Policy$/, async function(){
    await accountCreation.CreatePersonalAccount();
    await personalAutoPolicyCreation.personalAutoPolicyCreation();

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