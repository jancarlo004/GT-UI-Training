'use strict'
import { onApp } from "../../../pageregistry/onApp";

const {Given, When, Then} = require("@cucumber/cucumber");
const onCCApp = new onApp("CC");

Given(/^A <Line Of Business> policy$/, async function(){
    await onCCApp.loginWithUser('ssmith','gw');

});
When(/^Create claim for the searched policy$/, async function(){

});
Then(/^Claim is created successfully$/, async function(){

});