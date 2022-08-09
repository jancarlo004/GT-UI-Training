import { PcfComponent } from '@gtui/gt-ui-framework';
import { t } from 'testcafe';
import { CustomMethods } from '../../methods/CustomMethods';
import world from '../../utils/world';


export class PC_SubmissionScenarios {

  customMethods = new CustomMethods();

  ui_SideBar = PcfComponent('#gw-west-panel');
  ui_NewSubmissionsScreen = PcfComponent('#NewSubmission-NewSubmissionScreen');
  ui_OfferingsScreen = PcfComponent('#SubmissionWizard-OfferingScreen');
  ui_ToolbarBtns = PcfComponent('#gw-center-title-toolbar');
  ui_DriversScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen');
  ui_NewDriverScreen = PcfComponent('#NewPolicyDriverPopup-ContactDetailScreen');

    async personalAutoSubmission(drivers,vehicles) {
      let ui_SideBar_Actions = this.ui_SideBar.component.find('div.gw-MenuActionsWidget[id$=-AccountFileMenuActions]');
      await t.click(ui_SideBar_Actions);
      await t.click(ui_SideBar_Actions.find('div.gw-MenuItemWidget[id$=-AccountFileMenuActions_NewSubmission]'));
      //New Submissions screen
      await this.customMethods.selectListViewValue('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV',1,'Personal Auto',0);
      //Offerings screen
      await this.customMethods.selectDropdownValue('#SubmissionWizard-OfferingScreen-OfferingSelection','Standard Program');
      await t.click(this.ui_ToolbarBtns.component.find('div.gw-WizardButtonWidget[id$=-Next]'));
      //Qualification screen
      await t.click(this.ui_ToolbarBtns.component.find('div.gw-WizardButtonWidget[id$=-Next]'));
      //Policy Info screen
      await this.customMethods.selectDropdownValue('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen-SubmissionWizard_PolicyInfoDV-PolicyInfoInputSet-TermType','Annual');
      await t.click(this.ui_ToolbarBtns.component.find('div.gw-WizardButtonWidget[id$=-Next]'));
      //Drivers screen
      await t.click(this.ui_DriversScreen.component.find('div.gw-AddButtonWidget[id$=-AddDriver]'));
      await t.doubleClick(this.ui_DriversScreen.component.find('div.gw-AddMenuItemWidget[id$=-AddExistingContact]'));
      await t.click(this.ui_DriversScreen.component.find('div.gw-AddMenuItemWidget[id$=-AddExistingContact-0-UnassignedDriver]'));
      await this.customMethods.setTextField("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-DateOfBirth",world.newAccount_Contact.birthDate);
      await this.customMethods.setTextField("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber",world.personalAutoSubmission.licenseNumber);
      await this.customMethods.selectDropdownValue("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState",world.newAccount_Contact.state);
      await t.click(this.ui_DriversScreen.component.find('div.gw-CardTabWidget[id$=-RolesCardTab]'));
      await this.customMethods.setTextField("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed",world.personalAutoSubmission.yearFirstLicensed);
      await this.customMethods.selectDropdownValue("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents",world.personalAutoSubmission.numOfAccidents_PL);
      await this.customMethods.selectDropdownValue("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfAccidents",world.personalAutoSubmission.numOfAccidents_AL);
      await this.customMethods.selectDropdownValue("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations",world.personalAutoSubmission.numOfViolations_PL);
      await this.customMethods.selectDropdownValue("#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-DriverNumberOfViolations",world.personalAutoSubmission.numOfViolations_AL)
      for(var driverCount = 1; driverCount !== drivers;){
        await t.click(this.ui_DriversScreen.component.find('div.gw-AddButtonWidget[id$=-AddDriver]'));
        await t.click(this.ui_DriversScreen.component.find('div.gw-AddMenuItemWidget[id$=AddDriver-0-ContactType]'));
        //New Drivers screen
        await this.customMethods.setTextField("#NewPolicyDriverPopup-ContactDetailScreen-PolicyDriverInfoDV-numberofaccidents","0");
        await this.customMethods.setTextField("#NewPolicyDriverPopup-ContactDetailScreen-PolicyDriverInfoDV-numberofviolations","0");
        await this.customMethods.setTextField("#NewPolicyDriverPopup-ContactDetailScreen-PolicyDriverInfoDV-yearlicensed","2001");
        await this.customMethods.setTextField("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-FirstName","Driver");
        let newDriverLastName = await this.customMethods.RandomStringGenerator(10);
        await this.customMethods.setTextField("#NewPolicyDriverPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-PolicyContactRoleNameInputSet-GlobalPersonNameInputSet-LastName",newDriverLastName);
        await t.click(this.ui_NewDriverScreen.component.find('div.gw-MenuIconWidget[id$=-LinkAddressMenuMenuIcon]'));
        await t.click(ui_)
      }
    }
  }