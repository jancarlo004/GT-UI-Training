Feature: Select and View Existing Account

@viewExistingAccount
Scenario: Searching or Creating Account in PolicyCenter
    Given Login to PolicyCenter
    When Search or Create Account
    Then Create a Homeowners Policy


@addContact
Scenario: Adding a new contact
    Given Login to PolicyCenter
    When Search or Create Account
    Then Add new contact

