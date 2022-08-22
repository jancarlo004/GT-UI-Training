Feature: Policy Search

Background: Producer Role
    Given I am a user with the Producer role

@policy_search
Scenario: Searching policies in each Line of Business
    When I search for <Line of Business> policies
    Then The policies that match the search criteria is present

    Examples:
    | Line of Business |
    | Personal Auto    |
    | Homeowners       |
    | Inland Marine    | 