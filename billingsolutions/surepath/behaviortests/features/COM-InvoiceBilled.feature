@InvoiceBilled @DesignatedFunction
Feature: Invoice Billed
  As a Billing Clerk
  I want invoices to be billed ahead of their due date
  So that the invoices are sent to payers

  As a Billing Clerk
  I want invoice items to be placed in an invoice
  So that they can be appropriately billed

  As a Billing Clerk
  I want to accounting transactions created when an invoice is billed
  So that I can track the allocation and movement of funds

  Scenario Outline: Invoices are not billed until bill date
    Given an unpaid invoice item in the next planned invoice
    When today is the <Date>
    Then the invoice is <Status>

    Examples:
      | Date                  | Status  |
      | Invoice Bill Date - 1 | Planned |
      | Invoice Bill Date     | Billed  |

  Scenario: Held invoice items are pushed to the next planned invoice
    Given an unpaid invoice item in the next planned invoice
    And the invoice item was held
    When today is the invoice bill date
    Then the invoice item was pushed to the next planned invoice

  Scenario: Carry forward invoices if all items were held
    Given 2 unpaid invoice items in the next planned invoice
    And all the invoice items were held
    When today is the invoice bill date
    Then the invoice is Carried Forward

  Scenario Outline: Raise a payment request if a nonresponsive payment instrument is available
    Given an unpaid invoice item in the next planned invoice
    And a <Payment Method> payment instrument on the account
    When today is the invoice bill date
    Then a payment request is raised

    Examples:
      | Payment Method |
      | ACH            |
      | EFT            |
      | Credit Card    |

  Scenario: A payment request if a responsive payment instrument is available
    Given an unpaid invoice item in the next planned invoice
    And a responsive payment instrument on the account
    When today is the invoice bill date
    Then a payment request is not raised

  Scenario: Create accounting transactions when billing an invoice
    Given an unpaid invoice item in the next planned invoice
    When today is the invoice bill date
    Then an <Event> transaction was created for the invoice item with <Credit> and <Debit>

    Examples:
      | Event       | Credit   | Debit  |
      | Item Billed | Unbilled | Billed |

  Scenario: Apply undistributed money to unpaid invoices
    Given an unpaid invoice item in the next planned invoice
    And an undistributed payment on the account
    When today is the invoice bill date
    Then the payment is distributed to the invoice
