'use strict';
import { PcfButton, PcfComponent, PcfListView } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class NewSubmissionScreen {

    productSelectionLV = Selector('div#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV');
    quoteButton = PcfButton("#SubmissionWizard-OfferingScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote");
    detailsButton = PcfButton("#UWBlockProgressIssuesPopup-IssuesScreen-DetailsButton");
    RiskAnalysisTable = PcfListView("#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV");
    RiskAnalysisTablecomp = PcfComponent("#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV-EvaluationIssuesCard");
    
    ApproveButton = PcfButton("#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV-RiskEvaluationPanelSet-Approve");
    RiskAnalysisUpdateButton = PcfButton("#RiskApprovalDetailsPopup-Update");	
    popupApproveBtn = PcfButton("#RiskApprovalDetailsPopup-Update");


    constructor() {
        this.personalAutoProductButton = Selector("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-8-addSubmission");
    }

    async selectProduct(product) {
        let productNameCell = this.productSelectionLV.find('td[id$=-Name_Cell]').withExactText(product);
        let selectButton = productNameCell.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]');
        await t.click(selectButton);
    }
}