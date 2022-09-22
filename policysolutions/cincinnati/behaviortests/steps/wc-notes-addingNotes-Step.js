import { Given, Then, When } from "@cucumber/cucumber";
import { onApp } from "../../../../pageregistry/onApp";
import { SearchClaim } from "../../scenarios/ClaimScenario/SearchClaim";
import { ClaimAddNotes } from "../../scenarios/ClaimScenario/wc-notes-addingNotes-Scenario";
import { WCClaimScenario } from "../../scenarios/ClaimScenario/WCClaimScenario";


const onCCApp = new onApp('CC');
const searchClaim = new SearchClaim();
const claimAddNotes = new ClaimAddNotes();

Given(/^a workers compensation Claim$/, async function(){

    await onCCApp.loginWithUser('ssmith','gw');
    await searchClaim.searchClaim();
    
});

When(/^I add (.*)$/, async function(t,stepArguments){

    let topic = stepArguments[0];

    switch (topic) {

        case 'General':

            await claimAddNotes.addNotes(topic);
            
            break;

        case 'First notice of loss':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Coverage':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Investigation':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Medical issues':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Evaluation':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Settlement':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Subrogation':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Salvage':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Litigation':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Denial':
            
            await claimAddNotes.addNotes(topic);
            break;

        case 'Reinsurance':
            
            await claimAddNotes.addNotes(topic);
            break;
    
        default:
            break;
    }
    
});

Then(/^notes is added$/, async function(){

    await claimAddNotes.successfulyAddClaimNotes();
    
});

