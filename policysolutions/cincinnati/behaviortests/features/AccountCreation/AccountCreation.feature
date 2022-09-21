Feature: Create Account

@CreateAccount

    Scenario Outline: Creating Account
        Given Login to PolicyCenter as a Producer
        When Create <Accounts> Account
        Then Successfully create the <Accounts> Account

    Examples:
    | Accounts | 
    | Personal |
    | Company  |
        