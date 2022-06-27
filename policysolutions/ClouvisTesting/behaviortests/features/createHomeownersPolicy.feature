Feature: Create Homeowners Policy

@createHomeownersPolicy
Scenario: Creating Homeowners Policy in Policy Center
  Given I login in PC
  When I create a Homeowners Policy
  Then I successfully issued Homeowners Policy