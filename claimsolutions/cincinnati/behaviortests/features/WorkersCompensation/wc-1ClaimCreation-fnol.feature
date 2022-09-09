Feature: Claim Creation

@FNOL
Scenario: File a claim for Workers Compensation policy
    Given a workers compensation policy
    When I create FNOL Claim
    Then claim is created
  