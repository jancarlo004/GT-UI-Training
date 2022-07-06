import {HomePolicyScenario} from "../../../DonTraining/scenarios/HomePolicyScenario";
const { Given, When, Then } = require("@cucumber/cucumber");
const homepolicyScenario = new HomePolicyScenario();

Given(/^I create a Personal HomeOwners Policy$/, async function() {
    await homepolicyScenario.createHomePolicy();
});
