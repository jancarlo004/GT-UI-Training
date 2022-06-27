Feature: Create Personal Auto Policy

@createPersonalAutoPolicy
Scenario: Creating Auto Policy in Policy Center
  Given I login in PC
  When I create a Personal Auto Policy
  Then I successfully issued Auto Policy
 
