@WCClaimCreation

Feature: Claim Creation

Background: 
    Given Login to PolicyCenter as a Producer
    Given Created Personal Account
    When Create a Workers Compensation Policy

    Scenario: Create a WC Claim
        Given Login on ClaimCenter as adjuster
        When create a Workers Compensation Claim
        Then Successfully file a claim
  