
const { Given, When, Then } = require("@cucumber/cucumber");
import {DonScenariosContacts} from "../../../DonTraining/scenarios/DonScenariosContacts"
import { onApp } from "../../../../pageregistry/onApp";

const donScenariosContacts = new DonScenariosContacts();
const onPCApp = new onApp("PC");

Given(/^a known (.*)$/, async function(t, stepArguments) {

    await onPCApp.loginWithUser("bbaker","gw");
    let contactType = stepArguments[0];
    if(contactType == "Person"){
        await donScenariosContacts.createNewPerson();
    }else {
        // await donScenariosContacts.createNewCompany();
    }

});
