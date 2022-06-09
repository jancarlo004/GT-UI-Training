import { PcfButton, PcfComponent,PcfTextInput,PcfListView, PcfSelectInput } from "@gtui/gt-ui-framework";

export class PAClaimCreations{

    ClaimTabBar = PcfComponent("#TabBar-ClaimTab");
    fnolWizard = PcfComponent("#TabBar-ClaimTab-ClaimTab_FNOLWizard");
    searchPolicyNumber = PcfTextInput("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-policyNumber");
    searchButton = PcfButton("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Search");
    lossDate = PcfTextInput("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Claim_LossDate");
    policyResult = PcfListView("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-PolicyResultLV");
    nextButton = PcfButton("#FNOLWizard-Next");
    nameInsured = PcfSelectInput("#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name");
    lossCause = PcfSelectInput("#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsAddressDV-Claim_LossCause");
    lossLocation = PcfSelectInput("#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsAddressDV-AddressDetailInputSetRef-CCAddressInputSet-globalAddressContainer-Address_Picker");
    addVehicle = PcfButton("#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-AddVehicleButton");
    existingVehicle = PcfSelectInput("#FNOLVehicleIncidentPopup-FNOLVehicleIncidentScreen-Vehicle_Picker");
    updateButton = PcfButton("#FNOLVehicleIncidentPopup-FNOLVehicleIncidentScreen-Update");
    finishButton = PcfButton("#FNOLWizard-Finish");
    claimCreated = PcfComponent("#NewClaimSaved-NewClaimSavedScreen-ttlBar");
    ccf
}