"use strict";

const { Given, When, Then } = require("@cucumber/cucumber");

import { onApp } from "../../../../pageregistry/onApp";
import { CreateAccountPA2 } from "../../scenarios/CreateAccountPA2";

const onPCApp = new onApp("PC");
const createAccountPA2= new CreateAccountPA2();

Given(/^Login to Policy Center$/, async function () {
    await onPCApp.loginWithUser('aapplegate', 'gw');
});

When(/^Create account$/, async function () {
    await createAccountPA2.createPersonAccount();
});

Then(/^Account created succesfully for PA$/, async function () {

});