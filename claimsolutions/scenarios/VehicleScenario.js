import { CCTabBarHelper } from "../utils/CCTabBarHelper";
import { CCUtil } from "../utils/CCUtil";
import { ClaimTabBar } from "./ScenarioPages/ClaimTabBar";
import { ClaimMenuActions } from "../pages/navigation/menuActions/ClaimMenuActions";
import { NewServiceRequest } from "../pages/other/NewServiceRequest";
import { NewContactPopup } from "../pages/popup/New/NewContactPopup";
import { ActionsMenu } from "../../claimsolutions/scenarios/ScenarioPages/ActionsMenu";
import { SelectServicesPopup } from "../../claimsolutions/pages/popup/Select/SelectServicesPopup"
import { ClaimMenuLinks } from "../../claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks"
import { ClaimPolicyVehicles } from "../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyVehicles"
import { t,Selector } from "testcafe";
import { PcfCheckBox, PcfComponent, PcfListView,PcfSelectInput,PcfTextInput } from "@gtui/gt-ui-framework";
import world from "../utils/world";

const ccTabBarHelper = new CCTabBarHelper();
const ccUtil = new CCUtil();
const claimTabbar = new ClaimTabBar();
const actionMenu = new ActionsMenu();
const claimMenuActions = new ClaimMenuActions();
const newServiceRequest = new NewServiceRequest();
const newcontactpopup = new NewContactPopup();
const selectservicesespopup = new SelectServicesPopup();
const claimmenulinks = new ClaimMenuLinks();
const claimpolicyvehicles = new ClaimPolicyVehicles();


export class VehicleScenario {                             
   
    vehiclelistview = PcfListView("#ClaimPolicyVehicles-ClaimPolicyVehiclesScreen-VehiclesLV");
    vehiclecomponent = PcfComponent("#ClaimPolicyVehicles-ClaimPolicyVehiclesScreen-VehiclesLV");
    vehicleFieldscomponent = PcfComponent("#ClaimPolicyVehicles-ClaimPolicyVehiclesScreen-PolicyVehicleDetailPanelSet-PolicyVehicleDetailDV");
    vehicleDetailCardcomponent = PcfComponent("#ClaimPolicyVehicles-ClaimPolicyVehiclesScreen-VehicleDetailCard");

    async AddVehicle() {
        await claimmenulinks.menuLinksClaim_ClaimPolicyGroup.click();
        await claimmenulinks.claim_ClaimPolicyGroupClaimPolicyGroup_ClaimPolicyVehicles.click();
        await claimpolicyvehicles.claimPolicyVehiclesScreenAdd.click();
        //For mapping practice purpose only
        // await this.MakeInputField("Make", "Chevrolet");
        // await this.ModelInputField("Model", "Impala");
        // await this.YearInputField("Year","2005");
        // await this.StyleSelectOptionbyValue("Style","Passenger car");
        // await this.VINInputField("VIN","2G1WF52E859253569");
        // await this.colorInputField("Color","Red");
        // await this.StateSelectOptionbyValue("State","Arizona");
        // await this.UpdateButton();
        // This is how usually mapping is
         await claimpolicyvehicles.policyVehicleDetailDVMake.setValue("Audi");
        await claimpolicyvehicles.policyVehicleDetailDVModel.setValue("A6");
        await claimpolicyvehicles.policyVehicleDetailDVYear.setValue("2012");
        await claimpolicyvehicles.policyVehicleDetailDVStyle.selectOptionByLabel("Passenger car");
        await claimpolicyvehicles.policyVehicleDetailDVVIN.setValue("WAUBGAFC9CN078261");
        await claimpolicyvehicles.policyVehicleDetailDVColor.setValue("White");
        await claimpolicyvehicles.policyVehicleDetailDVState.selectOptionByLabel("Arizona");

        if (world.addCoverageToVehicle = true)
        {
            await this.AddCoverageToVehicle();
        }

         await claimpolicyvehicles.policyVehicleDetailPanelSet_tbUpdate.click();
         
    }

