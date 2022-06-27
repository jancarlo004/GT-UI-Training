'use strict';
import { PcfButton, PcfComponent } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class PaymentScreen {
    bindOptionsButton = PcfButton('#SubmissionWizard-SubmissionWizard_PaymentScreen-JobWizardBillingToolbarButtonSet-BindOptions');
    issuePolicyButton = PcfButton('#SubmissionWizard-SubmissionWizard_PaymentScreen-JobWizardBillingToolbarButtonSet-BindOptions-BindAndIssue');

}