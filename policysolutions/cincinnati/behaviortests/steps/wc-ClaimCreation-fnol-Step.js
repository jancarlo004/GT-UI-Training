import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { WCClaimScenario } from "../../scenarios/ClaimScenario/WCClaimScenario";

const onCCApp = new onApp('CC');
const wcClaimScenario = new WCClaimScenario();

Given(/^Login on ClaimCenter as adjuster$/, async function(){

    await onCCApp.loginWithUser('ssmith', 'gw');

});

When(/^create a Workers Compensation Claim$/, async function(){

    await wcClaimScenario.WCClaimCreation();

});

Then(/^Successfully file a claim$/, async function(){

    await wcClaimScenario.claimValidation();

});