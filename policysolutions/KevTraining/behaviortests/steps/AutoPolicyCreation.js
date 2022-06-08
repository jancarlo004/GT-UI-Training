'use strict'
import { AutoPolicyCreation} from "../../scenarios/AutoPolicyCreation"
import { onApp } from "../../../../pageregistry/onApp";

const { Given, When, Then } = require("@cucumber/cucumber");
const autopolicyCreation = new AutoPolicyCreation();
const OnAppPC = new onApp("PC");

Given(/^I login in PC$/, async function() {
    await OnAppPC.loginWithUser("bbaker", "gw");
   
  });
When(/^I create a Personal Auto Policy$/, async function() {
    await autopolicyCreation.accountCreation();
    await autopolicyCreation.AutoPolicyCreation();
    
});
Then(/^I successfully issue a policy$/, async function() {
    await autopolicyCreation.VerifiedIssuedPolicy(); 
    
});


