"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/AccountScenario.js";
import {SubmissionScenario} from "../../scenarios/SubmissionScenario.js";
import { t } from "testcafe";

let onPCApp = new onApp("PC");
let CreateNewAccount = new AccountScenario();
let CreateNewSubmission = new SubmissionScenario();

Given(/^Login to PC$/, async function() {
  await onPCApp.loginWithUser('bbaker', 'gw');
});

When(/^Create new Account$/, async function() {
  await CreateNewAccount.createPersonalAccount();
});

Then(/^Create a new Policy$/, async function(t, stepArguments) {
  let LOB = stepArguments[0];
  if (LOB = "Personal Auto") {
    await CreateNewSubmission.createPASubmission();  
    await CreateNewSubmission.quoteSubmission();
    await CreateNewSubmission.issueSubmission();
    let date = new Date();
    let yesterday =  date.setDate(date.getDate() - 1);
  }
  else {
    console.log("The selected LOB is not Personal Auto")
  }
  
 
  

});


