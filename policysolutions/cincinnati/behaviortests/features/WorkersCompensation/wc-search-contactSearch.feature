Feature: Contact Search

@contactSearch @TEST_CIC_10026
Scenario Outline: Search for a Contact
    Given a workers compensation Claim
    When I search for contact
    Then contact was found


