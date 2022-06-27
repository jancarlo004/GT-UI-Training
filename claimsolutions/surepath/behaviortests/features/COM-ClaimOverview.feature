
@common
Feature: Claim Overview

Background:
    Given I am an adjuster

@DesignatedFunction @view_claim_overview 
Scenario: Claim Overview
    Given a Personal Auto claim
    When I need to quickly understand a claim I haven’t reviewed
    Then I can find an overview of the claim