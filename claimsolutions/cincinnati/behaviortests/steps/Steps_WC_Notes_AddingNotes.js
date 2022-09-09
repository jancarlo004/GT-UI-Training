const {Given,When,Then} = require('@cucumber/cucumber');
import { onApp } from "../../../../pageregistry/onApp";
import { Scenarios_WC_ClaimCreation_ViewingClaim } from "../../Scenarios/Scenarios_WC_ClaimCreation_ViewingClaim";
import { Scenarios_WC_Notes_AddingNotes } from "../../Scenarios/Scenarios_WC_Notes_AddingNotes";

const onCCApp = new onApp("CC");
const viewClaim = new Scenarios_WC_ClaimCreation_ViewingClaim();
const addNotes = new Scenarios_WC_Notes_AddingNotes();

Given(/^I search for a workers compensation claim$/, async function(){
    await onCCApp.loginWithUser("bbaker","gw");
    await viewClaim.searchClaim();
});

When(/^I add (.*)$/, async function(t, tableHeader){
    await addNotes.addNote(tableHeader[0]);
});

Then(/^notes are added$/, async function(){
});