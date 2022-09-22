import { Given, When } from "@cucumber/cucumber";
import { AccountCreationScenario } from "../../scenarios/AccountScenarios/AccountCreationScenario";
import { WCCreationScenario } from "../../scenarios/PolicyScenarios/WCCreationScenario";

const accountCreationScenario = new AccountCreationScenario();
const wcCreationScenario = new WCCreationScenario();

Given(/^Created Personal Account$/, async function(){

    await accountCreationScenario.createPersonalAccount();

});

When(/^Create policy for Workers Compensation$/, async function(){

    await wcCreationScenario.createWorkersCompensationPolicy();

});

When(/^Successfully create a Workers Compensation Policy$/, async function(){

    await wcCreationScenario.verifyIssuePolicy();

});

