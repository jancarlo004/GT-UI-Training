import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { PAClaimScenario } from "../../scenarios/ClaimScenarios/PAClaimScenario";


const onCCApp = new onApp('CC');
const paClaimScenario = new PAClaimScenario();

Given(/^Login to Claim Center/, async function(){

    await onCCApp.loginWithUser('rbarnes','gw');4
    
});

When(/^I create Claim for Personal Auto$/, async function(){

    await paClaimScenario.createPersonalAutoClaim();

});

Then(/^Claim is successfully created$/, async function(){

    await paClaimScenario.claimValidation();

});