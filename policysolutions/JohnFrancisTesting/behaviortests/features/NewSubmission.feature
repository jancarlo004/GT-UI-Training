Feature: New Submission

Background: Producer Role
    Given I am a user with the Producer role

@newsubmission_PA @DesignatedFunction
Scenario: Creating a Personal Account and New Submission for Personal Auto with 3 Drivers and 3 Vehicles
    And I create Personal Account
    When I submit Personal Auto policy
    Then I issued the Personal Auto policy successfully

@newsubmission_HO @DesignatedFunction
Scenario: Creating a Personal Account and New Submission for Homeowners Policy
    And I create Personal Account
    When I submit Homeowners policy
    # Then I issued the Homeowners policy successfully