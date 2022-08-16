const {Given,When,Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenarios } from "../../scenarios/AccountScenarios";

const onPCApp = new onApp("PC");
const accountScenarios = new AccountScenarios();

Given(/^I am user with a Producer role$/, async function(){
    await onPCApp.loginWithUser("aapplegate", "gw");
});

When(/^I create a new account$/, async function(){
    await accountScenarios.createNewAccount();
});

Then(/^account successfully created$/, async function(){
    await accountScenarios.getAccoutInformation();
});