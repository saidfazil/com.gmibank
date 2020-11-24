@US023

Feature: Read all countries

  @US023TC01
  Scenario: US023TC01 Read all countries
  Given user provites the api ent point to set the response using "https://www.gmibank.com/api/tp-countries"
  And user deserializes all countries to pojo
  And user generates all countries data in correspondent files
  Then user validates data for all countries


   @US023TC02
  Scenario: US023TC02 verify all customer data
  Given user provites the api ent point to set the response using "https://www.gmibank.com/api/tp-customers"
  And Read all customer data provided
  Then the user verifies all the data