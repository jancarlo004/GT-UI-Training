import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { CreateClaimCheckScenario } from "../../scenarios/ClaimScenario/CreateClaimCheckScenario";
import { SearchClaim } from "../../scenarios/ClaimScenario/SearchClaim";
import { SearchClaimCheck } from "../../scenarios/ClaimScenario/SearchClaimCheck";


const onCCApp = new onApp('CC');
const searchClaim = new SearchClaim();
const createClaimCheckScenario = new CreateClaimCheckScenario();
const searchClaimCheck = new SearchClaimCheck();


Given(/^a workers compensation Claim$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');
    await searchClaim.searchClaim();
    await createClaimCheckScenario.createClaimCheck();
    await createClaimCheckScenario.verifyCreatedCheck();

});

When(/^I search for check$/, async function(){

    await searchClaimCheck.searchCheck();

});

Then(/^check was found$/, async function(){

    await searchClaimCheck.checkIsFound();

});