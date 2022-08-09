@pc_newaccount_panewsubmission
Feature: Creating new account and issue a personal auto policy

Scenario: Create new account then issue a personal auto policy
    Given Im a user with a Producer Role in PC
    When I create a new account
    And issue a personal auto policy
    Then account and policy successfully created
