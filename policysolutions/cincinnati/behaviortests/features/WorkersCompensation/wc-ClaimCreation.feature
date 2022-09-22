Feature: Workers Compensation Claim Creation

Background: 
    Given Login to PolicyCenter as a producer
    And Created Personal Account

@WCClaimCreation

    Scenario: Filing a claim for Workers Compensation LOB
        Given Create policy for Workers Compensation
        When File a Claim for a Workers Compensation Policy
        Then Successfully file a Workers Compensation Policy