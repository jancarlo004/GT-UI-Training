@pc_newaccount
Feature: Creating new account

Scenario: Create new account
    Given I am user with a Producer role
    When I create a new account
    Then account successfully created