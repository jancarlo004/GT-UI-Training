import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreationScenario } from "../../scenarios/AccountScenarios/AccountCreationScenario";
import world from "../../util/world";


const onPCApp = new onApp('PC');
const accountCreationScenario = new AccountCreationScenario();

Given(/^Login to PolicyCenter as a Producer$/, async function(){

    await onPCApp.loginWithUser('aapplegate','gw');

});

When(/^Create (.*) Account$/, async function(t,stepArguments){

    let accountType = stepArguments[0];

    switch (accountType) {

        case 'Personal':
           
            await accountCreationScenario.createPersonalAccount();

            break;
        
        case 'Company':

            await accountCreationScenario.createCompanyAccount();

            break;

        default:
            break;
    }

});

Then(/^Successfully create the (.*) Account$/, async function(t,stepArguments){

    let accountType = stepArguments[0];

    switch (accountType) {

        case 'Personal':
            
            await accountCreationScenario.accountCreationValidation(world.PrimaryInsuredInformation.PersonalInfo.fullName);

            break;
        
        case 'Company':

            await accountCreationScenario.accountCreationValidation(world.CompanyInsuredInfo.CompanyInfo.companyName);

            break;

        default:
            break;
    }

});

