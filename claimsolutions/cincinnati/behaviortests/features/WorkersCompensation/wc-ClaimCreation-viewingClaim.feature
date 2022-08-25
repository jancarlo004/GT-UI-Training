Feature: Viewing Claim

@contactSearch @TEST_CIC_10028
Scenario Outline: Search for a Contact
    Given a workers compensation policy
    When I search for contact
    Then contact was found