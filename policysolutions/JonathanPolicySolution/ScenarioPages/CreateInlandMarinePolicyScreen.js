import { PcfButton, PcfComponent, PcfTextInput, PcfSelectInput, PcfListView, PcfCheckBox } from "@gtui/gt-ui-framework";
import { exists } from "fs";
import {Selector, t} from 'testcafe';
import world from "../util/world";


export class CreateInlandMarinePolicyScreen{
    
    actionMenus = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmissionMenu = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    effectiveDate = PcfTextInput("#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultPPEffDate");
    centerSection = PcfComponent("#gw-center-bottom-section");
    productSelectionLV = Selector('div#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');
    organizationType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-OrganizationType");
    submissionNextButton = PcfButton("#SubmissionWizard-Next");
    submissionQuoteButton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    bindOnlyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly");
    issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
    viewSubmissionLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob");
    viewPolicyLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy");
    newPolicyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");
    bindOptionsButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
    addCoveragePartButton = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton");
    accountsReceivable = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-0-eachpart");
    contractorsEquipment = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-1-eachpart");
    signs = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV_tb-addCoveragePartButton-2-eachpart");
    addCoveragePartLV = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartSelectionScreen-IMCoveragePartSelectionDV-TEMP_0_LV");

    //buildings and locations
    buildingsAndLocationsLV = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV");
    addNewBuildingCaret = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-ActionsMenuIcon");
    addBuildingButton = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-AddBuilding");
    selectNewBuilding = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMBuildingsScreen-IMBuildingsAndLocationsLV-0-Actions-AddBuilding-AddNewBuilding");

    newBuildingDesc = PcfTextInput("#IMBuildingPopup-DetailsDV-Description");
    newBuildingUpdateButton = PcfButton("#IMBuildingPopup-Update");

    //Accounts Receivable
    businessClass = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-businessClass");
    coinsurancePCT = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-coinsurance");
    acctsReceivableCB = PcfCheckBox("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-0-CoverageInputSet-CovPatternInputGroup-_checkbox");
    acctsReceivableDescription = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-StringTermInput");
    acctsReceivableLimit = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARPartLevelInformationDV-0-CoverageInputSet-CovPatternInputGroup-1-CovTermInputSet-CovTermDirectInputSet-DirectTermInput");
    acctAddCov = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-Add");
    aRCLV = PcfListView("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-IMARPanelSet-IMARItemDV-3");

    //contractors equipment
    contractorType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-contrEqContractorType");
    contractorsRentedEqp = PcfCheckBox("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-partLevelCovs-0-CoverageInputSet-CovPatternInputGroup-_checkbox");
    contractorsRentedEqpLimit = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-IMPartScreen-ContractorsEquipmentPartPanelSet-partLevelCovs-0-CoverageInputSet-CovPatternInputGroup-0-CovTermInputSet-CovTermDirectInputSet-DirectTermInput");
    
    bindOnlyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly");
    issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
    viewSubmissionLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob");
    viewPolicyLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy");
    newPolicyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");

    async selectProduct(product) {
        let productNameCell = this.productSelectionLV.find('td[id$=-Name_Cell]').withExactText(product);
        let selectButton = productNameCell.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.wait(1000);
        await t.click(selectButton);
    }

    async addCoveragePart(){
        let partSelectOptions = world.coveragePartSelectionOptions.length - 1;
        for(let i = 0; i <= partSelectOptions; i++ ){
            await t.click(this.addCoveragePartButton);
            let partsSelect = world.coveragePartSelectionOptions[i];
            let coveragePartLV = this.addCoveragePartLV.component.find('div.gw-MenuItemWidget[id$=-eachpart]').find('.gw-label').withText(partsSelect);
            await t.click(coveragePartLV);
        }
    }

    async addNewBuildingAction(){
        //loop count based sa # ng locations dun sa array mo
        let addBuildingsLocations = this.buildingsAndLocationsLV.component.find('td[id$=-LocationName_Cell]').withExactText('1: 85008, Phoenix, AZ'); 
        let actionsButton = addBuildingsLocations.sibling('td[id$=-Actions_Cell]').find('div.gw-MenuIconWidget[id$=-ActionsMenuIcon]');
        await t.click(actionsButton);
        await t.hover(this.addBuildingButton);
        await t.click(this.selectNewBuilding);
    }

    async accountReceivableScreen(bClass, coPCT, resDes, rLmt){
        await this.businessClass.selectOptionByLabel(bClass);
        await this.coinsurancePCT.selectOptionByLabel(coPCT);
        await this.acctsReceivableCB.click();
        await this.acctsReceivableDescription.setValue(resDes);
        await this.acctsReceivableLimit.setValue(rLmt);
        
        //locs = this.buildingsAndLocationsLV.component.find('td[id$=-LocationName_Cell]').withExactText('1: 85008, Phoenix, AZ').innerText(); 
        
    }

    async addAccntsResCov(bldg, rType, prcnt, lmt){
        await this.acctAddCov.click();
        const rowcount = await this.aRCLV.rowCount() - 1;
    
        if (rowcount >= 0) {
            let ARCCount = await this.aRCLV.rowCount() - 1;
            let locBuilding = await this.aRCLV.getCell(ARCCount, 2);
            let recepType = await this.aRCLV.getCell(ARCCount, 3);
            let percentDupli = await this.aRCLV.getCell(ARCCount, 5);
            let ARCLimit = await this.aRCLV.getCell(ARCCount, 6);
  
            let locBuildingDP = PcfSelectInput(locBuilding);
            let recepTypeDP = PcfSelectInput(recepType);
            let percentDupliDP = PcfSelectInput(percentDupli);
            let ARCLimitTest = PcfTextInput(ARCLimit);

            await locBuildingDP.selectOptionByLabel(bldg);
            await recepTypeDP.selectOptionByLabel(rType);
            await percentDupliDP.selectOptionByLabel(prcnt);
            await ARCLimitTest.setValue(lmt); 
            await this.submissionNextButton.click();
            }
    }

    // async contractorsEquipmentScreen(){
    //     await this.contractorType.setValue("Small Contractor");
    //     await this.contractorsRentedEqp.click();
    //     await this.contractorsRentedEqpLimit.setValue("501");
    //     await this.submissionNextButton.click();
    //     await this.submissionNextButton.click();
    // }

    // async signsScreen(){
    //     await this.contractorType.setValue("Small Contractor");
    //     await this.contractorsRentedEqp.click();
    //     await this.contractorsRentedEqpLimit.setValue("501");
    //     await this.submissionNextButton.click();
    //     await this.submissionNextButton.click();
    // }

    







}