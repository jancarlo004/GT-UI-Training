import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { CreateClaimRecoveryScenario } from "../../scenarios/ClaimScenario/CreateClaimRecoveryScenario";
import { SearchClaimRecovery } from "../../scenarios/ClaimScenario/SearchClaimRecovery";
import { WCClaimScenario } from "../../scenarios/ClaimScenario/WCClaimScenario";


const onCCApp = new onApp('CC');
const wcClaimScenario = new WCClaimScenario();
const createClaimRecoveryScenario = new CreateClaimRecoveryScenario();
const searchClaimRecovery = new SearchClaimRecovery();

Given(/^a workers compensation Claim$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');
    await wcClaimScenario.WCClaimCreation();
    await wcClaimScenario.claimValidation();
    await createClaimRecoveryScenario.createClaimRecovery(); 

});

When(/^I search for recovery$/, async function(){

    await searchClaimRecovery.searchRecovery();

});

Then(/^recovery was found$/, async function(){

    await searchClaimRecovery.recoveryIsFound();

});