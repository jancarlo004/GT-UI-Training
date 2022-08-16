import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ADSMatchingCompaniesPopup {
	aDSMatchingCompaniesPopupADSMatchingCompaniesLV = PcfListView('#ADSMatchingCompaniesPopup-ADSMatchingCompaniesLV');
	aDSMatchingCompaniesLV_tbCancel = PcfButton('#ADSMatchingCompaniesPopup-ADSMatchingCompaniesLV_tb-Cancel');
	aDSMatchingCompaniesLV_tbEdit = PcfButton('#ADSMatchingCompaniesPopup-ADSMatchingCompaniesLV_tb-Edit');
	aDSMatchingCompaniesLV_tbUpdate = PcfButton('#ADSMatchingCompaniesPopup-ADSMatchingCompaniesLV_tb-Update');
	aDSMatchingCompaniesPopupADSMatchingCompaniesPopup_UpLink = PcfButton('#ADSMatchingCompaniesPopup-ADSMatchingCompaniesPopup_UpLink');
	aDSMatchingCompaniesPopup_Paging = PcfButton('#ADSMatchingCompaniesPopup-_Paging');
	aDSMatchingCompaniesPopup__crumb__ = PcfComponent('#ADSMatchingCompaniesPopup-__crumb__');
	aDSMatchingCompaniesPopup_msgs = PcfButton('#ADSMatchingCompaniesPopup-_msgs');
}
