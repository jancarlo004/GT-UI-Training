Feature: Create account

@createaccountpersonalauto
Scenario: Create Account for PA
    Given Login to Policy Center
    When  Create account
    Then  Account created succesfully for PA