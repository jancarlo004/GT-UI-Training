import { PcfButton, PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class AutoDVPages{
    accountMenuActions = PcfComponent("#AccountFile-AccountFileMenuActions");
    lobSelectionLV = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    offeringScreen = PcfComponent("#SubmissionWizard-OfferingScreen");
    offeringNextButton = PcfComponent("#gw-center-title-toolbar");
    preQualificationLV = PcfComponent("#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV");
    qualificationNextButton = PcfComponent("#gw-center-title-toolbar");
    policyInfoNextButton = PcfComponent("#gw-center-title-toolbar");
    driverScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen");
    driverNextButton = PcfComponent("#gw-center-title-toolbar");
    vehicleScreen = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen");
    vehiclesNextButton = PcfComponent("#gw-center-title-toolbar");
    paCoveragesNextButton = PcfComponent("#gw-center-title-toolbar");
    riskAnalysisNextButton = PcfComponent("#gw-center-title-toolbar");
    policyReviewQuoteButton = PcfButton("#gw-center-title-toolbar");


    

    
    

    
    





}