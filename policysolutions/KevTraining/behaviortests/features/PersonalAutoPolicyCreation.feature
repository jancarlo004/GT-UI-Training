Feature: Policy Creation

@createPolicy
Scenario: Creating policy in Policy Center
  Given I login in PC
  When I create a Personal Auto Policy
  Then I successfully issue a policy

