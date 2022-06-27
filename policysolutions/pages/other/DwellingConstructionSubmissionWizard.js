'use strict'
import { PcfComponent, PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { splitCommaSeparatedValueStringIntoArray } from '@gtui/gt-ui-framework/bin/scripts/test-runners/utils/runner-utils';
import { t } from 'testcafe';


export class DwellingConstructionSubmissionWizard {
    constructor(){
        this.yearBuilt = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-YearBuilt");
        this.constructionType = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-ConstructionType');
        this.garageType = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-GarageType')
        
    }
    async selectConstructionType(valueToSelect){
        await t.click(this.constructionType.component);
        await t.click(this.constructionType.component.find('option').withText(valueToSelect)); 
    }
	async selectgarageType(valueToSelect){
        await t.cllick(this.garageType.component);
        await t.click(this.garageType.component.find('option').withText(valueToSelect));
    }
}