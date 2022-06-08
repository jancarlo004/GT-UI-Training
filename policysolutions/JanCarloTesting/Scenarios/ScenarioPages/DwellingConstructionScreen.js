import { PcfSelectInput,PcfTextInput } from "@gtui/gt-ui-framework"

export class DwellingConstructionScreen{

    wiring = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-WiringType");
    wiringYear = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-HOPDwellingConstructionScreen-HOPDwellingConstructionPanelSet-HOPDwellingConstructionDetailsDV-WiringUpgradeDate");

}