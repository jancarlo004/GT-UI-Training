import { ClaimTabBar } from "../../pages/navigation/tabBar/ClaimTabBar";
import { t, Selector } from "testcafe";
import { PcfButton, PcfCheckBox, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { FNOLWizard } from "../../pages/claim/FNOLWizard";
import { FNOLContactPopup } from "../../pages/popup/FNOLContact/FNOLContactPopup";


const claimTabBar = new ClaimTabBar();
const fnolWizard = new FNOLWizard();
const fnolContactP = new FNOLContactPopup();
let claimOwner = '';
let newWorld = '';


export class FnolScenarios {
    async claimCreation() {
        var claimParent = claimTabBar.tabBarClaimTab.component.parent('div[id$="gw-center-panel"]');
        !await claimTabBar.tabBarClaimTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(claimTabBar.tabBarClaimTab.component.find('div.gw-action--expand-button'));
        await claimTabBar.claimTabClaimTab_FNOLWizard.click();
        await PcfSelectInput(claimParent.find('div[id$="-FNOLWizardFindPolicyPanelSet-PolicyType"]')).selectOptionByLabel('Personal Auto');
        await t.click(claimParent.find('div[id$="-FNOLWizardFindPolicyPanelSet-Search"]'));
        await t.hover(PcfListView(claimParent.find('div[id$="-FNOLWizardFindPolicyPanelSet-PolicyResultLV"]')).component);
        await PcfListView(claimParent.find('div[id$="-FNOLWizardFindPolicyPanelSet-PolicyResultLV"]')).clickOnCell(0,0);
        await t.typeText(claimParent.find('div[id$="-FNOLWizardFindPolicyPanelSet-Claim_LossDate"]'),'09/20/2022');
        await t.click(claimParent.find('div[id$="-Next"]'));
        claimOwner = await claimParent.find('div[id$="-Insured"]').find('.gw-infoValue').innerText;
        console.log("Insured name: ", claimOwner);
        await PcfSelectInput(claimParent.find('div[id$="-ReportedBy_Name"]')).selectOptionByLabel(claimOwner);
        await t.click(claimParent.find('div[id$="-Next"]'));
        await PcfSelectInput(claimParent.find('div[id$="-LossDetailsAddressDV-Claim_LossCause"]')).selectOptionByLabel('Animal');
        await PcfSelectInput(claimParent.find('div[id$="-globalAddressContainer-Address_Picker"]')).selectFirstOptionWithValue();
        await PcfButton(claimParent.find('div[id$="-FNOLWizard_NewLossDetailsScreen-AddVehicleButton"]')).click();
        await PcfSelectInput(claimParent.find('div[id$="-FNOLVehicleIncidentScreen-Vehicle_Picker"]')).selectFirstOptionWithValue();
        await PcfButton(claimParent.find('div[id$="-FNOLVehicleIncidentScreen-OccupantLV_tb-AddDriverButton"]')).click();
        await PcfSelectInput(claimParent.find('div[id$="-ClaimContactPerson"]')).selectOptionByLabel(claimOwner);
        await PcfButton(claimParent.find('div[id$="-FNOLContactScreen-Update"]')).click();
        await PcfButton(claimParent.find('div[id$="-FNOLVehicleIncidentScreen-Update"]')).click(); 
        await PcfButton(claimParent.find('div[id$="-Next"]')).click();
        await PcfButton(claimParent.find('div[id$="-Next"]')).click();
        await PcfButton(claimParent.find('div[id$="-Finish"]')).click();
        await PcfButton(claimParent.find('div[id$="-Finish"]')).click();
        await this.getClaimNumber();
        await t.click(claimParent.find('div[id$="-NewClaimSavedDV-GoToClaim"]'));
    }

        async getClaimNumber() {

            var claimParent = PcfComponent("#gw-center-panel");
            const confirmatioVnalue = claimParent.component.find('div[id$="-NewClaimSavedDV-Header"]').textContent;
            const claimNumber = (await confirmatioVnalue).split(" ")[1];
            newWorld = claimNumber;
            console.log("Created new claim with number: " + newWorld);

        }
         async openClaim(){

             var claimParent = claimTabBar.tabBarClaimTab.component.parent('div[id$="gw-center-panel"]');
            !await claimTabBar.tabBarClaimTab.component.hasClass('gw-hasOpenSubMenu') && await t.click(claimTabBar.tabBarClaimTab.component.find('div.gw-action--expand-button'));
             await t.typeText(claimParent.find('div[id$="-ClaimTab-ClaimTab_FindClaim"]'),newWorld);
             await t.click(claimParent.find('div[id$="-ClaimTab-ClaimTab_FindClaim"]'));
            await t.wait(5000);
        }

   }






