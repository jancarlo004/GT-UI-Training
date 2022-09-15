import { AutoDVScenarios } from "../../../DonTraining/scenarios/AutoDVScenarios";
const autodvScenarios = new AutoDVScenarios();
const { Given, When, Then } = require("@cucumber/cucumber");

When(/^I create Auto Policy in PC$/, async function() {
    await autodvScenarios.createDvPaPolicy();
});