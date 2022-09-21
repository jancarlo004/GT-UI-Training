@WorkersCompensationPolicy 

Feature: Creation of Workers Compensation Policy

Background: 
    Given Login to PolicyCenter as a Producer

    Scenario: Creating Workers Compensation Policy
        Given Created Personal Account
        When Create a Workers Compensation Policy
        Then Successfully create the Workers Compensation Policy