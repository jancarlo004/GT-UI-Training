import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreationScenario } from "../../scenarios/AccountScenarios/AccountCreationScenario";
import { WCCreationScenario } from "../../scenarios/PolicyScenarios/WCCreationScenario";

const onPCApp = new onApp('PC');
const accountCreationScenario = new AccountCreationScenario();
const wcCreationScenario = new WCCreationScenario();


Given(/^Login to PolicyCenter as a Producer$/, async function(){

    await onPCApp.loginWithUser('aapplegate','gw');

});

When(/^Create a Personal Account$/, async function(){

    await accountCreationScenario.createPersonalAccount();

});

When(/^Create a Workers Compensation Policy$/, async function(){

    await wcCreationScenario.createWorkersCompensationPolicy();

});

Then(/^Successfully create the Workers Compensation Policy$/, async function(){

    await wcCreationScenario.verifyIssuePolicy();    

});