import{InlandMarinePolicyScenario} from "../../../DonTraining/scenarios/InlandMarinePolicyScenarios";
const { Given, When, Then } = require("@cucumber/cucumber");
const inlandmarinepolicyScenario = new InlandMarinePolicyScenario();

When(/^I create a Personal InlandMarine Policy$/, async function() {
    await inlandmarinepolicyScenario.createInlandMarinePolicy();
});