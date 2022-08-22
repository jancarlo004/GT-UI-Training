'use strict';

import { onApp } from "../../../../pageregistry/onApp"
import { PolicySearchScenario } from "../../Scenarios/PolicySearchScenario";

const {Given, When, Then} = require('@cucumber/cucumber');
const onPCApp = new onApp ("PC");
const searchPolicy = new PolicySearchScenario();


Given(/^I am a user with the Producer role$/, async function(){                  
    await onPCApp.loginWithUser("aapplegate", "gw");
}); 

When(/^I search for (.*) policies$/, async function(t, stepArguments){
    await searchPolicy.searchPolicy(stepArguments);
});