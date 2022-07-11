'use strict'
import { onApp } from "../../../../pageregistry/onApp";
import { AutoDVPracticeCreation } from "../../scenarios/AutoDVPracticeCreation";

const { Given, When, Then } = require("@cucumber/cucumber");
const autoDVPracticeCreation = new AutoDVPracticeCreation();


When (/^I create Auto Policy in PC$/, async function(){
await autoDVPracticeCreation.IcreateAutoPolicyinPC();

});
// Then (/^Verify if the Auto Policy is binded in PC$/, async function(){
//      await autoPolicyCreation.VerifyAutoIsBound();

// });