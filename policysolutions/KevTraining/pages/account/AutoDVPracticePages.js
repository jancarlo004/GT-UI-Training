'use strict'
import { t } from "testcafe";
import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework"
import { world } from "../../../KevTraining/utils/world";

export class AutoDVPracticePages{
accountMenuActions = PcfComponent('#AccountFile-AccountFileMenuActions');
searchResultLV = PcfListView('#NewAccount-NewAccountScreen-NewAccountSearchResultsLV');
productSelectionLV = PcfComponent('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');
offeringScreen = PcfComponent('#SubmissionWizard-OfferingScreen');
offeringScreenCenterToolbar = PcfComponent('#SubmissionWizard-OfferingScreen-0');
preQualificationLV = PcfComponent('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV');
qualificationScreen = PcfComponent('#SubmissionWizard-SubmissionWizard_PreQualificationScreen');
policyInfoScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen');
driversScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen');
insuredName = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-AccountDetailsDetailViewTile-AccountDetailsDetailViewTile_DV-AccountHolder');
vehicleScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen');
}