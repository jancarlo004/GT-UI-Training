Feature: Create Claim Check

@ClaimCheck

    Scenario: Creating Claim Check
        Given Search for any Existing Workers Compensation Claim
        When Create Claim Check
        Then Successfully create a Check