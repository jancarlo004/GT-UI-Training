@pc_panewsubmission
Feature: Personal Auto Submission

Scenario: Submitting a Personal Auto in account
    Given I am user with a Producer role
    When I submit a personal auto policy
    Then then personal auto policy is successfully submitted