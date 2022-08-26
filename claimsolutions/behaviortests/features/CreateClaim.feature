Feature: Create Claim

@CreateClaim
Scenario: Create Claim
Given Login to CC
When Create new claim
Then Open the claim created