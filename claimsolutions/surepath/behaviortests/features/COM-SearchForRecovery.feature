@common @search_recovery
Feature: Search For Recovery

    Background:
        Given I am an adjuster

    @DesignatedFunction
    Scenario: Searching for a Recovery
        Given a Personal Auto claim
        And with a recovery
        When I search for the recovery
        Then the recovery is found