Feature: Account Creation 

@AccountCreation
Scenario: Creating an Account
    Given I Login to PC with a Producer role
    When I create a Personal account 
    Then an account was successfully created 