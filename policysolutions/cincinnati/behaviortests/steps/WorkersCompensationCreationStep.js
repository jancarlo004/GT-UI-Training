import { Given, Then, When } from "@cucumber/cucumber";
import { t } from "testcafe";
import { AccountCreationScenario } from "../../scenarios/AccountScenarios/AccountCreationScenario";
import { WCCreationScenario } from "../../scenarios/PolicyScenarios/WCCreationScenario";

const accountCreationScenario = new AccountCreationScenario();
const wcCreationScenario = new WCCreationScenario();

Given(/^Created Personal Account$/, async function(){

    console.log('Creating a New Personal Account');
    await accountCreationScenario.createPersonalAccount();

});

When(/^Create a Workers Compensation Policy$/, async function(){

    await wcCreationScenario.createWorkersCompensationPolicy();

});

Then(/^Successfully create the Workers Compensation Policy$/, async function(){

    await wcCreationScenario.verifyIssuePolicy();
    

});