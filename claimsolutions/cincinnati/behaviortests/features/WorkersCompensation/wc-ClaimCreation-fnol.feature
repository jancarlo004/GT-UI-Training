Feature: Claim Creation using FNOL

@FNOL @TEST_CIC_10029
Scenario: Create Claim for Worker's Comp
    Given I am a user with Adjuster Role
    When I submit a first notice of loss for Workers Compensation
    # Then Claim is created
  