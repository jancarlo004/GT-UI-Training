import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { WCClaimScenario } from "../../scenarios/ClaimScenario/WCClaimScenario";
import { WCCreationScenario } from "../../scenarios/PolicyScenarios/WCCreationScenario";


const onCCApp = new onApp('CC');
const wcCreationScenario = new WCCreationScenario();
const wcClaimScenario = new WCClaimScenario();

Given(/^Create policy for Workers Compensation$/, async function(){

    await wcCreationScenario.createWorkersCompensationPolicy();

});

When(/^File a Claim for a Workers Compensation Policy$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');
    await wcClaimScenario.WCClaimCreation();

});

Then(/^Successfully file a Workers Compensation Policy$/, async function(){

    await wcClaimScenario.claimValidation();

});