import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class CopyCoveragesPopup {
	copyCoveragesPopupCopyCoverage_CopyToLV = PcfListView('#CopyCoveragesPopup-CopyCoverage_CopyToLV');
	copyCoveragesPopupCopyCoveragesPopup_UpLink = PcfButton('#CopyCoveragesPopup-CopyCoveragesPopup_UpLink');
	copyCoveragesPopup_Paging = PcfButton('#CopyCoveragesPopup-_Paging');
	copyCoveragesPopup__crumb__ = PcfComponent('#CopyCoveragesPopup-__crumb__');
	copyCoveragesPopup_msgs = PcfButton('#CopyCoveragesPopup-_msgs');
	copyCoveragesPopupcancelCopyCoverages = PcfButton('#CopyCoveragesPopup-cancelCopyCoverages');
	copyCoveragesPopupcopyAllCoverages = PcfButton('#CopyCoveragesPopup-copyAllCoverages');
	copyCoveragesPopupcopyCoverage = PcfButton('#CopyCoveragesPopup-copyCoverage');
	selectFromVehicleDVcopyFrom = PcfSelectInput('#CopyCoveragesPopup-selectFromVehicleDV-copyFrom');
}
