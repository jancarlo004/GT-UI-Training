Feature: Issuing a Personal auto Policy
    
@Issue_submission
Scenario: Create a Personal Auto Policy
    Given I Login to PC with a Producer role
    When I create Personal Account
    When I create Personal Auto Policy
    Then a Policy was successfully created 
    