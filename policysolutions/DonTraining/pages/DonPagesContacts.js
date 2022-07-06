import { PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";


export class DonPagesContacts{

    contactTabBar = PcfComponent("#TabBar-ContactTab");
    newContact = PcfComponent("#TabBar-ContactTab-NewContact");
    newPerson = PcfComponent("#TabBar-ContactTab-NewContact-NewPerson");
    firstName = PcfTextInput("#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-FirstName");
    lastName = PcfTextInput("#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-LastName");
    dateOfBirth = PcfTextInput("#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-DateOfBirth");
    maritalStatus = PcfSelectInput("#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-MaritalStatus");
    addressLine1 = PcfTextInput("#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    inputState = PcfSelectInput("#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    addressType = PcfSelectInput("#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressType");
    
    async selectNewPerson(){
        await t.hover(this.newContact.component).click(this.newPerson.component);
    }
}

