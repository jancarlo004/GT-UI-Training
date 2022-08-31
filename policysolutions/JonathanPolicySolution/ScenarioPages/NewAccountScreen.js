import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";


export class NewAccountScreen{

    firstName = PcfTextInput("#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-FirstName");
    lastName = PcfTextInput("#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalPersonNameInputSet-LastName");
    accountSearchButton = PcfButton("#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search");
    createNewAccountButton = PcfButton("#NewAccount-NewAccountScreen-NewAccountButton");
    newPerson = PcfButton("#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person");
    address1 = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    zipCode = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    state = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    addressType = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType");
    organizationCode = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer");
    producerCode = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode");
    updateButton = PcfButton("#CreateAccount-CreateAccountScreen-Update");
    centerSection = PcfComponent("#gw-center-bottom-section");

    existingAccountLV = PcfListView("#NewAccount-NewAccountScreen-NewAccountSearchResultsLV");
    accountName = PcfComponent("#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountNumber");

}