    async AddCoverageToVehicle() {
        let coverageCount = world.arrVehicleCoverageType.length - 1;
        for (let i=0; i<=coverageCount; i++) {  
            await claimpolicyvehicles.editableVehicleCoveragesLV_tbAdd.click();                               
           
            let Type = await this.listview.getCell(i,1);
            let ExposureLimit = await this.listview.getCell(i,2);
            let IncidentLimit = await this.listview.getCell(i,3);              
            let Typedropdown = PcfSelectInput(Type);
            let Exposureinputtext = PcfTextInput(ExposureLimit);
            let Incidentinputtext = PcfTextInput(IncidentLimit);
            await Typedropdown.selectOptionByLabel(world.arrVehicleCoverageType[i]);
            await Exposureinputtext.setValue(world.arrVehiclCoverageExposureLimit[i]);
            await Incidentinputtext.setValue(world.arrVehiclCoverageIncidentLimit[i]);
            
        }        
    }

    async DeleteVehicle() {    
        await claimmenulinks.menuLinksClaim_ClaimPolicyGroup.click();
        await claimmenulinks.claim_ClaimPolicyGroupClaimPolicyGroup_ClaimPolicyVehicles.click();           
        let countofvehicile = world.arrVehiclestoSelect.length-1;        
        for (let i=0;i<= countofvehicile; i++)
        {
            let carmake = world.arrVehiclestoSelect[i];                        
            let vehiclecheckbox = await this.vehiclecomponent.component.find('td[id$=-Make_Cell]').withExactText(carmake);                                    
            let cb = vehiclecheckbox.sibling('.gw-CellWidget').find('div.gw-IteratorEntryCheckBoxWidget[id$=-_Checkbox]');            
            await t.click(cb);                
                                     
        }     
        await claimpolicyvehicles.claimPolicyVehiclesScreenRemove.click();
    }

    async MakeInputField(txtFieldName, value) {
        let make = this.vehicleFieldscomponent.component.find('.gw-label').withExactText(txtFieldName).sibling('.gw-value').find('div.gw-TextValueWidget[id$=-Make]');        
        await t.typeText(make, value);        
    }

    async ModelInputField(txtFieldName, value) {
        let model = this.vehicleFieldscomponent.component.find('.gw-label').withExactText(txtFieldName).sibling('.gw-value').find('div.gw-TextValueWidget[id$=-Model]');        
        await t.typeText(model, value);            
    }

    async YearInputField(txtFieldName, value) {
        let year = this.vehicleFieldscomponent.component.find('.gw-label').withExactText(txtFieldName).sibling('.gw-value').find('div.gw-TextValueWidget[id$=-Year]');        
        await t.typeText(year, value);             
    }

    async StyleSelectOptionbyValue(dropdownName, value) {
        let style = this.vehicleFieldscomponent.component.find('.gw-label').withExactText(dropdownName).sibling('.gw-value').find('div.gw-TypeKeyValueWidget[id$=-Style]');        
        let styledd = PcfSelectInput(style);
        await styledd.selectOptionByLabel(value);
            
    }

    async VINInputField(txtFieldName, value) {
        let vin = this.vehicleFieldscomponent.component.find('.gw-label').withExactText(txtFieldName).sibling('.gw-value').find('div.gw-TextValueWidget[id$=-VIN]');        
        await t.typeText(vin, value);             
    }

    async colorInputField(txtFieldName, value) {
        let color = this.vehicleFieldscomponent.component.find('.gw-label').withExactText(txtFieldName).sibling('.gw-value').find('div.gw-TextValueWidget[id$=-Color]');        
        await t.typeText(color, value);             
    }

    async StateSelectOptionbyValue(dropdownName, value) {
        let state = this.vehicleFieldscomponent.component.find('.gw-label').withExactText(dropdownName).sibling('.gw-value').find('div.gw-TypeKeyValueWidget[id$=-State]');        
        let statedd = PcfSelectInput(state);
        await statedd.selectOptionByLabel(value);
            
    }

    async UpdateButton(){
        let updatebtn = this.vehicleDetailCardcomponent.component.find('div.gw-ToolbarButtonWidget[id$=-Update]')
        await t.click(updatebtn);
    }
}