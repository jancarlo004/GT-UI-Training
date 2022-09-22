Feature: Create Workers Compensation Policy

Background: 
    Given Login to PolicyCenter as a producer

@CreateWorkersCompensationPolicy

    Scenario: Creating Workers Compensation Policy
        Given Created Personal Account
        When Create policy for Workers Compensation
        Then Successfully create a Workers Compensation Policy