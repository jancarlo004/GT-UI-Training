"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert')
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/AccountScenario.js";
import {SubmissionScenario} from "../../scenarios/SubmissionScenario.js";
import { t } from "testcafe";

let onPCApp = new onApp("PC");
let CreateNewAccount = new AccountScenario();
let CreateNewSubmission = new SubmissionScenario();

Given(/^Login to Policy Center$/, async function() {
  await onPCApp.loginWithUser('bbaker', 'gw');  
});

When(/^Search for existing Account$/, async function() {
  await CreateNewAccount.createPersonalAccount();
});

When(/^Select Workers Compensation$/, async function() {  
    await CreateNewSubmission.CreateWorkersCompensation();       
});

When(/^Answer WC PreQualification Yes and No questions$/, async function(t, [], table) {
  await CreateNewSubmission.WCPreQualificationRadioButton(table.raw());           
});

When(/^WC Process$/, async function() {
  await CreateNewSubmission.WCProcess();         
});

When(/^Answer WC Supplememntal$/, async function(t, [], table) {
  await CreateNewSubmission.WCSupplemental(table.raw());             
});



// When(/^Answer WC PreQualification Total Annual Payroll$/, async function(t, [], table) {
//   await CreateNewSubmission.WCPreQualificationTextField(table.raw());  
// });

