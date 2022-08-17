Feature: Policy Search

Background: Producer Role
    Given I am a user with the Producer role

@policy_search
Scenario: Searching policies in each Line of Business
    Given I have <Line of Businesses> policies
    When I search for policies
    Then The policies that match the search criteria is present

    | Line of Businesses |
    | Personal Auto      |
    | Property           |
    | Inland Marine      | 