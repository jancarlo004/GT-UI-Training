import { t } from 'testcafe';
import { NewNoteWorksheet } from '../../pages/other/NewNoteWorksheet';
import { Main_helper } from '../util/helpers/Main_Helper';
import world from '../util/world';

const mainHelper = new Main_helper();
const newNoteScreen = new NewNoteWorksheet();

export class Scenarios_WC_Notes_AddingNotes {
  
  async addNote(note) {
    //Navigation to Notes
    const ui_ClaimsActionsButton = (await mainHelper.getScreenComponent('gw-west-panel')).component.find('div.gw-MenuActionsWidget[id$=-ClaimMenuActions]');

    await t.click(ui_ClaimsActionsButton);
    await t.click(ui_ClaimsActionsButton.find('div.gw-MenuItemWidget[id$=-ClaimMenuActions_NewNote]'));

    //Notes Activity Screen
    const notesScreen = "NewNoteWorksheet-NewNoteScreen";

    await mainHelper.selectOptionDropdown("Topic",note,notesScreen);
    await mainHelper.selectOptionDropdown("Security Type",world.newNotesInput.securityTypeDropdown[2],notesScreen);
    await t.typeText((await mainHelper.getScreenComponent(notesScreen)).component.find('div.gw-TextAreaValueWidget[id$=-Body]'),world.newNotesInput.textTextfield);
    await newNoteScreen.newNoteScreenUpdate.click();
  }
}