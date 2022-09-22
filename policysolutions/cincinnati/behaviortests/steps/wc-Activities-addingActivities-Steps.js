import { Given, Then, When } from "@cucumber/cucumber";
import { ClaimMenuActions } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/menuActions/ClaimMenuActions";
import { onApp } from "../../../../pageregistry/onApp";
import { SearchClaim } from "../../scenarios/ClaimScenario/SearchClaim";
import { AddAutoPilotActivity } from "../../scenarios/ClaimScenario/wc-Activities-addingActivities-Scenario";


const onCCApp = new onApp('CC');
const searchClaim = new SearchClaim();
const addAutoPilotActivity = new AddAutoPilotActivity();

Given(/^a workers compensation Claim$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');
    await searchClaim.searchClaim();
    
});

When(/^I add Auto Pilot Action required activity$/, async function(){

    await addAutoPilotActivity.addAutoPilotActionRequiredActivity();

});


When(/^I add Auto Pilot Notifications$/, async function(){

    await addAutoPilotActivity.addAutoPilotNotification();

});

Then(/^activity is created$/, async function(){

    await addAutoPilotActivity.verifyAutoPilotActivity();

});