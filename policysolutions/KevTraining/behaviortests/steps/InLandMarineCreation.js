'use strict'
import { InLandMarineCreation } from "../../scenarios/InLandMarineCreation"
import { onApp } from "../../../../pageregistry/onApp"

const {Given, When, Then } = require("@cucumber/cucumber");
const inLandMarineCreation = new InLandMarineCreation();
const onAppPC = new onApp("PC");
const onAppCC = new onApp("CC");

When (/^I create InLand Marine policy in PC$/, async function() {
    await inLandMarineCreation.InLandMarineCreation();

});

When (/^I create an In Land Marine claim$/, async function () {
    await onAppCC.loginWithUser("bbaker", "gw");
    await inLandMarineCreation.InlandMarineClaimCreated();
    

});

Then (/^In Land Marine Claim is created$/, async function () {
    await inLandMarineCreation.verifyInlandMarineClaimIsCreated();


});
