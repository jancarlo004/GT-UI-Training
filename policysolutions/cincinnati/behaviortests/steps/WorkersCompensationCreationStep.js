import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreationScenario } from "../../scenarios/AccountScenarios/AccountCreationScenario";
import { WCClaimScenario } from "../../scenarios/ClaimScenario/WCClaimScenario";
import { WCCreationScenario } from "../../scenarios/PolicyScenarios/WCCreationScenario";

const onPCApp = new onApp('PC');
const onCCApp = new onApp('CC');
const accountCreationScenario = new AccountCreationScenario();
const wcCreationScenario = new WCCreationScenario();
const wcClaimScenario = new WCClaimScenario();


Given(/^Login to PolicyCenter as a Producer$/, async function(){

    await onPCApp.loginWithUser('aapplegate','gw');

});

When(/^Create a Personal Account$/, async function(){

    await accountCreationScenario.createPersonalAccount();

});

When(/^Create a Workers Compensation Policy$/, async function(){

    await wcCreationScenario.createWorkersCompensationPolicy();
    await wcCreationScenario.verifyIssuePolicy();

});

When(/^Create a Workers Compensation LOB Claim$/, async function(){

    await onCCApp.loginWithUser('rbarnes','gw');
    await wcClaimScenario.WCClaimCreation();

});

Then(/^Successfully create the Workers Compensation Policy$/, async function(){

    await wcClaimScenario.claimValidation();  

});