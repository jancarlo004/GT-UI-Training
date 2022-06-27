'use strict';
import { AdminScenarios } from "../../scenarios/AdminScenarios";
import { DistributionScenarios } from "../../scenarios/DistributionScenarios";
const { When } = require('@cucumber/cucumber');

let adminScenarios = new AdminScenarios();
let distributionScenarios = new DistributionScenarios();

When(/^today is the (.*)$/, async function (t, stepArguments) {
    let dateToMoveTo = stepArguments[0];
    await adminScenarios.moveDate(dateToMoveTo);
    await distributionScenarios.distributeUnappliedAmount();
});
