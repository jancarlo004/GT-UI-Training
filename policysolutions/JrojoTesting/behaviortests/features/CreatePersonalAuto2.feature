Feature: New Submission Personal Auto with three drivers and vehicles 

@createpersonalautowiththreedriversandvehicle
Scenario: NS Personal Auto with three drivers and vehicles
    Given Create Account or Search Existing Account for PA
    When Create Personal Auto Policy with three drivers and vehicles
    Then Personal Auto Policy with three drivers and vehicles issued succesfully 