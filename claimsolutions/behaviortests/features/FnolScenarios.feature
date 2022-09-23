Feature: ClaimCreation

    @ClaimCreations
    Scenario: Claim Creation

        Given I log into Claim Center
        When I create Claim
        Then Claim is created successfully