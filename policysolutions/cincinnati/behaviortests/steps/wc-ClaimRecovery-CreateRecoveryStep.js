import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { CreateClaimRecoveryScenario } from "../../scenarios/ClaimScenario/CreateClaimRecoveryScenario";
import { WCClaimScenario } from "../../scenarios/ClaimScenario/WCClaimScenario";


const onCCApp = new onApp('CC');
const wcClaimScenario = new WCClaimScenario();
const createClaimRecoveryScenario = new CreateClaimRecoveryScenario();

Given(/^a Workers Compensation Claim$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');
    await wcClaimScenario.WCClaimCreation();
    await wcClaimScenario.claimValidation();
    
});

When(/^I create a Recovery$/, async function(){
    
    await createClaimRecoveryScenario.createClaimRecovery(); 

});

Then(/^Recovery is created$/, async function(){

    await createClaimRecoveryScenario.verifyClaimRecovery();

})