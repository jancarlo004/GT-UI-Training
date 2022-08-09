Feature: Create Policy

Background:
    Given I logged in Policy Center

@CreatePolicy
  Scenario: Create a <Line Of Business> policy

    Given I Create a <Line Of Business> policy
    # When I Search the Policy
    # Then I View the Policy

    Examples:
    | Line Of Business  |  
    | Inland Marine     | 
    | Personal Auto     |  
    | Homeowners        |  
     
 