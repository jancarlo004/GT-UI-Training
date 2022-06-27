import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class IMBuildingPopup {
	iMBuildingPopupBuildingDetailsTab = PcfButton('#IMBuildingPopup-BuildingDetailsTab');
	iMBuildingPopupCancel = PcfButton('#IMBuildingPopup-Cancel');
	detailsDVAlarmCertificate = PcfTextInput('#IMBuildingPopup-DetailsDV-AlarmCertificate');
	detailsDVAlarmCertification = PcfSelectInput('#IMBuildingPopup-DetailsDV-AlarmCertification');
	detailsDVAlarmExpiration = PcfDateValueInput('#IMBuildingPopup-DetailsDV-AlarmExpiration');
	detailsDVAlarmGrade = PcfSelectInput('#IMBuildingPopup-DetailsDV-AlarmGrade');
	detailsDVAnyAreaLeased = PcfSelectInput('#IMBuildingPopup-DetailsDV-AnyAreaLeased');
	basementInputSetAreaFinished = PcfTextInput('#IMBuildingPopup-DetailsDV-BasementInputSet-AreaFinished');
	basementInputSetAreaUnfinished = PcfTextInput('#IMBuildingPopup-DetailsDV-BasementInputSet-AreaUnfinished');
	detailsDVBuildingAlarmType = PcfSelectInput('#IMBuildingPopup-DetailsDV-BuildingAlarmType');
	iMBuildingPopupDetailsDVConstructionType = PcfSelectInput('#IMBuildingPopup-DetailsDV-ConstructionType');
	iMBuildingPopupDetailsDVDescription = PcfTextInput('#IMBuildingPopup-DetailsDV-Description');
	iMBuildingPopupDetailsDVFrontExposure = PcfTextInput('#IMBuildingPopup-DetailsDV-FrontExposure');
	iMBuildingPopupDetailsDVLastUpdateHeating = PcfTextInput('#IMBuildingPopup-DetailsDV-LastUpdateHeating');
	iMBuildingPopupDetailsDVLastUpdatePlumbing = PcfTextInput('#IMBuildingPopup-DetailsDV-LastUpdatePlumbing');
	iMBuildingPopupDetailsDVLastUpdateRoofing = PcfTextInput('#IMBuildingPopup-DetailsDV-LastUpdateRoofing');
	iMBuildingPopupDetailsDVLastUpdateWiring = PcfTextInput('#IMBuildingPopup-DetailsDV-LastUpdateWiring');
	iMBuildingPopupDetailsDVLeftExposure = PcfTextInput('#IMBuildingPopup-DetailsDV-LeftExposure');
	detailsDVLocationInfo = PcfTextInput('#IMBuildingPopup-DetailsDV-LocationInfo');
	iMBuildingPopupDetailsDVNumBasements = PcfTextInput('#IMBuildingPopup-DetailsDV-NumBasements');
	iMBuildingPopupDetailsDVNumStories = PcfTextInput('#IMBuildingPopup-DetailsDV-NumStories');
	detailsDVNumber = PcfTextInput('#IMBuildingPopup-DetailsDV-Number');
	detailsDVPercentOccupied = PcfSelectInput('#IMBuildingPopup-DetailsDV-PercentOccupied');
	iMBuildingPopupDetailsDVPercentSprinklered = PcfSelectInput('#IMBuildingPopup-DetailsDV-PercentSprinklered');
	iMBuildingPopupDetailsDVRearExposure = PcfTextInput('#IMBuildingPopup-DetailsDV-RearExposure');
	iMBuildingPopupDetailsDVRightExposure = PcfTextInput('#IMBuildingPopup-DetailsDV-RightExposure');
	iMBuildingPopupDetailsDVTotalArea = PcfTextInput('#IMBuildingPopup-DetailsDV-TotalArea');
	iMBuildingPopupDetailsDVYearBuilt = PcfTextInput('#IMBuildingPopup-DetailsDV-YearBuilt');
	iMBuildingPopupEdit = PcfButton('#IMBuildingPopup-Edit');
	iMBuildingPopupIMBuildingPopup_UpLink = PcfButton('#IMBuildingPopup-IMBuildingPopup_UpLink');
	iMBuildingPopupUpdate = PcfButton('#IMBuildingPopup-Update');
	iMBuildingPopup_Paging = PcfButton('#IMBuildingPopup-_Paging');
	iMBuildingPopup__crumb__ = PcfComponent('#IMBuildingPopup-__crumb__');
	iMBuildingPopup_msgs = PcfButton('#IMBuildingPopup-_msgs');
}
