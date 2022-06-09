Feature: Policy Creation

Background: 
    Given I am a user with the Producer role

@donRunAuto
Scenario: Policy Creation for Personal Auto
    Given a custom Personal Account
    When I create a Policy for Personal Auto
    Then I successfully created a Policy for Personal Auto



