Feature: Policy Search

Background:
    Given I logged in Policy Center

@PolicySearch
  Scenario: Searching for a <Line Of Business> policy

    Given a <Line Of Business> policy
    When I search for the policy 
    Then the policy was found

    Examples:
    | Line Of Business  |    
    | Personal Auto     |  
    | Property          |  
    | Inland Marine     |  
 