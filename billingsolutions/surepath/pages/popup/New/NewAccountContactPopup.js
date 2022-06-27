import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewAccountContactPopupCustom {

    firstNameInput = PcfTextInput('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-NameInputSet-GlobalPersonNameInputSet-FirstName');
    lastNameInput = PcfTextInput('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-NameInputSet-GlobalPersonNameInputSet-LastName');
    addressLine1Input = PcfTextInput('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    cityInput = PcfTextInput('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-globalAddressContainer-GlobalAddressInputSet-City');
    postalCodeInput = PcfTextInput('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-globalAddressContainer-GlobalAddressInputSet-PostalCode');
    stateSelectInput = PcfSelectInput('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-globalAddressContainer-GlobalAddressInputSet-State');
    primaryPayerRangeRadio = PcfComponent('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-PrimaryPayer');
    primaryPayerRangeRadioYesOption =  PcfComponent(this.primaryPayerRangeRadio.component.find('input').nth(0));
    addNewRolesButton = PcfButton('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-RolesLV_tb-Add');
    rolesLV = PcfListView('div#NewAccountContactPopup-NewAccountContactScreen-AccountContactCV-AccountContactDetailDV-RolesLV');
    rolesSelectInput = PcfSelectInput(this.rolesLV.component.find('div.gw-TypeKeyValueWidget').nth(0));

    // This button will appear for standalone only
    okButton = PcfButton('div#NewAccountContactPopup-NewAccountContactScreen-Update');

    // This button will appear for integrated only
    updateButton = PcfButton('div#NewAccountContactPopup-NewAccountContactScreen-UpdateButtonThatForcesCheckForDuplicates');

}
