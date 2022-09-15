import {AutoPolicyScenario} from "../../scenarios/AutoPolicyScenario";
const autopolicyScenario = new AutoPolicyScenario();
const { Given, When, Then } = require("@cucumber/cucumber");
When(/^I create a Personal Auto Policy$/, async function() {
    await autopolicyScenario.createAutoPolicy();
});

