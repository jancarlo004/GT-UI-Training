@newsubmission_with_3Drivers_and_3Vehicles
Feature: Creating an new account and new submission for PA with 3 Drivers and 3 Vehicles

Background: Producer Role
    Given I am a user with the Producer role

Scenario: Creating a Personal Account and New Submission for Personal Auto
    And I create Personal Account
    When I submit Personal Auto policy
    # Then I issued the Personal Auto policy successfully