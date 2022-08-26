import { PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';
import { t } from 'testcafe';
import { IMBuildingPopup } from '../../../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/popup/IMBuilding/IMBuildingPopup';
import { IMLocationPopup } from '../../../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/popup/IMLocation/IMLocationPopup';
import { InlandMarine } from '../../../../pages/lOBWizardStepGroup/InlandMarine';
import { accountsReceivable } from '../../../../pages/policy/AccountsReceivable';

import  InlandMarineInfo  from '../../../utils/InlandMarineInfo';

const Accntreceivable = new accountsReceivable();
const IMbldgpopup = new IMBuildingPopup();
const IMbLocpopup = new IMLocationPopup();
const inlandmarine = new InlandMarine();



export class InlandMarineActions {
    constructor() {}
    
    async selectCoverageParts() {
        
        let coveragePartsCount = InlandMarineInfo.CoverageParts.length - 1;
        for (let i=0; i <= coveragePartsCount; i++) {
            let coveragePart = await InlandMarineInfo.CoverageParts[i];
            inlandmarine.submissionWizardLOBWizardStepGroupLineWizardStepSetIMPartSelectionScreenIMCoveragePartSelectionDVTEMP_0_LV_tbaddCoveragePartButton.click();
            let selectCoveragePart = inlandmarine.submissionWizardLOBWizardStepGroupLineWizardStepSetIMPartSelectionScreenIMCoveragePartSelectionDVTEMP_Component.component.find('.gw-label').withExactText(coveragePart);
            if (selectCoveragePart.exists) {                
                await t.click(selectCoveragePart);
            }                        
        }                
    }

    async addnewLocation() {        
        let locationCount = InlandMarineInfo.LocationDescription.length - 1;
        for (let i = 0; i <= locationCount; i++) {
            await inlandmarine.submissionWizardLOBWizardStepGroupLineWizardStepSetIMBuildingsScreenIMBuildingsAndLocationsLV_tbaddLocationsTB.click();
            await inlandmarine.submissionWizardLOBWizardStepGroupLineWizardStepSetIMBuildingsScreenIMBuildingsAndLocationsLV_tbaddLocationsTBAddNewLocation.click();
            await IMbLocpopup.iMLocationPopupLocationDetailDVLocationDetailInputSetLocationName.setValue(InlandMarineInfo.LocationDescription[i][0]);
            await IMbLocpopup.iMLocationPopupLocationDetailDVLocationDetailInputSetTargetedAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue(InlandMarineInfo.LocationDescription[i][1]);
            await IMbLocpopup.iMLocationPopupLocationDetailDVLocationDetailInputSetTargetedAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue(InlandMarineInfo.LocationDescription[i][2]);
            await t.pressKey('tab');
            await IMbLocpopup.iMLocationPopupLocationDetailDVLocationDetailInputSetTargetedAddressInputSetglobalAddressContainerGlobalAddressInputSetState.selectOptionByLabel(InlandMarineInfo.LocationDescription[i][3]);
            await t.pressKey('tab');
            await IMbLocpopup.iMLocationPopupUpdate.click();            
        }
        
    }
    
    async addBuilding() {
        let BldgsCount = InlandMarineInfo.BldgtoAddPerLocation.length - 1;                
        for (let i = 0; i <= BldgsCount; i++) {
            let Location = InlandMarineInfo.BldgtoAddPerLocation[i][0];
            let Bldg = InlandMarineInfo.BldgtoAddPerLocation[i][1];
            let LocationCell = inlandmarine.submissionWizardLOBWizardStepGroupLineWizardStepSetIMBuildingsScreenIMBuildingsAndLocationsComponent.component.find('td[id$=-LocationName_Cell]').withExactText(Location);
            let actionsButton = LocationCell.sibling('td[id$=-Actions_Cell]').find('div.gw-MenuIconWidget[id$=-ActionsMenuIcon]');
            await t.click(actionsButton);           
            let addBuildingButton = LocationCell.sibling('td[id$=-Actions_Cell]').find('.gw-label').withExactText("Add Building"); //need check bakit d gumagana sa 2nd row
            await t.hover(addBuildingButton);         
            let newBuildingButton = LocationCell.sibling('td[id$=-Actions_Cell]').find('.gw-label').withExactText("New Building");
            await t.click(newBuildingButton);            
            await IMbldgpopup.iMBuildingPopupDetailsDVDescription.setValue(Bldg);
            await IMbldgpopup.iMBuildingPopupUpdate.click();    
        }
        await this.StoreLocAndBldg();         
    }

    async StoreLocAndBldg() {
        let locBldgCount = InlandMarineInfo.SelectLocandBldgToStore.length - 1;
        for (let i = 0; i <= locBldgCount; i++) {
            let LocationName = InlandMarineInfo.SelectLocandBldgToStore[i][0];
            let BldgName = InlandMarineInfo.SelectLocandBldgToStore[i][1];
            let LocMap = await inlandmarine.submissionWizardLOBWizardStepGroupLineWizardStepSetIMBuildingsScreenIMBuildingsAndLocationsComponent.component.find('td[id$=-LocationName_Cell]').withText(LocationName).innerText;
            let BldgMap = await inlandmarine.submissionWizardLOBWizardStepGroupLineWizardStepSetIMBuildingsScreenIMBuildingsAndLocationsComponent.component.find('td[id$=-BuildingDescription_Cell]').withText(BldgName).innerText;
            let LocAndBldgName = LocMap + ' / ' + BldgMap            
            InlandMarineInfo.AccountsRecievabletoBeAdded[i][0] = LocAndBldgName;                
        }               
    }

    async accountsReceivable() {        
        let CoverageCount = InlandMarineInfo.AccountsRecievabletoBeAdded.length - 1;
        await Accntreceivable.BusinessClass_SelectInput.selectOptionByLabel(InlandMarineInfo.BusinessClass);
        await Accntreceivable.Coinsurance_SelectInput.selectOptionByLabel(InlandMarineInfo.Coinsurance);
        for (let i=0; i<=CoverageCount; i++) {            
            Accntreceivable.btnAdd.click();
            let LocBldg = await Accntreceivable.AccountsReceivableCoverage_Lvw.getCell(i,2);
            let Receptacle = await Accntreceivable.AccountsReceivableCoverage_Lvw.getCell(i,3);
            let Percent = await Accntreceivable.AccountsReceivableCoverage_Lvw.getCell(i,5);
            let Limit = await Accntreceivable.AccountsReceivableCoverage_Lvw.getCell(i,6);
            
            let LocBldgSelectInput = PcfSelectInput(LocBldg);
            let ReceptacleSelectInput = PcfSelectInput(Receptacle);
            let PercentSelectInput = PcfSelectInput(Percent);
            let LimitTextInput = PcfTextInput(Limit);
            await LocBldgSelectInput.selectOptionByLabel(InlandMarineInfo.AccountsRecievabletoBeAdded[i][0]);
           await ReceptacleSelectInput.selectOptionByLabel(InlandMarineInfo.AccountsRecievabletoBeAdded[i][1]);           
            await PercentSelectInput.selectOptionByLabel(InlandMarineInfo.AccountsRecievabletoBeAdded[i][2]);
            await LimitTextInput.setValue(InlandMarineInfo.AccountsRecievabletoBeAdded[i][3]);
        }
    }

}