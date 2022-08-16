import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class Page {
	bMTSearch_SP_PageBMTSearch_SP_Page_UpLink = PcfButton('#BMTSearch_SP_Page-BMTSearch_SP_Page_UpLink');
	batchSearch_SP_DVBatchNumber = PcfTextInput('#BMTSearch_SP_Page-BatchSearch_SP_DV-BatchNumber');
	bMTSearch_SP_PageBatchSearch_SP_DVCreatedByUserBrowseMenuItem = PcfComponent('#BMTSearch_SP_Page-BatchSearch_SP_DV-CreatedBy-UserBrowseMenuItem');
	destinationContactSelectDestinationContact = PcfButton('#BMTSearch_SP_Page-BatchSearch_SP_DV-DestinationContact-SelectDestinationContact');
	batchSearch_SP_DVFromCreationDate = PcfDateValueInput('#BMTSearch_SP_Page-BatchSearch_SP_DV-FromCreationDate');
	batchSearch_SP_DVFromTargetDate = PcfDateValueInput('#BMTSearch_SP_Page-BatchSearch_SP_DV-FromTargetDate');
	bMTSearch_SP_PageBatchSearch_SP_DVSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#BMTSearch_SP_Page-BatchSearch_SP_DV-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	bMTSearch_SP_PageBatchSearch_SP_DVSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#BMTSearch_SP_Page-BatchSearch_SP_DV-SearchAndResetInputSet-SearchLinksInputSet-Search');
	sourceContactSelectSourceContact = PcfButton('#BMTSearch_SP_Page-BatchSearch_SP_DV-SourceContact-SelectSourceContact');
	batchSearch_SP_DVStatusTypeKeyCell = PcfSelectInput('#BMTSearch_SP_Page-BatchSearch_SP_DV-StatusTypeKeyCell');
	batchSearch_SP_DVToCreationDate = PcfDateValueInput('#BMTSearch_SP_Page-BatchSearch_SP_DV-ToCreationDate');
	batchSearch_SP_DVToTargetDate = PcfDateValueInput('#BMTSearch_SP_Page-BatchSearch_SP_DV-ToTargetDate');
	bMTSearch_SP_PageListOfBatchesLV = PcfListView('#BMTSearch_SP_Page-ListOfBatchesLV');
	listOfBatchesLV_tbSetToCanceled = PcfButton('#BMTSearch_SP_Page-ListOfBatchesLV_tb-SetToCanceled');
	listOfBatchesLV_tbSetToReadyToRetry = PcfButton('#BMTSearch_SP_Page-ListOfBatchesLV_tb-SetToReadyToRetry');
	bMTSearch_SP_Page_Paging = PcfButton('#BMTSearch_SP_Page-_Paging');
	bMTSearch_SP_Page__crumb__ = PcfComponent('#BMTSearch_SP_Page-__crumb__');
	bMTSearch_SP_Page_msgs = PcfButton('#BMTSearch_SP_Page-_msgs');
}
