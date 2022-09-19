Feature: Creation of Personal Account and Workers Compensation Policy Creatiom

@WorkersCompensationPolicy 

    Scenario: Creating Personal Account and Workers Compensation Policy
        Given Login to PolicyCenter as a Producer
        When Create a Personal Account
        When Create a Workers Compensation Policy
        When Create a Workers Compensation LOB Claim
        Then Successfully create the Workers Compensation Policy