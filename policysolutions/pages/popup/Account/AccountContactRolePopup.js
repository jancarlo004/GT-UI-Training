import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class AccountContactRolePopup {
	accountContactInputSetMVRReportButton = PcfButton('#AccountContactRolePopup-AccountContactInputSet-MVRReportButton');
	accountContactInputSetdatecompletedtrainingclass = PcfDateValueInput('#AccountContactRolePopup-AccountContactInputSet-datecompletedtrainingclass');
	accountContactInputSetgooddriverdiscount = PcfComponent('#AccountContactRolePopup-AccountContactInputSet-gooddriverdiscount');
	accountContactInputSetnumberofaccidents = PcfSelectInput('#AccountContactRolePopup-AccountContactInputSet-numberofaccidents');
	accountContactInputSetnumberofviolations = PcfSelectInput('#AccountContactRolePopup-AccountContactInputSet-numberofviolations');
	accountContactInputSetstudent = PcfComponent('#AccountContactRolePopup-AccountContactInputSet-student');
	accountContactInputSettrainingclasstype = PcfSelectInput('#AccountContactRolePopup-AccountContactInputSet-trainingclasstype');
	accountContactInputSetyearlicensed = PcfTextInput('#AccountContactRolePopup-AccountContactInputSet-yearlicensed');
	accountContactRolePopupAccountContactInputSetIndustryCodeSelectIndustryCode = PcfButton('#AccountContactRolePopup-AccountContactInputSet-IndustryCode-SelectIndustryCode');
	accountContactInputSetRelationship = PcfSelectInput('#AccountContactRolePopup-AccountContactInputSet-Relationship');
	accountContactRolePopupAccountContactRolePopup_UpLink = PcfButton('#AccountContactRolePopup-AccountContactRolePopup_UpLink');
	accountContactRolePopupCancel = PcfButton('#AccountContactRolePopup-Cancel');
	accountContactRolePopupEdit = PcfButton('#AccountContactRolePopup-Edit');
	accountContactRolePopupUpdate = PcfButton('#AccountContactRolePopup-Update');
	accountContactRolePopup_Paging = PcfButton('#AccountContactRolePopup-_Paging');
	accountContactRolePopup__crumb__ = PcfComponent('#AccountContactRolePopup-__crumb__');
	accountContactRolePopup_msgs = PcfButton('#AccountContactRolePopup-_msgs');
}
