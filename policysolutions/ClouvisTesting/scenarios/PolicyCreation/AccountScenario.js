'use strict';
import { NewAccount } from "../../../pages/account/NewAccount"
import { AccountTabBar} from "../../../pages/navigation/tabBar/AccountTabBar"
import { NewPersonAccountScreen } from "../../../pages/account/NewPersonAccountScreen";
import { Summary } from "../../../pages/account/Summary";
import { t } from "testcafe";
//import world from "../../../utils/world.js";
import { AccountMenuLinks } from "../../../pages/navigation/menuLinks/AccountMenuLinks";
import { Contacts } from "../../../pages/account/Contacts";
import { ContactsMenu } from "../../../pages/other/ContactsMenu";
import { NewAccountContactPopup } from "../../../pages/popup/New/NewAccountContactPopup";
import { HomeCreationScenario } from "./homePolicyCreation";
import { PersonalAutoPolicyCreationScenario } from "./personalAutoPolicyCreationScenario";

const newAccount = new NewAccount();
const newPersonAccountScreen = new NewPersonAccountScreen();
const accountTabBar = new AccountTabBar();
const summary = new Summary();
const accountMenuLinks = new AccountMenuLinks();
const contacts = new Contacts();
const contactsMenu = new ContactsMenu();
const newAccountContactPopup = new NewAccountContactPopup();
const homeCreationScenario = new HomeCreationScenario();
const personalAutoPolicyCreationScenario = new PersonalAutoPolicyCreationScenario();

export class AccountScenario {

    async createPersonalAccount() {
        await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetFirstName.setValue("Christine");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVGlobalPersonNameInputSetLastName.setValue("Vergara");
        await newAccount.newAccountNewAccountScreenNewAccountSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();

        if(await newAccount.newAccountScreenNewAccountSearchResultsLV.rowCount() != 0){
            await newAccount.newAccountScreenNewAccountSearchResultsLV.clickOnCell(0,1);
        }
        else{
            await newAccount.newAccountScreenNewAccountButton.click();
            await newAccount.newAccountButtonNewAccount_Person.click();
            await newPersonAccountScreen.addressLine1.setValue("6220 W HEDGEHOG PL");
            await newPersonAccountScreen.city.setValue("PHOENIX");
            await newPersonAccountScreen.addressType.click();
            await newPersonAccountScreen.addressType.selectOptionByLabel("Home");
            await newPersonAccountScreen.producer.setValue("enigma");
            await t.pressKey("tab");
            await t.wait(1000);
            await newPersonAccountScreen.selectProducerCode("INT-3 Internal Producer Code - 3");
            await newPersonAccountScreen.updateButton.click();
            await summary.accountDetailsDetailViewTile_DVAccountNumber.getValue();
        }
        
    }

    async checkAccountOverview() {
        const accountStatus = await summary.accountDetailsDetailViewTile_DVAccountStatus.getValue();
        await t.expect(accountStatus).notEql(null);
    }

    async addContact(){
        await t.wait(3000);
        await accountMenuLinks.menuLinksAccountFile_AccountFile_Contacts.click();
        if(await contacts.accountFile_ContactsScreenAccountContactsLV.rowCount()==1){
            await contacts.accountContactsLV_tbaddContactButton.click();
            await t.hover(contactsMenu.accountFile_ContactsAccountFile_ContactsScreenAccountContactsLV_tbaddContactButton12roleType.component.find('div.gw-action--expand-button'));
            await contactsMenu.accountFile_ContactsAccountFile_ContactsScreenAccountContactsLV_tbaddContactButton12roleType1contactType.click();
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetGlobalPersonNameInputSetFirstName.setValue("Test");
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetGlobalPersonNameInputSetLastName.setValue("Magsino");
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue("6220 W HEDGEHOG PL");
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue("PHOENIX");
            await t.pressKey("tab");
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressType.selectOptionByLabel("Home");
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenUpdate.click();
            await t.wait(2000);
        }
        await t.pressKey('tab');
        await t.wait(2000);
        if(await contacts.accountFile_ContactsScreenAccountContactsLV.rowCount() > 1){
            for(let i=1; i < await contacts.accountFile_ContactsScreenAccountContactsLV.rowCount(); i++){
                if(await contacts.accountFile_ContactsScreenAccountContactsLV.getTextFromCell(i,2) != await contacts.accountFile_ContactsScreenAccountContactsLV.getTextFromCell(i-1,2)){
                    if(await contacts.accountFile_ContactsScreenAccountContactsLV.getTextFromCell(i,3) == "Secondary Contact" || await contacts.accountFile_ContactsScreenAccountContactsLV.getTextFromCell(i,3) == "Secondary Contact"){
                        await personalAutoPolicyCreationScenario.createPersonalAutoPolicy();
                    }else{
                        await contacts.accountContactsLV_tbaddContactButton.click();
                        await t.hover(contactsMenu.accountFile_ContactsAccountFile_ContactsScreenAccountContactsLV_tbaddContactButton12roleType.component.find('div.gw-action--expand-button'));
                        await contactsMenu.accountFile_ContactsAccountFile_ContactsScreenAccountContactsLV_tbaddContactButton12roleType1contactType.click();
                        await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetGlobalPersonNameInputSetFirstName.setValue("Test");
                        await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetGlobalPersonNameInputSetLastName.setValue("Magsino");
                        await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue("6220 W HEDGEHOG PL");
                        await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue("PHOENIX");
                        await t.pressKey("tab");
                        await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressType.selectOptionByLabel("Home");
                        await newAccountContactPopup.newAccountContactPopupContactDetailScreenUpdate.click();
                        await t.wait(2000);
                    }
                } 
            }
        }
    }
}