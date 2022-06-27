'use strict';
import {Selector, t} from 'testcafe';
import { PcfComponent, PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class OfferingScreen {
    constructor() {
        
        this.offeringSelection = PcfComponent("#SubmissionWizard-OfferingScreen-OfferingSelection");
    }

    async selectofferingSelection(valueToSelect) {
        await t.click(this.offeringSelection.component);
		await t.click(this.offeringSelection.component.find('option').withText(valueToSelect));
    }

}