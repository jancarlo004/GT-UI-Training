"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { ClaimScenario } from "../../scenarios/ClaimScenario.js";
import { RecoveryScenario } from "../../scenarios/RecoveryScenario"
import { t } from "testcafe";

let onCCApp = new onApp("CC");
let claimCreationScenario = new ClaimScenario();
let recoveryScenario = new RecoveryScenario();

Given(/^with a recovery$/, async function () {
    await claimCreationScenario.openClaim();
    await recoveryScenario.createRecovery();
  });
  
  When(/^I search for the recovery$/, async function () {
    await recoveryScenario.navigateToSearchRecoveriesPage();
    await recoveryScenario.searchRecoveryByClaimNumber();
  });
  
  Then(/^the recovery is found$/, async function () {
    let resultCount = await recoveryScenario.getRecoverySearchResultCount();
    await t.expect(resultCount).eql(1);
  });