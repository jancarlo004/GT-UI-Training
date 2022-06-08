import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CopyBuildingCoveragesPopup {
	copyBuildingCoveragesPopupCopyBuildingCoverage_CopyToLV = PcfListView('#CopyBuildingCoveragesPopup-CopyBuildingCoverage_CopyToLV');
	copyBuildingCoveragesPopupCopyBuildingCoveragesPopup_UpLink = PcfButton('#CopyBuildingCoveragesPopup-CopyBuildingCoveragesPopup_UpLink');
	selectFromBuildingDVSelectedBuilding = PcfTextInput('#CopyBuildingCoveragesPopup-SelectFromBuildingDV-SelectedBuilding');
	copyFromCopyFromLocationMore = PcfButton('#CopyBuildingCoveragesPopup-SelectFromBuildingDV-copyFrom-CopyFromLocationMore');
	copyBuildingCoveragesPopup_Paging = PcfButton('#CopyBuildingCoveragesPopup-_Paging');
	copyBuildingCoveragesPopup__crumb__ = PcfComponent('#CopyBuildingCoveragesPopup-__crumb__');
	copyBuildingCoveragesPopup_msgs = PcfButton('#CopyBuildingCoveragesPopup-_msgs');
	copyBuildingCoveragesPopupcancelCopyCoverages = PcfButton('#CopyBuildingCoveragesPopup-cancelCopyCoverages');
	copyBuildingCoveragesPopupcopyAllCoverages = PcfButton('#CopyBuildingCoveragesPopup-copyAllCoverages');
	copyBuildingCoveragesPopupcopyCoverage = PcfButton('#CopyBuildingCoveragesPopup-copyCoverage');
}
