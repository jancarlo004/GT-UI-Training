import { PcfButton, PcfComponent, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { ClaimSummary } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/claim/claimSummaryGroup/ClaimSummary";
import { ClaimMenuActions } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/navigation/menuActions/ClaimMenuActions";
import { NewNoteWorksheet } from "../../../../ignite/previousGeneratedOutput/classFiles/claimsolutions/pages/other/NewNoteWorksheet";

const claimMenuActions = new ClaimMenuActions();
const newNoteWorksheet = new NewNoteWorksheet();
const claimSummary = new ClaimSummary();

export class ClaimAddNotes{

    notes = '';

    async addNotes(notes){

        await claimMenuActions.claimClaimMenuActions.click();
        await claimMenuActions.claimMenuActions_NewOtherClaimMenuActions_NewNote.click();

        if(await newNoteWorksheet.newNoteWorksheetNewNoteScreenNoteDetailDVTopic.getSelectedOptionLabel() != 'General'){

            await newNoteWorksheet.newNoteWorksheetNewNoteScreenNoteDetailDVTopic.selectOptionByLabel(notes);

        }   
       
        this.notes = notes + ' Public Notes';

        await newNoteWorksheet.newNoteWorksheetNewNoteScreenNoteDetailDVSecurityType.selectOptionByLabel('Public');

        let text = newNoteWorksheet.newNoteScreenUpdate.component.parent().sibling().find('div[id$="-Body_Input"]').withText('Text');
        await t.typeText(text.find('div[id$="-Body"]'), this.notes);
        await newNoteWorksheet.newNoteScreenUpdate.click();

    }

    async successfulyAddClaimNotes(){

        let verifyThis = await claimSummary.claimSummaryScreenNotesLV.component.find('div[id$="-'+0+'-Body_Input"]').innerText;

        await t.expect(this.notes).contains(verifyThis);
        console.log('Successfully add a note to the Claim!');

    }

}