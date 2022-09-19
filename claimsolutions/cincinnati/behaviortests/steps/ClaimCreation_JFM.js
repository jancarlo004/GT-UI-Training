'use strict'

import { onApp } from "../../../../pageregistry/onApp";
import { WCClaimCreationFNOL } from "../../Scenarios/WCClaimCreationFNOL_JFM";

const {Given, When, Then} = require("@cucumber/cucumber");
const onCCApp = new onApp("CC");
const wcClaimCreationFNOL = new WCClaimCreationFNOL();

Given(/^I am a user with Adjuster Role$/, async function(){
    await onCCApp.loginWithUser("tmazzon","gw");
});

When(/^I submit a first notice of loss for Workers Compensation$/, async function(){
    await wcClaimCreationFNOL.claimCreationFNOL();
});

Then(/^Claim is created$/, async function(){
    await wcClaimCreationFNOL.verifyClaim();
});