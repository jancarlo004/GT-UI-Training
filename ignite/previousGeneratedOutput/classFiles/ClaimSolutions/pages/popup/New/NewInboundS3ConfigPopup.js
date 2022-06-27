import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewInboundS3ConfigPopup {
	newInboundS3ConfigPopupNewInboundS3ConfigPopup_UpLink = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigPopup_UpLink');
	newInboundS3ConfigScreenCancel = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-Cancel');
	configDVArchiveS3Bucket = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-ArchiveS3Bucket');
	configDVArchiveS3Prefix = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-ArchiveS3Prefix');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVConfigArchiveDir = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-ConfigArchiveDir');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVConfigChunkSize = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-ConfigChunkSize');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVConfigName = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-ConfigName');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVDaysTilPurge = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-DaysTilPurge');
	newInboundS3ConfigPopupNewInboundS3ConfigScreenConfigDVHandlerClass = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-HandlerClass');
	configDVInputS3Prefix = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-InputS3Prefix');
	configDVInputS3UserProfile = PcfTextInput('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-ConfigDV-InputS3UserProfile');
	newInboundS3ConfigScreenEdit = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-Edit');
	newInboundS3ConfigScreenUpdate = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-Update');
	newInboundS3ConfigScreen_msgs = PcfButton('#NewInboundS3ConfigPopup-NewInboundS3ConfigScreen-_msgs');
	newInboundS3ConfigPopup_Paging = PcfButton('#NewInboundS3ConfigPopup-_Paging');
	newInboundS3ConfigPopup__crumb__ = PcfComponent('#NewInboundS3ConfigPopup-__crumb__');
}
