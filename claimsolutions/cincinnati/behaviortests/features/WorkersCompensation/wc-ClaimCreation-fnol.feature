Feature: Policy Creation

Background: 
    Given I create a Personal Account

@FNOL @TEST_CIC_10029
Scenario: Search for a Claim
    Given a workers compensation policy
    When I create FNOL Claim
    Then claim is created
  