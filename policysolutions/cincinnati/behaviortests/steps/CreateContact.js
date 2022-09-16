import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";

const onPCApp = new onApp('PC');


Given(/^Login on PolicyCenter as a Producer$/, async function(){

    await onPCApp.loginWithUser('aapplegate','gw');

});

When(/^Create a Person Contact$/, async function(){

    

});

When(/^Create a Company Contact$/, async function(){

    

});

Then(/^Successfully create a Contact$/, async function(){

    

});