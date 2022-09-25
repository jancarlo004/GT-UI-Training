import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { CreateClaimCheck, CreateClaimCheckScenario } from "../../scenarios/ClaimScenario/CreateClaimCheckScenario";
import { SearchClaim } from "../../scenarios/ClaimScenario/SearchClaim";

 

const onCCApp = new onApp('CC');
const searchClaim = new SearchClaim();
const createClaimCheckScenario = new CreateClaimCheckScenario();

Given(/^Search for any Existing Workers Compensation Claim$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');
    await searchClaim.searchClaim();

})

When(/^Create Claim Check$/, async function(){

    await createClaimCheckScenario.createClaimCheck();

})

Then(/^Successfully create a Check$/, async function(){

    await createClaimCheckScenario.verifyCreatedCheck();

})