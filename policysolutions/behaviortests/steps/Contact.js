"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { ContactScenario } from "../../scenarios/ContactScenario.js";


let onPCApp = new onApp("PC");
let contactScenario = new ContactScenario();

Given(/^Login to PC$/, async function() {
    await onPCApp.loginWithUser('bbaker ', 'gw');
  });


When(/^Search an existing contact$/, async function (t) {
   await contactScenario.searchForContact("First and Last Name");
});

Then(/^Check if contact exists$/, async function (t) {
    await contactScenario.checkContactSearchResult();
 });