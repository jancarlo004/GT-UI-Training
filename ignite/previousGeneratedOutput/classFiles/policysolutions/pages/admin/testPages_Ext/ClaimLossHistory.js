import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class ClaimLossHistory {
	claimLossHistoryDVEndDate = PcfDateValueInput('#ClaimLossHistory-ClaimLossHistoryDV-EndDate');
	claimLossHistoryDVPolicyNumber = PcfTextInput('#ClaimLossHistory-ClaimLossHistoryDV-PolicyNumber');
	claimLossHistoryDVRequestObject = PcfTextInput('#ClaimLossHistory-ClaimLossHistoryDV-RequestObject');
	claimLossHistoryDVResponseObject = PcfTextInput('#ClaimLossHistory-ClaimLossHistoryDV-ResponseObject');
	claimLossHistoryDVSearchForClaims = PcfButton('#ClaimLossHistory-ClaimLossHistoryDV-SearchForClaims');
	claimLossHistoryDVresetFields = PcfButton('#ClaimLossHistory-ClaimLossHistoryDV-resetFields');
	claimLossHistoryClaimLossHistory_UpLink = PcfButton('#ClaimLossHistory-ClaimLossHistory_UpLink');
	claimLossHistory_Paging = PcfButton('#ClaimLossHistory-_Paging');
	claimLossHistory__crumb__ = PcfComponent('#ClaimLossHistory-__crumb__');
	claimLossHistory_msgs = PcfButton('#ClaimLossHistory-_msgs');
}
