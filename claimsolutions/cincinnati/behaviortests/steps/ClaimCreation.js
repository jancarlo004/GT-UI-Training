'use strict'

import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreation } from "../../../../policysolutions/JanCarloTesting/Scenarios/PolicyCreation/AccountCreation";
import { WCPolicyCreationScenario } from "../../Scenarios/WCPolicyCreationScenario";

const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const accountCreation = new AccountCreation();
const wcPolicyCreation = new WCPolicyCreationScenario();

Given(/^I create a Personal Account$/, async function(){
    await onPCApp.loginWithUser("bbaker","gw");
    await accountCreation.CreatePersonalAccount();
});

Given(/^a workers compensation policy$/, async function(){
    await wcPolicyCreation.policyCreationForWorkersCompensation();
});