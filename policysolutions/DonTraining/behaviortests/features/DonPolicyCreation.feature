Feature: Policy Creation

Background: 
    Given I create a Personal Account

  
@donAutoPolicy
Scenario: PA Policy Creation
    When I create a Personal Auto Policy

@donHomePolicy
Scenario: HO Policy Creation
    Given I create a Personal HomeOwners Policy

@donInlandMarinePolicy
Scenario: Inland Marine Policy Creation
    Given I create a Personal InlandMarine Policy        






