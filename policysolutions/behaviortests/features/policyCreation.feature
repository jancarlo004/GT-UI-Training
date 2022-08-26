Feature: Create Policy

@CreatePolicy
Scenario: Create a Policy
Given Login to PC
When Create new Account
Then Create a new Policy <Personal Auto>

Examples:
    | Line Of Business  |    
    | Personal Auto     |  
    | Property          |  
    | Inland Marine     |  



