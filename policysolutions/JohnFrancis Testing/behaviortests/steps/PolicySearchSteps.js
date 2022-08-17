'use strict';

import { onApp } from "../../../../pageregistry/onApp"

const onPCApp = new onApp ("PC");
const {Given, When, Then} = require('@cucumber/cucumber');


Given(/^I am a user with the Producer role$/, async function(){                  
    await onPCApp.loginWithUser("aapplegate", "gw");
}); 

Given(/^I have (.*) policies$/, async function(t, stepArguments){
    await 
});