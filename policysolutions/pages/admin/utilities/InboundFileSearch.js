import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class InboundFileSearch {
	inboundFileSearchScreenInboundFileConfigs = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileConfigs');
	inboundFileSearchSearchPanelInboundFileSearchArchiveLocationHeader = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchArchiveLocationHeader');
	inboundFileSearchSearchPanelInboundFileSearchChecksumHeader = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchChecksumHeader');
	inboundFileSearchSearchPanelInboundFileSearchEndingDate = PcfDateValueInput('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchEndingDate');
	inboundFileSearchSearchPanelInboundFileSearchFileStatus = PcfSelectInput('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchFileStatus');
	inboundFileSearchSearchPanelInboundFileSearchHandlerName = PcfTextInput('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchHandlerName');
	inboundFileSearchSearchPanelInboundFileSearchHandlerNameHeader = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchHandlerNameHeader');
	inboundFileSearchSearchPanelInboundFileSearchInputLocationHeader = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchInputLocationHeader');
	inboundFileSearchSearchPanelInboundFileSearchLoadDateHeader = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchLoadDateHeader');
	inboundFileSearchSearchPanelInboundFileSearchMessageHeader = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchMessageHeader');
	inboundFileSearchSearchPanelInboundFileSearchStartingDate = PcfDateValueInput('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchStartingDate');
	inboundFileSearchSearchPanelInboundFileSearchStatusHeader = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-InboundFileSearchStatusHeader');
	inboundFileSearchInboundFileSearchScreenInboundFileSearchSearchPanelSearchAndResetInputSetSearchLinksInputSetReset = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-SearchAndResetInputSet-SearchLinksInputSet-Reset');
	inboundFileSearchInboundFileSearchScreenInboundFileSearchSearchPanelSearchAndResetInputSetSearchLinksInputSetSearch = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-SearchAndResetInputSet-SearchLinksInputSet-Search');
	inboundFileSearchSearchPanel_ListPaging = PcfButton('#InboundFileSearch-InboundFileSearchScreen-InboundFileSearchSearchPanel-_ListPaging');
	inboundFileSearchScreen_msgs = PcfButton('#InboundFileSearch-InboundFileSearchScreen-_msgs');
	inboundFileSearchInboundFileSearch_UpLink = PcfButton('#InboundFileSearch-InboundFileSearch_UpLink');
	inboundFileSearch_Paging = PcfButton('#InboundFileSearch-_Paging');
	inboundFileSearch__crumb__ = PcfComponent('#InboundFileSearch-__crumb__');
}
