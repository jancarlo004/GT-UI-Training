Feature: Policy Creation

Background:
    Given I logged in Policy Center

@PAPolicyWithClaim
Scenario: Policy Creation
    Given I create a Personal Auto Policy
    # Then Personal Auto Policy is created
    When I create personal auto claim
    Then Claim was created

@HomePolicy
Scenario: HO Policy Creation
    Given I create a HomeOwners Policy
    Then HomeOwners Policy is created 

@HoPolicyCreation
Scenario: Inland-Marine Policy Creation
    Given I create a In-Land Marine Policy
    Then In-Land Marine Policy is created           



