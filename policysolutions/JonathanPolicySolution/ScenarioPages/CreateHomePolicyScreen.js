import { PcfButton, PcfComponent, PcfTextInput, PcfSelectInput } from "@gtui/gt-ui-framework";
import {Selector, t} from 'testcafe';


export class CreateHomePolicyScreen{

    actionMenus = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmissionMenu = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    effectiveDate = PcfTextInput("#NewSubmission-NewSubmissionScreen-ProductSettingsDV-DefaultPPEffDate");
    centerSection = PcfComponent("#gw-center-bottom-section");
    productSelectionLV = Selector('div#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');

    policyType = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType");
    coverageForm = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm");
    whoOccupiesDwelling = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput");
    dwellingFullTime = PcfButton("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput_0");
    submissionNextButton = PcfButton("#SubmissionWizard-Next");
    fireProtectionClass = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingDetailsDV-HOPDwellingProtectionInputSet-ProtectionClass");

    coinsurance = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-0-CoverageInputSet-CovPatternInputGroup-HOPCovACoinsurance");
    rentalIcome = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDLossOfRent_0");
    civilAuthority = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDProhibitedUse");
    wiring = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-WiringType");
    submissionQuoteButton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    bindOnlyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindOnly");
    issuePolicyButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue");
    viewSubmissionLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob");
    viewPolicyLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy");
    newPolicyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");
    bindOptionsButton = PcfButton("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");
    detailsButton = PcfButton("#UWBlockProgressIssuesPopup-IssuesScreen-DetailsButton");

    HOPPreQaulification = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV");

    async selectProduct(product) {
        let productNameCell = this.productSelectionLV.find('td[id$=-Name_Cell]').withExactText(product);
        let selectButton = productNameCell.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.wait(1000);
        await t.click(selectButton);
    }


    async doYouOccupyDwellingFullTime(radioButtonLabel, value){
        let questionLabel = this.HOPPreQaulification.component.find('td[id$=-questionText_Cell]').withExactText(radioButtonLabel);
        let yesRadioButton = questionLabel.sibling('td[id$=-BooleanRadioInput_Cell]').find('div.gw-BooleanRadioValueWidget[id$=-BooleanRadioInput]').find('.gw-label--inner').withText(value);
        await t.click(yesRadioButton);
    }
 

    // async CreateReserveviaExposurePage2() {  
    //     await this.sideBarExposure_Button.click();  
    //     const rowcount = await this.exposure_Listview.rowCount() - 1;    

    //     if (rowcount > 0) {  
    //         await this.exposure_Listview.clickOnCell(0,0)
    //         await this.createReserve_Button.click();  

    //         //reserve part
    //         let reservecount = await this.newReserve_Listview.rowCount() - 1;  
    //         let costType = await this.newReserve_Listview.getCell(reservecount,3);
    //         let costCategory = await this.newReserve_Listview.getCell(reservecount,4);
    //         let newAvailableReserve = await this.newReserve_Listview.getCell(reservecount,7);
    //         let costTypeDropdown = PcfSelectInput(costType);
    //         let costCategoryDropdown = PcfSelectInput(costCategory);
    //         let AvailableReserveText = PcfTextInput(newAvailableReserve);
    //         await costTypeDropdown.selectOptionByLabel("Claim Cost");
    //         await costCategoryDropdown.selectOptionByLabel("Labor");
    //         await AvailableReserveText.setValue("1100");            
    //         await this.saveReserve_Button2.click();                      

    //     }

    // }


   

}