import { AccountCreationScenario } from "../../scenarios/AccountCreationScenario";
import {onApp} from "../../../../pageregistry/onApp";

const onPCApp = new onApp("PC");
const accountCreation = new AccountCreationScenario();
const { Given, When, Then } = require("@cucumber/cucumber");
Given(/^a Personal Accounts$/, async function() {
    await onPCApp.loginWithUser("bbaker", "gw");
    await accountCreation.accountCreation();
});