Feature: Check Search

@checkSearch @TEST_CIC_10027
Scenario Outline: Search for a check
    Given a workers compensation Claim
    When I search for check
    Then check was found