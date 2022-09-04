Feature: Contact Search

@contactSearch @TEST_CIC_10028
Scenario Outline: Search for a Recovery
    Given a workers compensation Claim
    When I search for recovery
    Then recovery was found