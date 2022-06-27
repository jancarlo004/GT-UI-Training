Feature: CC Search for a Check

Background: 
    Given I am an adjuster

@common @DesignatedFunction @search_check 
Scenario: Search for a check
    Given a Personal Auto claim
    And with a check
    When I search for a check with its <Identifier>
    Then the check was found
    Examples:
        | Identifier     |
        | Claim Number   |
        | Invoice Number |