Feature: Permission
@addPermissionToTheUser
Scenario: <Permission> <Users> Adding permission
    Given I login as "su" on PolicyCenter
    When I add <Permission> to the user <Users>
    And I create new submission for Personal Auto product
    And I add a new note
    Then The note was deleted
Examples:
    | Permission                         | Users |
    | Base permissions for a supervisor  | baker |