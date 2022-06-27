'use strict';
import { PcfButton, PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class CoveragesSubmissionWizard {

    submissionWizardCoveragesLossOfRentalIncomeNO = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDLossOfRent_1');
    submissionWizardCoveragesProhibitedUse = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-3-CoverageInputSet-CovPatternInputGroup-HOPCovDProhibitedUse');
    submissionWizardCoInsurance = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-0-CoverageInputSet-CovPatternInputGroup-HOPCovACoinsurance');
    submissionWizardValuationMethod = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPCoveragesScreen-HOPMainCoveragesPanelSet-dwellingCoveragePatternIterator-2-CoverageInputSet-CovPatternInputGroup-HOPCovCValuationMethod');
    
}