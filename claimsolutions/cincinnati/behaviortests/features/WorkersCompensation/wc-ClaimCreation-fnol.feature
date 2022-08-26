Feature: Claim Creation using FNOL

@FNOL @TEST_CIC_10029
Scenario: Search for a Claim
    Given I am user with Adjuster Role
    When I submit a first notice of loss
    Then Claim is created
  