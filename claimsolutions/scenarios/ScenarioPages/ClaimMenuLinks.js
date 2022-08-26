'use strict';
import { Selector, t } from 'testcafe';

export class ClaimMenuLinks {
	claimMenuLinksClaim_ClaimSummaryGroup = Selector('#Claim-MenuLinks-Claim_ClaimSummaryGroup');
    claimMenuLinksClaim_ClaimSummaryGroupClaimSummaryGroup_ClaimSummary = Selector('#Claim-MenuLinks-Claim_ClaimSummaryGroup-ClaimSummaryGroup_ClaimSummary');
    
    async selectClaimMenuLinksClaim_ClaimSummaryGroupMenuItem() {
        await t.click(this.claimMenuLinksClaim_ClaimSummaryGroup);
    }

    async selectClaimMenuLinksClaim_ClaimSummaryGroupClaimSummaryGroup_ClaimSummaryMenuItem() {
        await t.click(this.claimMenuLinksClaim_ClaimSummaryGroupClaimSummaryGroup_ClaimSummary);
    }
}
