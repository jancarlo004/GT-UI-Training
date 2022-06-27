'use strict';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import {Selector, t} from 'testcafe';

export class NewClaimBasicInfoPage {
    constructor() {
        this.nameDropdown = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name');
    }
}