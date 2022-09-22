Feature: Create a Recovery on a WC Claim

@WCClaimRecoveryCreation

    Scenario: Creating Recovery in a Claim
        Given a Workers Compensation Claim
        When I create a Recovery
        Then Recovery is created