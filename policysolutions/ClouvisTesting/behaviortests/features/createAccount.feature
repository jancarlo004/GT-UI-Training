Feature: New Account Creation

@createAccount
Scenario: Creating a New Account in PolicyCenter
    Given Login to PolicyCenter
    When I create a New Account
    Then Account is successfully created