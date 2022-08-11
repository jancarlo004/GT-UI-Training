"use strict";

const { Given, When, Then } = require("@cucumber/cucumber");

import { onApp } from "../../../../pageregistry/onApp";
import { CreateAccountPA2 } from "../../scenarios/CreateAccountPA2";
import { CreatePersonalAutoScenarios2 } from "../../scenarios/CreatePersonalAutoScenarios2";

const createAccountPA2= new CreateAccountPA2();
const onPCApp = new onApp("PC");
const createPersonalAutoScenarios2= new CreatePersonalAutoScenarios2();

Given(/^Create Account or Search Existing Account for PA$/, async function () {
    await onPCApp.loginWithUser('aapplegate', 'gw');
    await createAccountPA2.createPersonAccount();
});

When(/^Create Personal Auto Policy with three drivers and vehicles$/, async function () {
    await createPersonalAutoScenarios2.createPersonalAuto();
});

Then(/^Personal Auto Policy with three drivers and vehicles issued succesfully$/, async function () {
    let status = "Submission (Bound)";
    await createPersonalAutoScenarios2.verify_policy_issued_successfully(status);
});