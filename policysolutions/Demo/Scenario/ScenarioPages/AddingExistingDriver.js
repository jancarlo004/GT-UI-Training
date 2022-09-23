'use strict';
import {Selector, t} from 'testcafe';

export class AddingExistingDriver {
    constructor() {
        
        this.addDriverButton = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
        this.addExistingDriver = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact");
        this.firstExistingDriver = Selector("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");
        this.newPerson = Selector ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType');
    }

    async selectExistingDriver() {
        await t
            .click(this.addDriverButton)
            .hover(this.addExistingDriver)
            .click(this.firstExistingDriver);
    }

    async selectNewDriver(){
        await t
        .click(this.addDriverButton)
        .click(this.newPerson);
    }
    
}