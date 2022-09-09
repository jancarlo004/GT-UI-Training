Feature: Adding Activities

@FNOL
Scenario Outline: Adding Activies
    Given a worker compensation claim
    When I add a new <Activity> activity to the claim
    Then activity is created

Examples:
    | Activity              |
    | Autopilot             |
    | Correspondence        |
    | Interview             |
    | New Mail              |
    | Reminder              |
    | Request               |
    | Warning               |