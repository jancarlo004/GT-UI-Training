'use strict'
//import { onApp } from "../../../pageregistry/onApp";
import { onApp } from "../../../pageregistry/onApp.js";
import { AccountCreation } from "../../scenarios/Account/AccountCreation.js";
import { AccountCreationScenario } from "../../scenarios/PolicyCreation/accountCreationScenario.js";

const {Given, When, Then} = require("@cucumber/cucumber");
const accountcreation = new AccountCreation();
const onPCApp = new onApp("PC");

Given(/^Login to PolicyCenter$/, async function(){
    await onPCApp.loginWithUser('ssmith','gw');
});
When(/^I create a New Account$/, async function(){
    await accountcreation.createAccount();
});
Then(/^Account is successfully created$/, async function(){
    //await accountcreation.createdAccountSuccessfully();
});