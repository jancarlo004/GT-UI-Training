import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreationScenario } from "../../scenarios/AccountScenarios/AccountCreationScenario";
import world from "../../util/world";

const onPCApp = new onApp('PC');
const accountCreationScenario = new AccountCreationScenario();

Given(/^Login to PolicyCenter as a producer$/, async function(){

    await onPCApp.loginWithUser('aapplegate','gw');

});

When(/^Create a new (.*) Account$/, async function(t,stepArguments){

    let accountType = stepArguments[0];
    switch (accountType) {
        case 'Personal':

            console.log('Creating Personal Account');
            await accountCreationScenario.createPersonalAccount();
            break;
            
        case 'Company':
                
            console.log('Creating Company Account');
            await accountCreationScenario.createCompanyAccount();
            break;
    
        default:
            break;
    }

});

Then(/^Successfully create a new (.*) Account$/, async function(t,stepArguments){
    
    let accountType = stepArguments[0];
    switch (accountType) {

        case 'Personal':
        
            await accountCreationScenario.accountCreationValidation(world.PrimaryInsuredInformation.PersonalInfo.fullName);
            console.log(accountType+' Account is successfully created!');
            break;
            
        case 'Company':
                
            await accountCreationScenario.createCompanyAccount(world.CompanyInsuredInfo.CompanyInfo.companyName);
            console.log(accountType+' Account is successfully created!');
            break;
    
        default:
            break;
    }


});
