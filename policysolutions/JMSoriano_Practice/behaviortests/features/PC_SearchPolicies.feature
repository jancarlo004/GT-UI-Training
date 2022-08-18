@pc_searchpolicies
Feature: Policy search in PC

Background: 
    Given I am a user with a Producer Role

Scenario Outline: Searching multiple policies in PC
    When I search for a <LOB> policy
    Then <LOB> policy was found

Examples:
    |LOB                |
    |Personal Auto      |
    |Homeowners         |
    |General Liability  | 