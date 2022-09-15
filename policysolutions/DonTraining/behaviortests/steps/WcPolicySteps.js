import {WcPolicyScenarios} from "../../scenarios/WcPolicyScenarios";
const wccreation = new WcPolicyScenarios();

const { Given, When, Then } = require("@cucumber/cucumber");
When(/^I create Workers Compensation in PC$/, async function(){
     await wccreation.wccreation();
     
});
//Then(/^Verify if the workers compensation policy is binded in PC$/), async function(){
    //await wccreation.verifiedPolicy();

