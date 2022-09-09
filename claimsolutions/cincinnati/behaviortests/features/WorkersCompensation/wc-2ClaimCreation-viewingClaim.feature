Feature: Viewing Claim

@FNOL
Scenario: Search for a Claim
    Given a workers compensation claim
    When I search for the claim number
    Then claim was found