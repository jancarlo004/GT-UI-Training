import { PcfButton, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class HomePolicyPages{
    accountMenuActions = PcfButton("#AccountFile-AccountFileMenuActions");
    newSubmission = PcfButton("#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission");
    selectHomeLob = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    policyType = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoveragePartType");
    coverageForm = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-CoveragePartSelectionDV-HOPCoverageForm");
    choiceDwelling  = PcfSelectInput("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-2-QuestionModalInput-ChoiceSelectInput");
    yesRadioButton = PcfButton("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput_0");
    nextButton = PcfButton("#SubmissionWizard-Next");
    inputSSN = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-AccountInfoInputSet-PolicyOfficialIDInputSet-OfficialIDDV_Input");
    fireProtectionClass = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingScreen-HOPDwellingPanelSet-HOPDwellingCV-HOPDwellingDetailsDV-HOPDwellingProtectionInputSet-ProtectionClass");
    wiringType = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-WiringType");
    wiringDate = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-WiringUpgradeDate");
    coinsurance = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-0-CoverageInputSet-CovPatternInputGroup-HOPCovACoinsurance");
    lossOfRentalIncomeNo = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDLossOfRent_1");
    prohibitedUse = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDProhibitedUse");
    quoteButton = PcfButton("#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    bindPolicy = PcfComponent("#SubmissionWizard-SubmissionWizard_QuoteScreen-JobWizardToolbarButtonSet-BindOptions");


    
    


    async selectHomeLOB(lob){
        let personalHomeLabel = this.selectHomeLob.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let selectButton = personalHomeLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }

    async issuePolicy(value) {
        await t.click(this.bindPolicy.component.find('div.gw-label').withText(value))

    }

}