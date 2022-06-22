import { PcfButton, PcfComponent,PcfTextInput,PcfListView, PcfSelectInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class PAClaimCreations{

    ClaimTabBar = PcfComponent("#TabBar-ClaimTab");
    fnolWizard = PcfComponent("#TabBar-ClaimTab-ClaimTab_FNOLWizard");
    searchPolicyNumber = PcfTextInput("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-policyNumber");
    searchButton = PcfButton("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Search");
    lossDate = PcfTextInput("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Claim_LossDate");
    policyResult = PcfListView("#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-PolicyResultLV");
    nextButton = PcfButton("#FNOLWizard-Next");
    nameInsureds = PcfSelectInput("#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name");
    lossCause = PcfSelectInput("#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsAddressDV-Claim_LossCause");
    lossLocation = PcfSelectInput("#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsAddressDV-AddressDetailInputSetRef-CCAddressInputSet-globalAddressContainer-Address_Picker");
    addVehicle = PcfButton("#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-AddVehicleButton");
    existingVehicle = PcfSelectInput("#FNOLVehicleIncidentPopup-FNOLVehicleIncidentScreen-Vehicle_Picker");
    updateButton = PcfButton("#FNOLVehicleIncidentPopup-FNOLVehicleIncidentScreen-Update");
    finishButton = PcfButton("#FNOLWizard-Finish");
    claimCreated = PcfComponent("#NewClaimSaved-NewClaimSavedScreen-ttlBar");
    claimSaveLink = PcfButton("#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-GoToClaim");
    claimMenuActions = PcfButton("#Claim-ClaimMenuActions");
    collision = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-0-item-0-item");
    coverageType = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType");
    cLabel = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewExposure-NewExposureMenuItemSet-NewExposureMenuItemSet_ByCoverageType-0-item");
    insuredName = PcfComponent("#Claim-ClaimInfoBar-Insured");
    claimant = PcfSelectInput("#NewExposure-NewExposureScreen-NewExposureDV-NewClaimVehicleDamageDV-Claimant_Picker");
    type = PcfSelectInput("#NewExposure-NewExposureScreen-NewExposureDV-NewClaimVehicleDamageDV-Claimant_Type");
    addExposureButton = PcfButton("#NewExposure-NewExposureScreen-Update");
    reserve= PcfButton("#Claim-ClaimMenuActions-ClaimMenuActions_NewTransaction-ClaimMenuActions_NewTransaction_ReserveSet");
    editReserveListView = PcfListView("#NewReserveSet-NewReserveSetScreen-ReservesSummaryDV-EditableReservesLV");
    saveButton = PcfButton("#NewReserveSet-NewReserveSetScreen-Update");
    financialListView = PcfListView("#ClaimFinancialsTransactions-ClaimFinancialsTransactionsScreen-TransactionsLV");
    serviceRequest = PcfButton("#Claim-ClaimMenuActions-ClaimNewOtherMenuItemSet-ClaimMenuActions_NewOther-ClaimMenuActions_NewServiceRequest");
    addServiceListview = PcfComponent("#SelectServicesPopup-SpecialistServiceTreeLV");
    addServiceButton = PcfButton("#NewServiceRequest-NewServiceRequestScreen-NewServiceRequestDV-InstructionServicesLV_tb-AddMultipleServices");
    okButton = PcfButton("#SelectServicesPopup-UpdateServiceRequestServices");
    requestType = PcfSelectInput("#NewServiceRequest-NewServiceRequestScreen-NewServiceRequestDV-Kind");
    addName = PcfButton("#NewServiceRequest-NewServiceRequestScreen-NewServiceRequestDV-Specialist-SpecialistMenuIcon");
    autoBodyrepairShop = PcfComponent("#NewServiceRequest-NewServiceRequestScreen-NewServiceRequestDV-Specialist-ClaimNewServiceRequestSpecialistPickerMenuItemSet-NewVendor-NewAutoRepairShop");
    newVendor = PcfComponent("#NewServiceRequest-NewServiceRequestScreen-NewServiceRequestDV-Specialist-ClaimNewServiceRequestSpecialistPickerMenuItemSet-NewVendor");
    serviceAddress = PcfSelectInput("#NewServiceRequest-NewServiceRequestScreen-NewServiceRequestDV-NewServiceRequestInstructionInputSet-ServiceAddressPicker");
    addMenuIcon = PcfButton("#NewServiceRequest-NewServiceRequestScreen-NewServiceRequestDV-NewServiceRequestInstructionInputSet-CustomerContact-CustomerContactMenuIcon");
    relationToInsured = PcfSelectInput("#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-Claim_ReportedByType");
    autoRepairShopName = PcfTextInput("#NewContactPopup-ContactDetailScreen-ContactBasicsDV-OrganizationName-GlobalContactNameInputSet-Name");
    autoRepairShopUpdateButton = PcfButton("#NewContactPopup-ContactDetailScreen-ContactBasicsDV_tb-ContactDetailToolbarButtonSet-CustomUpdateButton");
    submitButton = PcfButton("#NewServiceRequest-SubmitButton");

    async getCollisionExposure(){
        await t.hover(this.coverageType.component).hover(this.cLabel.component).click(this.collision.component);
    }

    async createAutoBodyRepairShopButton(){
        await t.hover(this.newVendor.component).click(this.autoBodyrepairShop.component);
        await this.autoRepairShopName.setValue("JCM Auto Repair Shop");
        await this.autoRepairShopUpdateButton.click();
        await t.wait(1000);
        await this.submitButton.click();
    }
}

  