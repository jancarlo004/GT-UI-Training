@InvoiceDue @DesignatedFunction
Feature: Invoice Due
  As a Billing Clerk
  I want identify past due invoices
  So that the delinquency process can be started

  As a Billing Clerk
  I want to distribute funds from payments
  So that I know which invoice items have been paid

  As a Billing Clerk
  I want to accounting transactions created when an invoice is due
  So that I can track the allocation and movement of funds

  Scenario Outline: Invoices are not due until after due date
    Given an unpaid invoice item in a billed invoice
    When today is the <Date>
    Then the invoice is <Status>

    Examples:
      | Date                 | Status |
      | Invoice Due Date     | Billed |
      | Invoice Due Date + 1 | Due    |

  Scenario: Held invoice items are pushed to the next planned invoice
    Given an unpaid invoice item in a billed invoice
    And the invoice item was held
    When today is the invoice due date
    Then the invoice item was pushed to the next planned invoice

  Scenario: Carry forward invoices if all items were held
    Given 2 unpaid invoice items in a billed invoice
    And all the invoice items were held
    When today is the invoice due date
    Then the invoice is Carried Forward

  Scenario: Start the delinquency process when a due invoice is unpaid
    Given an unpaid invoice item in a billed invoice
    When today is the invoice due date + 1
    Then a delinquency process was started

  Scenario: Start the delinquency process when a due invoice is partially paid
    Given an unpaid invoice item in a billed invoice
    And the amount distributed to the invoice item was $10.00
    When today is the invoice due date + 1
    Then a delinquency process was started

  Scenario: A fully paid invoice is not delinquent
    Given an invoice item in a billed invoice
    And the amount distributed to the invoice item was full amount
    When today is the invoice due date + 1
    Then a delinquency process was not started
  
  Scenario: Create accounting transactions when an invoice is due
    Given an unpaid invoice item in a billed invoice
    When today is the invoice due date + 1
    Then an <Event> transaction was created for the invoice item with <Credit> and <Debit>

    Examples:
      | Event         | Credit | Debit |
      | Item Made Due | Billed | Due   |

  Scenario: Apply undistributed money to unpaid invoices
    Given an unpaid invoice item in the next billed invoice
    And an undistributed payment on the account
    When today is the invoice due date
    Then the payment is distributed to the invoice
