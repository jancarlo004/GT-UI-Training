Feature: Adding Notes

@FNOL
Scenario Outline: Adding Notes
    Given I search for a workers compensation claim
    When I add <Notes>
    Then notes are added

Examples:
    | Notes                | 
    | general              | 
    | fnol                 |
    | coverage             |
    | investigation        |
    | medical              |
    | evaluation           |
    | settlement           |
    | subrogation          |
    | salvage              |
    | litigation           |
    | denial               |
    | reinsurance          |
