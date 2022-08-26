"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/AccountScenario.js";
import {SubmissionScenario} from "../../scenarios/SubmissionScenario.js";
import { t } from "testcafe";

let onPCApp = new onApp("PC");
let CreateNewAccount = new AccountScenario();
let CreateNewSubmission = new SubmissionScenario();

Given(/^I Login to PC$/, async function() {  
  await onPCApp.loginWithUser('bbaker', 'gw');
});

Given(/^I Create new Account$/, async function() {
  await CreateNewAccount.createPersonalAccount();
});

Given(/^I Create a new Auto Policy$/, async function() {
  await CreateNewSubmission.createPASubmission();  
  await CreateNewSubmission.quoteSubmission();
  await CreateNewSubmission.issueSubmission();
});

Then(/^Verify Auto Policy is created$/, async function() {  
  await CreateNewSubmission.VerifyPolicyIsCreated();
});

Given(/^I Create a new HO Policy$/, async function() {
  await CreateNewSubmission.createHOSubmission();
  await CreateNewSubmission.quoteSubmission();
  await CreateNewSubmission.issueSubmission();
});

Then(/^Verify HO Policy is created$/, async function() {  
  await CreateNewSubmission.VerifyPolicyIsCreated();
});

Given(/^I Create a new HO Inland Marine$/, async function() {
  await CreateNewSubmission.createInlandMarineSubmission();
   await CreateNewSubmission.quoteSubmission();
   await CreateNewSubmission.issueSubmission();
});

// Then(/^Verify Inland Marine Policy is created$/, async function() {  
//   await CreateNewSubmission.VerifyPolicyIsCreated();
// });



// Then(/^I Create a new Policy (.*)$/, async function(t, stepArguments) {
//   let LOB = stepArguments[0];  
//   switch(LOB){
//     case "Personal Auto":
//     await CreateNewSubmission.createPASubmission();  
//     await CreateNewSubmission.quoteSubmission();
//     await CreateNewSubmission.issueSubmission();
//     // let date = new Date();
//     // let yesterday =  date.setDate(date.getDate() - 1);
//   break;
//     case "Homeowners":
//     await CreateNewSubmission.createHOSubmission();
//     await CreateNewSubmission.quoteSubmission();
//     await CreateNewSubmission.issueSubmission();
//   break;
//   default:
//     console.log("The selected LOB is not Personal Auto");
//   }
// });


