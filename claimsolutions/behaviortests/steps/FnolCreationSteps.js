'use strict';
const {Given, When, Then} = require('@cucumber/cucumber');

import { onApp } from '../../../pageregistry/onApp';
import { FnolScenarios } from '../../Scenarios/FnolScenarios';



const fnolScenarios = new FnolScenarios();
const onCCApp = new onApp ('CC');


Given(/^I log into Claim Center$/, async function(){
    await onCCApp.loginWithUser("aapplegate","gw");
});
When (/^I create Claim$/, async function(){
    await fnolScenarios.claimCreation();
    
});
Then (/^Claim is created successfully$/, async function(){
    await fnolScenarios.openClaim();
    
});

