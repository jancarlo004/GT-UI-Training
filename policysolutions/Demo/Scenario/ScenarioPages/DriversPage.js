import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfComponent,PcfListView} from "@gtui/gt-ui-framework"
import { t } from "testcafe";

export class DriversPage {
	driverDetailsCVRolesCardTab = PcfButton('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab');
	submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber');
	submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState');
	submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth = PcfDateValueInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth');
	personalAuto_VehicleDVCostNew_DV = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV');
	personalAuto_VehicleDVLicenseState_DV = PcfSelectInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV');
	personalAuto_VehicleDVVin_DV = PcfTextInput('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV');
	newPerson = PcfButton ('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType');
    addDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
    addExstingDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact");
    existingDriver = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver");
    licenseNumberForExistingDriver = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber");
    licenseStateForExistingDriver = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState");
    rolesTab = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab");
    licenseYear = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed");
    numberOfAccidentPolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents");
    numberOfAccidentAccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents");
    numberOfViolationsPolicyLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations");
    numberOfViolationsAccountLevel = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations");
    dateOfBirthForExistingDriver = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth");
    maritalStatusExistingDriver = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-MaritalStatus");
    addressLineExistingDriver = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    stateExistingDriver = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    lobListView = PcfComponent("#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV");
    driverListView = PcfListView("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV");
    driverListViewWithCheckBox = PcfComponent("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV");
    addNewDriverButton = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver");
    firstName = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName");
    lastName = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName");
    dateOfBirth = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth");
    maritalStatus = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-MaritalStatus");
    addressLine = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
    city = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City");
    state = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State");
    zipCode = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode");
    addressTypesss = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-AddressType");
    licenseNumber = PcfTextInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber");
    licenseStateForNewDrivers = PcfSelectInput("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState");
    okButtonsss = PcfButton("#NewPolicyDriverPopup-ContactDetailScreen-Update");
    addNewPerson = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-0-ContactType");
    yearFirstLicensedNewPerson = PcfTextInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed");
    numberOfAccidentPolicyLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents");
    numberOfViolationPolicyLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations");
    numberOfAccidentAccountLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfAccidents");
    numberOfViolationAccountLevelNewPerson = PcfSelectInput("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-DriverNumberOfViolations");
    nextButtonNewSubmission = PcfButton("#SubmissionWizard-Next"); 
    retrieveMVR = PcfButton("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-RetrieveMVRButton");


	async selectNewDriver(){
        await t
        .click(this.addDriverButton)
        .click(this.newPerson);
    }
}
