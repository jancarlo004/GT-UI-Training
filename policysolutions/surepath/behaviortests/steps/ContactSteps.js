'use strict';
const { Given, When, Then } = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { ContactScenario } from "../../scenarios/ContactScenario";
import world from "../../utils/world.js";

let onPCApp = new onApp("PC");
let contactScenario = new ContactScenario();

Given(/^a known (.*)$/, async function (t, stepArguments) {
    world.contactType = stepArguments[0];
    await onPCApp.navigateToApp();
    await onPCApp.loginWithDefaultUser();
    await contactScenario.createNewContact();
});

When(/^I search for that policy with their (.*)$/, async function (t, stepArguments) {
    let searchCriteria = stepArguments[0];
    await contactScenario.searchForContact(searchCriteria);
});

Then(/^the contact was found$/, async function (t) {
    let response = await contactScenario.checkContactSearchResult();
    await t.expect(response).gt(0);
});