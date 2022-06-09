"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { SubmissionScenario } from "../../scenarios/SubmissionScenario.js";
import { t } from "testcafe";
import { addAbortSignal } from "stream";

let submissionScenario = new SubmissionScenario();

Then(/^a billing event is created$/, async function() {
  await t.expect(await submissionScenario.getTotalBilled()).gt(0);
  
});

var x = ["sasha","Lexi","Mia"]
for(var i = 0; i < 3;i++) { 
 console.log(x[i])

}
