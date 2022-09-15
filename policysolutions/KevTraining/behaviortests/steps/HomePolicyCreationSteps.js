'use strict'
import { HomePolicyCreation } from "../../../KevTraining/scenarios/HomePolicyCreation"
import { onApp } from "../../../../pageregistry/onApp"

const { Given, When, Then } = require("@cucumber/cucumber");
const homePolicyCreation = new HomePolicyCreation();
const OnAppPC = new onApp("PC");

When (/^I create home policy in PC$/, async function() {
    await homePolicyCreation.homePolicyCreation();
    

});
Then (/^Verify if the home policy is binded in PC$/, async function() {

    await homePolicyCreation.verifyHomeIsBound();

});