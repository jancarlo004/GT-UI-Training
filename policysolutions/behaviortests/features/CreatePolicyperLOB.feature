Feature: Create Policy to all LOBs
Background: 
Given I Login to PC
Given I Create new Account

@CreatePolicyAllLOBs @auto
Scenario Outline: Create a Policy for Auto
Given I Create a new Auto Policy
Then Verify Auto Policy is created

@CreatePolicyAllLOBs @ho
Scenario Outline: Create a Policy for Homeowners
Given I Create a new HO Policy
Then Verify HO Policy is created

@CreatePolicyAllLOBs @InlandMarine
Scenario Outline: Create a Policy for Inland Marine
Given I Create a new HO Inland Marine
#Then Verify Inland Marine Policy is created

# Examples:
#     | Line Of Business |
#     | Personal Auto    |









#sample
# Feature: Create Policy to all LOBs
# @CreatePolicyAllLOBs
# Scenario Outline: Create a Policy to all LOBs
# Given I Login to PC
# When I Create new Account
# Then I Create a new Policy <Line Of Business>

# Examples:
#     | Line Of Business |
#     | Personal Auto    | 
#     | Homeowners       |        
#     # | Inland Marine     |  



