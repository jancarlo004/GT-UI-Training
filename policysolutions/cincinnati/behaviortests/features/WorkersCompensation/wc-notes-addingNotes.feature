Feature: Adding Notes

@claimSearch @TEST_CIC_10023 @AddNotes
Scenario Outline: Adding Notes
    Given a workers compensation Claim
    When I add <notes>
    Then notes is added

Examples:
    | notes                | 
    | General              | 
    | First notice of loss |
    | Coverage             |
    | Investigation        |
    | Medical issues       |
    | Evaluation           |
    | Settlement           |
    | Subrogation          |
    | Salvage              |
    | Litigation           |
    | Denial               |
    | Reinsurance          |
