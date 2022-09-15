import { PcfButton, PcfCheckBox, PcfComponent, PcfDateValueInput, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class AccountCreationPages{
    accountTabBar = PcfComponent('#TabBar-AccountTab');
    newAccount = PcfButton('#TabBar-AccountTab-AccountTab_NewAccount');
    firstName = PcfTextInput('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName');
    lastName = PcfTextInput('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName');
    search = PcfButton('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
    newAccountCreate  = PcfComponent('#NewAccount-NewAccountScreen-NewAccountButton');
    newAccountPerson = PcfButton('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person');
    addressLine1 = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
    postalCode = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
    inputState = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
    addressType = PcfSelectInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType');
    orgName = PcfTextInput('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer');
    producerCode = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode");
    update = PcfButton('#CreateAccount-CreateAccountScreen-Update');
    searchListView = PcfListView('#NewAccount-NewAccountScreen-NewAccountSearchResultsLV'); 
    existingEnsured = PcfComponent("#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountHolder");
    

    async accountClickExpandButton() {
        await t.click(this.accountTabBar.component.find('div.gw-action--expand-button'));
    }
    
}