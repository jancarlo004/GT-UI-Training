Feature: Claim Search

@claimSearch @TEST_CIC_10025 @SearchClaim
Scenario Outline: Search for a Contact
    Given a workers compensation Claim
    When I search for contact
    Then claim is retrieved
  
  