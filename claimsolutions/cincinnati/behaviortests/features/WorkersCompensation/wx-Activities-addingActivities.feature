Feature: Adding Notes

@addingActivity @TEST_CIC_10023
Scenario Outline: Adding Notes
    Given a workers compensation Claim
    When I add Auto Pilot Action required activity
    Then activity is created

@addingActivity @TEST_CIC_10024
Scenario Outline: Adding Notes
    Given a workers compensation Claim
    When I add Auto Pilot Notifications
    Then activity is created
