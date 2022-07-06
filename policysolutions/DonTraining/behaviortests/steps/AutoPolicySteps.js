import {AutoPolicyScenario} from "../../scenarios/AutoPolicyScenario";

const { Given, When, Then } = require("@cucumber/cucumber");
const autopolicyScenario = new AutoPolicyScenario();

Given(/^I create a Personal Auto Policy$/, async function() {
    await autopolicyScenario.createAutoPolicy();
});

