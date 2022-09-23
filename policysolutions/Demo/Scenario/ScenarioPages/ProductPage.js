import { PcfButton,PcfListView, PcfSelectInput,PcfComponent} from "@gtui/gt-ui-framework";
import { Selector } from "testcafe";

export class ProductPage{
    productSelect = PcfComponent ('#NewSubmission-NewSubmissionScreen-ProductOffersDV-0');
    vehiclesListDetailPanel_tbAdd = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add');
}   