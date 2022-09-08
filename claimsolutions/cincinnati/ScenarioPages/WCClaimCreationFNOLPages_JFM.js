import { PcfButton, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { FNOLWizard } from "../../pages/claim/FNOLWizard";
import { ClaimTabBar } from "../../pages/navigation/tabBar/ClaimTabBar";
import { NewContactPopup } from "../../pages/popup/New/NewContactPopup";
import { t } from "testcafe";
import world from "../utils/world";
import { concat } from "lodash";

const fNOLWizard = new FNOLWizard();
const claimTabBar = new ClaimTabBar();
const newContact = new NewContactPopup();

export class WCClaimCreationFNOLPages_JFM{
    claimsTab = PcfComponent('#TabBar-ClaimTab');
    fNOLWizardFindPolicyPanelSetPolicyResultLV = PcfComponent('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-PolicyResultLV');
    fNOLWizardFindPolicyPanelSetClaim_LossDate = PcfTextInput('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Claim_LossDate');
    searchOrCreatePolicyLossDateButton = PcfButton('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Claim_LossDate_dateIcon');
    optionsReportedBy = PcfButton('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-ReportedBy_Name-ReportedBy_NameMenuIcon');
    optionsInjuredWorkerName = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-Claimant_Name');


    async newClaim(){
        await t.click(this.claimsTab.component.find('div.gw-action--expand-button'));
        await claimTabBar.claimTabClaimTab_FNOLWizard.click();
    }

    async searchOrCreatePolicy(companyName, lossDate){
        await fNOLWizard.fNOLWizardFNOLWizard_FindPolicyScreenFNOLWizardFindPolicyPanelSetGlobalContactNameInputSetName.setValue(companyName);
        await fNOLWizard.fNOLWizardFindPolicyPanelSetSearch.click();
        await this.fNOLWizardFindPolicyPanelSetClaim_LossDate.setValue(lossDate);
        await fNOLWizard.fNOLWizardNext.click();
    }

    async addNewPerson(){
        await this.optionsReportedBy.click();
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_BasicInfoScreenReportedBy_NameClaimNewPersonOnlyPickerMenuItemSetClaimNewPersonOnlyPickerMenuItemSet_NewPersonMenuItem.click();
        await newContact.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetFirstName.setValue(world.NewFirstName[1]);
        await newContact.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSet.LastName.setValue(world.NewLastName[1]);
        await newContact.newContactPopupContactDetailScreenContactBasicsDVAdditionalInfoInputSetTaxID.setValue("321-45-6547");
        await newContact.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click();
    }

    async addInjuredWorker(){
        let injuredWorkerDropdown = this.optionsInjuredWorkerName.component.find('select');
        let injuredWorker = [world.NewFirstName[1], ' ', world.NewLastName[1]].join('');
        await t.click(this.optionsInjuredWorkerName.component.find('div.gw-select-wrapper'));
        await t.click(injuredWorkerDropdown.find('option').withText(injuredWorker));
    }

    


    // async selectExistingPolicy(){
    //     let searchedPolicy = fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyResultLV.component.find('td[id$=-PolicyNumber_Cell').withExactText(world.policyNumber);
    //     let selectButton = searchedPolicy.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-selectButton]');
    //     await t.click(selectButton);
    //}
}