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

    async createNewContact() {
        if (world.contactType == "Company") {
            world.contact.name = "New Company Inc.";
            world.contact.taxID = "11-2222222";

            await contactTabBar_Ext.selectContactTabNewContactNewCompany();
            await newContact.newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalContactNameInputSetName.setValue(world.contact.name);
        }
        else if (world.contactType == "Person") {
            world.contact.firstName = "Donna";
            world.contact.lastName = "Smith";
            world.contact.taxID = "999-88-7777";

            await contactTabBar_Ext.selectContactTabNewContactNewPerson();
            await newContact.newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetFirstName.setValue(world.contact.firstName);
            await newContact.newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetLastName.setValue(world.contact.lastName);
        }

        await newContact.newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue("45 Rose Street");
        await newContact.newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue("Foster City");
        await t.pressKey('tab'); // trigger post on change
        await newContact.newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState.selectOptionByValue('CA');
        await newContact.contactDVAddressType.selectNthOption(1);
        await newContact.newContactContactPanelSetContactCVContactDVOfficialIDInputSetOfficialIDDV_Input.setValue(world.contact.taxID);

        await newContact.newContactUpdate.click();
    }

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
        return await contactSearch.contactSearchScreenContactSearchResultsLV.rowCount();
    }
}