'use strict'

import { InLandMarinePolicyCreation} from "../../Scenarios/PolicyCreation/InLandMarinePolicyCreation"
import { AccountCreation } from "../../Scenarios/PolicyCreation/AccountCreation";

const {Given, When, Then} = require("@cucumber/cucumber");
const accountCreation = new AccountCreation();
const inlandMarinePolicy = new InLandMarinePolicyCreation();


Given(/^I create a In-Land Marine Policy$/, async function(){
    await accountCreation.CreatePersonalAccount();
    await inlandMarinePolicy.inlandMarinePolicyCreation();
});

Then(/^In-Land Marine Policy is created$/, async function(){
    await inlandMarinePolicy.verifyInlanMarinePolicyCreated();

});