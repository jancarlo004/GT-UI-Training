'use strict'
import { onApp } from "../../../../pageregistry/onApp";
import { AutoPolicyCreation } from "../../scenarios/AutoPolicyCreation";

const { Given, When, Then } = require("@cucumber/cucumber");
const autoPolicyCreation = new AutoPolicyCreation();
const Onapp = new onApp();
const onAppCC = new onApp("CC");

When (/^I create Auto Policy in PC with 3 Drivers and 3 Vehicles$/, async function(){
     await autoPolicyCreation.CreateAutoPolicyWith3DriversAnd3Vehicles();

});
When (/^Verify if the Auto Policy is binded in PC$/, async function(){
     await autoPolicyCreation.VerifyAutoIsBound();

});

Then (/^Verify if the Auto Policy is Created in Claim$/, async function(){
     await onAppCC.loginWithUser("bbaker", "gw");
     await autoPolicyCreation.VerifyAutoIsCreatedInClaim();
});

Then (/^Verify if the claim is saved$/, async function(){
     await autoPolicyCreation.VerifyIfClaimIsSaved();

});

