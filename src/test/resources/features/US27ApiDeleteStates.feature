@US27
Feature: API Test
  Scenario:System should allow to delete states using api end point
    Given The user connects to the API with the token given to her
    And The user should be delete a state
    Then The deleted state must not be in the database