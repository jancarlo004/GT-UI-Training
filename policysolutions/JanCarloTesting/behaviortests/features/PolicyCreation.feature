Feature: Policy Creation

Background:
    Given I logged in Policy Center

@PAPolicyWithClaim @auto
Scenario: Policy Creation
    Given I create a Personal Auto Policy
    # Then Personal Auto Policy is created
    When I create personal auto claim
    And I create a service
    # Then Claim was created
    And I create exposure and reserves
    Then reserve is created

     
@PolicyCreation @home
Scenario: HO Policy Creation
    Given I create a HomeOwners Policy
    Then HomeOwners Policy is created 

@InlandMarinePolicyCreation
Scenario: Inland-Marine Policy Creation
    Given I create a In-Land Marine Policy
    Then In-Land Marine Policy is created           



