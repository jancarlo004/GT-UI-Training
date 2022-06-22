'use strict'
import { onApp } from "../../../../pageregistry/onApp";
import { AutoPolicyCreation } from "../../scenarios/AutoPolicyCreation";

const { Given, When, Then } = require("@cucumber/cucumber");
const autoPolicyCreation = new AutoPolicyCreation();
const Onapp = new onApp();

When (/^I create Auto Policy in PC with 3 Drivers and 3 Vehicles$/, async function(){
     await autoPolicyCreation.CreateAutoPolicyWith3DriversAnd3Vehicles();

});
Then (/^Verify if the Auto Policy is binded in PC$/, async function(){
     await autoPolicyCreation.VerifyAutoIsBound();

});