Feature: Issuing a PA Policy with added drivers and vehicles

Background: Login Action 
    Given I Login to PC with a Producer role

@issuing_submissionwWithAddedDriversAndVehicles
Scenario: Creating a PA Policy with added drivers and vehicles
    Given a Personal Account
    When I add drivers and vehicles for submission
    Then a PA policy is successfully created
    