Feature: Claim Creation

@WCClaimCreation

Scenario: Create a WC Claim
    Given Login on ClaimCenter as adjuster
    When create a Workers Compensation Claim
    Then Successfully file a claim
  