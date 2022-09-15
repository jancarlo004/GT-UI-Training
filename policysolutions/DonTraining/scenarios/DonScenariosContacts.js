import { t } from "testcafe";
import { DonPagesContacts } from "../pages/DonPagesContacts";
const donPagesContacts = new DonPagesContacts();

export class DonScenariosContacts{
    async createNewPerson (){
        await donPagesContacts.contactTabBar.click();
        !await donPagesContacts.contactTabBar.component.hasClass('gw-subMenu') && await t.click(donPagesContacts.contactTabBar.component.find('div.gw-action--expand-button'));   
        await donPagesContacts.selectNewPerson();
        await donPagesContacts.firstName.setValue("Elina");
        await donPagesContacts.lastName.setValue("Campilla")
        await donPagesContacts.dateOfBirth.setValue("01/26/2016");
        await donPagesContacts.maritalStatus.selectOptionByLabel("Single");
        await donPagesContacts.addressLine1.setValue("250 W 10TH AVE");
        await donPagesContacts.inputState.selectOptionByLabel("Arizona");
        await t.wait(1000);
        await donPagesContacts.addressType.selectOptionByLabel("Home");



    }

    // async createNewCompany(){

    // }
}