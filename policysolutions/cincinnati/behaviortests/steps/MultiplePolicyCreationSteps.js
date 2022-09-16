import { Given, When, Then } from "@cucumber/cucumber";
import { t } from "testcafe";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreationScenario } from "../../scenarios/AccountScenarios/AccountCreationScenario";
import { HOCreationScenario } from "../../scenarios/PolicyScenarios/HOCreationScenario";
import { IMCreationScenario } from "../../scenarios/PolicyScenarios/IMCreationScenario";
import { PACreationScenario } from "../../scenarios/PolicyScenarios/PACreationScenario";
import { SubmissionScenario } from "../../scenarios/PolicyScenarios/SubmissionScenario";
import { CustomMethod } from "../../util/CustomMethod";
import { SearchPolicyScenario } from "../../scenarios/SearchScenarios/SearchPolicyScenario";

const onPCApp = new onApp('PC');
const accountCreationScenario = new AccountCreationScenario();
const paCreationScenario = new PACreationScenario();
const hoCreationScenario = new HOCreationScenario();
const imCreationScenario = new IMCreationScenario();
const customMethod = new CustomMethod(); 
const submissionScenario = new SubmissionScenario();

Given(/^Login as a Producer$/, async function(){

    await onPCApp.loginWithUser('aapplegate','gw');
    await customMethod.getCurrentDate();
    await customMethod.getPastDate(10);


});

When(/^Create a Personal Account$/, async function(){

    await accountCreationScenario.createPersonalAccount();

});

When(/^Create Personal Auto LOB$/, async function(){

    await paCreationScenario.createPersonalAutoPolicy();

})

When(/^Create Property LOB$/, async function(){

    await hoCreationScenario.createHomeOwnersScenario();

})

When(/^Create Inland Marine LOB$/, async function(){

    await imCreationScenario.createInlandMarinePolicy();

})

Then(/^Verify newly created policy$/, async function(){

    await submissionScenario.verifyIssuePolicy();
})

