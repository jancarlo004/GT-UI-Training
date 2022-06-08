import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class BADriverPopup {
	bADriverPopupBADriverPopup_UpLink = PcfButton('#BADriverPopup-BADriverPopup_UpLink');
	bADriversDVDateOfBirth = PcfDateValueInput('#BADriverPopup-BADriverScreen-BADriversDV-DateOfBirth');
	bADriversDVGender = PcfSelectInput('#BADriverPopup-BADriverScreen-BADriversDV-Gender');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetFirstName = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-FirstName');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetFirstNameKanji = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-FirstNameKanji');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetLastName = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-LastName');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetLastNameKanji = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-LastNameKanji');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetNameSummary = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-NameSummary');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetMiddleName = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-MiddleName');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetParticle = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-Particle');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetPrefix = PcfSelectInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-Prefix');
	bADriverPopupBADriverScreenBADriversDVGlobalPersonNameInputSetSuffix = PcfSelectInput('#BADriverPopup-BADriverScreen-BADriversDV-GlobalPersonNameInputSet-Suffix');
	bADriversDVHireDate = PcfDateValueInput('#BADriverPopup-BADriverScreen-BADriversDV-HireDate');
	bADriversDVLicenseNumber = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-LicenseNumber');
	bADriversDVLicenseState = PcfSelectInput('#BADriverPopup-BADriverScreen-BADriversDV-LicenseState');
	bADriversDVMaritalStatus = PcfSelectInput('#BADriverPopup-BADriverScreen-BADriversDV-MaritalStatus');
	bADriversDVYearLicensed = PcfTextInput('#BADriverPopup-BADriverScreen-BADriversDV-YearLicensed');
	bADriversDVYearsExperience = PcfSelectInput('#BADriverPopup-BADriverScreen-BADriversDV-YearsExperience');
	bADriverScreenCancel = PcfButton('#BADriverPopup-BADriverScreen-Cancel');
	bADriverScreenEdit = PcfButton('#BADriverPopup-BADriverScreen-Edit');
	bADriverScreenUpdate = PcfButton('#BADriverPopup-BADriverScreen-Update');
	bADriverScreen_msgs = PcfButton('#BADriverPopup-BADriverScreen-_msgs');
	bADriverPopup_Paging = PcfButton('#BADriverPopup-_Paging');
	bADriverPopup__crumb__ = PcfComponent('#BADriverPopup-__crumb__');
}
