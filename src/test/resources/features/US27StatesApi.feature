@AllStates

Feature: read, create, update and delete all states
  Background: read all states
    Given user sets states to response using "https://www.gmibank.com/api/tp-states"

  Scenario: read all states
    Given user deserializes all states to pojo
    And user generates all states' data in correspondent files
    Then user validates data for all states

  Scenario: create state
      Given user creates a new state using "https://www.gmibank.com/api/tp-states"
      And user sets states to response using "https://www.gmibank.com/api/tp-states"
      Then validate the state created

  Scenario Outline: delete states
        Given user provides api end point to delete states using "https://www.gmibank.com/api/tp-states" and its extension"<id>"
        Then validate the state deleted
        Examples:
       |  id |
       |/21592|
