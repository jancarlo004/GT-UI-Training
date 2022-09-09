const {Given,When,Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { Scenarios_WC_Activities_AddingActivity } from "../../Scenarios/Scenarios_WC_Activities_AddingActivity";
import { Scenarios_WC_ClaimCreation_ViewingClaim } from "../../Scenarios/Scenarios_WC_ClaimCreation_ViewingClaim";

const onCCApp = new onApp("CC");
const viewClaim = new Scenarios_WC_ClaimCreation_ViewingClaim();
const activities = new Scenarios_WC_Activities_AddingActivity();

Given(/^a worker compensation claim$/, async function(){
    await onCCApp.loginWithUser("bbaker","gw");
    await viewClaim.searchClaim();
});

When(/^I add a new (.*) activity to the claim$/, async function(t, tableHeader){
    await activities.addActivity(tableHeader);
});

Then(/^activity is created$/, async function(){
});