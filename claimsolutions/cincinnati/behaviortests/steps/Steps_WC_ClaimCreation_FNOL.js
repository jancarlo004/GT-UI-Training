const {Given,When,Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { Scenarios_WC_ClaimCreation_FNOL } from "../../Scenarios/Scenarios_WC_ClaimCreation_FNOL";

const onCCApp = new onApp("CC");
const claimCreationFNOL = new Scenarios_WC_ClaimCreation_FNOL();

Given(/^a workers compensation policy$/, async function(){
    await onCCApp.loginWithUser("bbaker", "gw");
    await claimCreationFNOL.searchPolicy();
});

When(/^I create FNOL Claim$/, async function(){
    await claimCreationFNOL.workerscompensation_FNOLProcess();
});

Then(/^claim is created$/, async function(){
    await claimCreationFNOL.getClaimNumber();
});