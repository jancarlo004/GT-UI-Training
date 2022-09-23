'use strict'
import { AccountCreationScenario } from "../../Scenario/AccountCreationScenario";
import { onApp } from "../../../../pageregistry/onApp";
import { PAPolicyWithAddedVehicleAndDriver } from "../../Scenario/PAPolicyWithAddedVehicleAndDriver";

const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const accountCreation = new AccountCreationScenario();
const pAPolicyWithAddedDriverAndVehicle = new PAPolicyWithAddedVehicleAndDriver();


Given(/^a Personal Account$/, async function(){
    await accountCreation.createPersonalAccount();
});

When(/^I add drivers and vehicles for submission$/, async function(){
    await pAPolicyWithAddedDriverAndVehicle.submissionScenario();
});

Then(/^a PA policy is successfully created$/, async function(){
    await pAPolicyWithAddedDriverAndVehicle.verifyPolicyIsCreated();
});



