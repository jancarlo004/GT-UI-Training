'use strict'

    import { AccountCreation } from "../../Scenarios/PolicyCreation/AccountCreation";
    import { onApp } from "../../../../pageregistry/onApp";
    import { PersonalAutoPolicyCreation } from "../../Scenarios/PolicyCreation/PersonalAutoPolicyCreation";
    import { HomeOwnersPolicyCreation } from "../../Scenarios/PolicyCreation/HomeOwnersPolicyCreation";
    import { InLandMarinePolicyCreation } from "../../Scenarios/PolicyCreation/InLandMarinePolicyCreation";
    import { PolicySearch } from "../../Scenarios/PolicySearch/PolicySearch";


    const {Given, When, Then} = require("@cucumber/cucumber");
    const onPCApp = new onApp("PC");
    const account = new AccountCreation();
    const autoPolicyCreation = new PersonalAutoPolicyCreation();
    const homePolicyCreation = new HomeOwnersPolicyCreation();
    const inlandMarine = new InLandMarinePolicyCreation();
    const policySearch = new PolicySearch();

    Given(/^a (.*) policy$/, async function(t, stepArguments){
        await account.CreatePersonalAccount();

        let LOB = stepArguments[0];
        switch(LOB){
            case "Personal Auto":
                await autoPolicyCreation.personalAutoPolicyCreation();
        break;
            case "Property":
                await homePolicyCreation.HomePolicyCreation();
        break;
            case "Inland Marine":
                await inlandMarine.inlandMarinePolicyCreation();
        break;
        default:
        }
    });
    
    When(/^I search for the policy$/, async function(){
        await policySearch.searchPolicy();
    });
    
    Then(/^the policy was found$/, async function(){
        await policySearch.verifyPolicyExists();
    });
    