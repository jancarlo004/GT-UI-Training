const {Given,When,Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { Scenarios_WC_ClaimCreation_ViewingClaim } from "../../Scenarios/Scenarios_WC_ClaimCreation_ViewingClaim";

const onCCApp = new onApp("CC");
const viewingClaim = new Scenarios_WC_ClaimCreation_ViewingClaim();

Given(/^a workers compensation claim$/, async function(){
    await onCCApp.loginWithUser("bbaker","gw");
});

When(/^I search for the claim number$/, async function(){
    await viewingClaim.searchClaim();
});

Then(/^claim was found$/, async function(){
    await viewingClaim.verifyClaim();
});