Feature: Auto Policy Creation
@createAutoPolicy
Scenario Outline:  Create a Personal Auto policy with 3 Drivers and 3 Vehicles
    Given I create account in PC
    When I create Auto Policy in PC with 3 Drivers and 3 Vehicles
    Then Verify if the Auto Policy is binded in PC
    And Verify if the Auto Policy is Created in Claim
    And Verify if the claim is saved
    

@createPAwithOnlyOneID
Scenario Outline: Create a PA policy using only Detail View ID
    Given I create account in PC
    When I create Auto Policy in PC
    Then Verify if the Auto Policy is binded in PC



