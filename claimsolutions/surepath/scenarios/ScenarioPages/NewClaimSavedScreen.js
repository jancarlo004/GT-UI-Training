'use strict';
import {Selector, t} from 'testcafe';
import { NewClaimSaved } from '../../../pages/other/NewClaimSaved';

export class NewClaimSavedScreen extends NewClaimSaved{
    
    claimSavedPromptInfo = Selector('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-Header');

    async getClaimNumber() {
        const confirmationValue = await this.claimSavedPromptInfo.textContent;
        const claimNumber = confirmationValue.split(" ")[1];
        return claimNumber;
    }

    async checkClaimSuccessfullyCreatedConfirmation() {
		const confirmationValue = await this.claimSavedPromptInfo.innerText;
		await t.expect(confirmationValue).match(/^Claim \d{3}-\d{2}-\d{6} has been successfully saved\./,
			'New claim has not been successfully created');
		return confirmationValue.match(/\d{3}-\d{2}-\d{6}/).toString();
	}

	async getAssignedUserOfNewCreatedClaim() {
		const assignedUserValue = await this.newClaimSavedDVAssignedUser.getValue();
		const startIndex = assignedUserValue.indexOf(":") + 2;
		return assignedUserValue.substr(startIndex);
	}

	async getAssignedGroupOfNewCreatedClaim() {
		const assignedGroupValue = await this.newClaimSavedDVAssignedGroup.getValue();
		const startIndex = assignedGroupValue.indexOf(":") + 2;
		return assignedGroupValue.substr(startIndex);
	}

}