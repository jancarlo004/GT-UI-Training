@newsubmission_with_3Drivers_and_3Vehicles
Feature: Creating an new account and new submission for PA with 3 Drivers and 3 Vehicles
Scenario: Creating a Personal Account and New Submission for Personal Auto
    Given I am a user with the Producer role
    And I create Personal Account
    When I submit Personal Auto with 3 Drivers and 3 Vehicles
    # Then Personal Account is created succesfully