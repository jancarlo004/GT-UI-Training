'use strict'

import { onApp } from "../../../../pageregistry/onApp";

const {Given, When, Then} = require("@cucumber/cucumber");
const onCCApp = new onApp("CC");

Given(/^I am user with Adjuster Role$/, async function(){
    await onCCApp.loginWithUser("tmazzon","gw");
});

When(/^I submit a first notice of loss$/, async function(){
    
});