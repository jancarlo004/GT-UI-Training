'use strict'

import { onApp } from "../../../../pageregistry/onApp";
import {HomeOwnersPolicyCreation } from "../../../JanCarloTesting/Scenarios/PolicyCreation/HomeOwnersPolicyCreation"
import { AccountCreation } from "../../Scenarios/PolicyCreation/AccountCreation";

const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const accountCreation = new AccountCreation();
const homeOwnersPolicyCreation = new HomeOwnersPolicyCreation();

Given(/^I logged in Policy Center$/, async function(){
    await onPCApp.loginWithUser("bbaker","gw");
});

Given(/^I create a HomeOwners Policy$/, async function(){
    await accountCreation.CreatePersonalAccount();
    await homeOwnersPolicyCreation.HomePolicyCreation();
});

Then(/^HomeOwners Policy is created$/, async function(){
    await homeOwnersPolicyCreation.verifyHomePolicyCreation();
});