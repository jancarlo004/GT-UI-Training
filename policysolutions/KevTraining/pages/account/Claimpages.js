import { PcfButton, PcfCheckBox, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput} from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { world } from "../../../KevTraining/utils/world";

export class ClaimPages {

claimTab = PcfComponent('#TabBar-ClaimTab');
newClaimButton = PcfComponent('#TabBar-ClaimTab-ClaimTab_FNOLWizard');
policyNumberTextField = PcfTextInput('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-policyNumber');
searchButton = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Search');
lossDate = PcfTextInput('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Claim_LossDate');
nextButton = PcfButton('#FNOLWizard-Next');
nameClaim = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name');
lossCause = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsAddressDV-Claim_LossCause');
claimLocation = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsAddressDV-AddressDetailInputSetRef-CCAddressInputSet-globalAddressContainer-Address_Picker');
claimLevelServicesCheckbox = PcfCheckBox('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen-OtherServicesLVInputGroupInputSet-OtherServicesInputGroup-_checkbox');
newExposureButton = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_AssignSaveScreen-NewExposureLV_tb-AddExposure');
    
async selectExposure(covType11, covType22, covType33){
    let covType1 = this.newExposureButton.component.find('div.gw-MenuItemWidget[id$=-item').withText(covType11);
    let covType2 = covType1.find('div.gw-MenuItemWidget[id$=-item').withText(covType22);
    let covType3 = covType2.find('div.gw-MenuItemWidget[id$=-item').withText(covType33);
    await t.hover(covType1).hover(covType2).click(covType3);
}
claimant = PcfSelectInput('#NewClaimWizard_NewExposurePopup-NewClaimWizard_ExposurePageScreen-NewClaimExposureDV-Claimant_Picker');
injury = PcfButton('#NewClaimWizard_NewExposurePopup-NewClaimWizard_ExposurePageScreen-NewClaimExposureDV-BIDamageInputSet-Injury_Incident-Injury_IncidentMenuIcon');
newIncident = PcfButton('#NewClaimWizard_NewExposurePopup-NewClaimWizard_ExposurePageScreen-NewClaimExposureDV-BIDamageInputSet-Injury_Incident-BodilyInjuryDamageDV_NewIncidentMenuItem');
lossParty = PcfSelectInput('#NewInjuryIncidentPopup-NewInjuryIncidentScreen-InjuryIncidentDV-InjuryIncidentInputSet-LossParty');
okInjury = PcfButton('#NewInjuryIncidentPopup-NewInjuryIncidentScreen-Update');
newIncident = PcfButton('#NewClaimWizard_NewExposurePopup-NewClaimWizard_ExposurePageScreen-NewClaimExposureDV-BIDamageInputSet-Injury_Incident-BodilyInjuryDamageDV_NewIncidentMenuItem');
okExposure = PcfButton('#NewClaimWizard_NewExposurePopup-NewClaimWizard_ExposurePageScreen-Update');
addVehicleClaim = PcfButton('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-AddVehicleButton');
selectVehicleClaim = PcfSelectInput('#FNOLVehicleIncidentPopup-FNOLVehicleIncidentScreen-Vehicle_Picker');
okButtonClaim = PcfButton('#FNOLVehicleIncidentPopup-FNOLVehicleIncidentScreen-Update');
finishButton = PcfButton('#FNOLWizard-Finish');
newClaimSavedInnerText = PcfComponent('#NewClaimSaved-NewClaimSavedScreen-ttlBar');
newClaimSavedHeader = PcfComponent('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-Header');

}