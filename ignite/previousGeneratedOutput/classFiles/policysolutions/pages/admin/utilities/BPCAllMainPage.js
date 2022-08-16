import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class BPCAllMainPage {
	sP_BPCAllMainPageAllNoteLabel = PcfTextInput('#SP_BPCAllMainPage-AllNoteLabel');
	sP_BPCAllMainPageCreate = PcfButton('#SP_BPCAllMainPage-Create');
	newProducerCodeSelectNewProducerCode = PcfButton('#SP_BPCAllMainPage-NewProducerCode-SelectNewProducerCode');
	oldProducerCodeSelectOldProducerCode = PcfButton('#SP_BPCAllMainPage-OldProducerCode-SelectOldProducerCode');
	sP_BPCAllMainPagePoliciesBatchLV = PcfListView('#SP_BPCAllMainPage-PoliciesBatchLV');
	policiesBatchLV_tbPrintExportPolicies = PcfButton('#SP_BPCAllMainPage-PoliciesBatchLV_tb-PrintExportPolicies');
	sP_BPCAllMainPageSP_BPCAllMainPage_UpLink = PcfButton('#SP_BPCAllMainPage-SP_BPCAllMainPage_UpLink');
	sP_BPCAllMainPageSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#SP_BPCAllMainPage-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	sP_BPCAllMainPageSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#SP_BPCAllMainPage-SearchAndResetInputSet-SearchLinksInputSet-Search');
	sP_BPCAllMainPageSearchBPCBatch = PcfTextInput('#SP_BPCAllMainPage-SearchBPCBatch');
	sP_BPCAllMainPageSearchBPCCreateDate = PcfDateValueInput('#SP_BPCAllMainPage-SearchBPCCreateDate');
	sP_BPCAllMainPageSearchBPCTargetDate = PcfDateValueInput('#SP_BPCAllMainPage-SearchBPCTargetDate');
	sP_BPCAllMainPage_Paging = PcfButton('#SP_BPCAllMainPage-_Paging');
	sP_BPCAllMainPage__crumb__ = PcfComponent('#SP_BPCAllMainPage-__crumb__');
	sP_BPCAllMainPage_msgs = PcfButton('#SP_BPCAllMainPage-_msgs');
}
