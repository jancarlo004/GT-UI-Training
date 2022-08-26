"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { t } from "testcafe";
import { RiskAnalysisScenario } from "../../scenarios/RiskAnalysisScenario";

let onPCApp = new onApp("PC");
let riskAnalysisScenario = new RiskAnalysisScenario();

Given(/^Login to PC to experiment Risk Analysis$/, async function() {
    await onPCApp.loginWithUser('ssmith', 'gw');
});

When(/^Search Submission$/, async function() {
    await riskAnalysisScenario.SearchForSubmission();
    await riskAnalysisScenario.ApproveRiskAnalysis();
});