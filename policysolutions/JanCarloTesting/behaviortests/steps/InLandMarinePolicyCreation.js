'use strict'

import {HomeOwnersPolicyCreation } from "../../../JanCarloTesting/Scenarios/PolicyCreation/HomeOwnersPolicyCreation"
import { AccountCreation } from "../../Scenarios/PolicyCreation/AccountCreation";

const {Given, When, Then} = require("@cucumber/cucumber");
const accountCreation = new AccountCreation();
const homeOwnersPolicyCreation = new HomeOwnersPolicyCreation();


Given(/^I create a In-Land Marine Policy$/, async function(){
    await accountCreation.CreatePersonalAccount();
    await homeOwnersPolicyCreation.HomePolicyCreation();
});

Then(/^In-Land Marine Policy is created$/, async function(){
    await homeOwnersPolicyCreation.verifyHomePolicyCreation();
});