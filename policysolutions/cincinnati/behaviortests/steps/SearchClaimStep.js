import { Given, Then, When } from "@cucumber/cucumber";
import { t } from "testcafe";
import { onApp } from "../../../../pageregistry/onApp";
import { SearchClaim } from "../../scenarios/ClaimScenario/SearchClaim";


const onCCApp = new onApp('CC');
const searchClaim = new SearchClaim();

Given(/^a workers compensation Claim$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');

});

When(/^I search for contact$/, async function(){

    await searchClaim.searchClaimAdvanceSearch();

});

Then(/^claim is retrieved$/, async function(){

    await searchClaim.verifySearchClaim();
    await t.debug();

});