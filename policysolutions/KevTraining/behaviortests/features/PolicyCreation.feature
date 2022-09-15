Feature: Policy Creation
Background: 
    Given I create account in PC

@createHOMEpolicy
Scenario: Creating a HOME policy in PC
    When I create home policy in PC
    Then Verify if the home policy is binded in PC
    
@createInLandMarinePolicy 
Scenario: Creating an  InLand Marine policy in PC
    When I create InLand Marine policy in PC
    Then Verify if the InLand Marine policy is binded in PC 
    When I create an In Land Marine claim
    Then In Land Marine Claim is created

@workersCompensationPolicy
Scenario: Creating a Workers Compensation policy in PC
    When I create Workers Compensation in PC
    Then Verify if the workers compensation policy is binded in PC

    
    