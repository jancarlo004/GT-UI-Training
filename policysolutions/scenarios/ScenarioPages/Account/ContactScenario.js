import {ContactSearch} from "../../pages/search/ContactSearch"
import {NewContact} from "../../pages/contact/newContact/NewContact"
import {ContactTabBar_Ext} from "../scenarios/ScenarioPages/Contact/ContactTabBar_Ext"
import { t } from 'testcafe';
import world from "../utils/world"

const contactSearch = new ContactSearch();
const newContact = new NewContact();
const contactTabBar_Ext = new ContactTabBar_Ext();

export class ContactScenario {
    constructor() {}

    async searchForContact(searchCriteria) {
        await contactTabBar_Ext.selectContactTabBarContactSearch();
        
        await contactSearch.contactSearchScreenContactType.selectOptionByValue(world.contactType);

        if (searchCriteria == "First and Last Name") {
            await contactSearch.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetFirstName.setValue(world.contact.firstName);
            await contactSearch.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalPersonNameInputSetLastName.setValue(world.contact.lastName)
        }
        else if (searchCriteria == "Name")
            contactSearch.contactSearchContactSearchScreenBasicContactInfoInputSetGlobalContactNameInputSetName.setValue(world.contact.name);
        else if (searchCriteria == "Tax ID")
            await contactSearch.basicContactInfoInputSetTaxID.setValue(world.contact.taxID);
        
        await contactSearch.contactSearchContactSearchScreenSearchAndResetInputSetSearchLinksInputSetSearch.click();
    }

    async checkContactSearchResult() {
        let rowCount
        rowCount =  await contactSearch.contactSearchScreenContactSearchResultsLV.rowCount();
        if (rowCount > 1) {
            return "Contact has been found!" 
        }
        else {
            return "Contact not found!" 
        }
    }
}