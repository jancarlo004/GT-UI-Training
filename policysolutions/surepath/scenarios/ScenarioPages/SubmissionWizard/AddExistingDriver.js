'use strict';
import {Selector, t} from 'testcafe';

export class AddExistingDriver {
    constructor() {
        
        this.addDriverButton = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
        this.addExistingDriver = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact");
        this.firstExistingDriver = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");
       
    }

    async selectExistingDriver() {
        await t
            .click(this.addDriverButton)
            .hover(this.addExistingDriver)
            .click(this.firstExistingDriver);
    }
    
}