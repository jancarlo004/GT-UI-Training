import { AddPermissionClaim } from "../../scenarios/AddPermissionInClaim";
import { onApp } from "../../../../pageregistry/onApp";

const {Given, When, Then } = require("@cucumber/cucumber");
const addPermissionClaim = new AddPermissionClaim();
const OnApp = new onApp("PC");


Given(/^I login as "su" on PolicyCenter$/, async function() {
    await OnApp.loginWithUser("su", "gw");
  });
When(/^I add (.*) to the user (.*)$/, async function(t, stepArguments)  {
  let Permission = stepArguments[0];
  let Users = stepArguments[1];
    await addPermissionClaim.addPermissionToTheUser(Permission, Users);
    
  });

When(/^I create new submission for Personal Auto product$/, async function() {
    await addPermissionClaim.createNewPersonalAutoSubmission();
  });
// When(/^I add a new note$/, async function() {
//     await addPermissionClaim.addNewNote();
//   });
// Then(/^The note was deleted$/, async function() {
//     await addPermissionClaim.deleteNote();
//   });