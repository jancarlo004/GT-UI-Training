const {Given,When,Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { PC_AccountScenarios } from "../../scenarios/PC_AccountScenarios";
import { PC_SubmissionScenarios } from "../../scenarios/PC_SubmissionScenarios";

const onPCApp = new onApp("PC");
const pc_AccountScenarios = new PC_AccountScenarios();
const pc_SubmissionScenarios = new PC_SubmissionScenarios();


Given(/^Im a user with a Producer Role in PC$/, async function(){
    await onPCApp.loginWithUser("aapplegate", "gw");
});

When(/^I create a new account$/, async function(){
    //await pc_AccountScenarios.createNewAccount();
    await pc_AccountScenarios.searchExistingPersonalAccount('0499080656');
});

When(/^issue a personal auto policy$/, async function(){
    await pc_SubmissionScenarios.personalAutoSubmission();
});

Then(/^account and policy successfully created$/, async function(){
});