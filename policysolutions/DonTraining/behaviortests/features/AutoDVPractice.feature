Feature: Auto Policy Creation Detailed View

Background:
Given I create a Personal Account


@createPAwithOnlyOneID
Scenario Outline: Create a PA policy using only Detail View ID
    When I create Auto Policy in PC
    # Then Verify if the Auto Policy is binded in PC