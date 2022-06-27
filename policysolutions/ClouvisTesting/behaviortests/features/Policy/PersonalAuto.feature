Feature: Create Personal Auto Policy

@PersonalAuto
Scenario: Creating Auto Policy in Policy Center
  Given login in PC
  When i create a Personal Auto Policy
  Then successfully issued Auto Policy