'use strict'
import { AccountCreation } from "../../scenarios/AccountCreation";
import { t } from "testcafe"
import { onApp } from "../../../../pageregistry/onApp";
import { DetailViewPractice } from "../../scenarios/DetailViewPractice";
import { AddPermissionClaim } from "../../scenarios/AddPermissionInClaim";
import { WorkersCompensationScenario } from "../../scenarios/WorkersCompensationScenario";


const { Given } = require("@cucumber/cucumber");
const OnAppPC = new onApp("PC");
const accountCreation = new AccountCreation();
const detailViewPractice = new DetailViewPractice();
const addPermissionClaim = new AddPermissionClaim();
const workersCompensationScenario = new WorkersCompensationScenario();

Given(/^I create account in PC$/, async function() {
    await OnAppPC.loginWithUser("bbaker", "gw");
    await accountCreation.accountCreation();
  });

