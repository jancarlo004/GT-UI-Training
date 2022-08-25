Feature: Policy Creation

@claimSearch @TEST_CIC_10029
Scenario: Search for a Claim
    Given a workers compensation policy
    When I view Claim summary
    Then claim is retrieved
  