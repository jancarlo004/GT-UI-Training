'use strict'
import { PcfButton,PcfComponent,PcfSelectInput,PcfTextInput } from "@gtui/gt-ui-framework"
import { t } from "testcafe";

export class DriverScreen {

    addDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
    addExstingDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact");
    existingDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");
    licenseNumber = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber");
    licenseState = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState");
    rolesTab = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab");
    licenseYear = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed");
    numberOfAccidentPolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents");
    numberOfAccidentAccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents");
    numberOfViolationsPolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations");
    numberOfViolationsAccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations");
    dateOfBirth = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth");
    lobListView = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    async SelectExistingDriver(){
        // let existingDriver = this.addExstingDriver.component.find('.gw-subMenu').find('.gw-label').withText("Jan Magsino");
        await t 
            .click(this.addDriver.component)
            .hover(this.addExstingDriver.component)
            .click(this.existingDriver.component);
    }
}

