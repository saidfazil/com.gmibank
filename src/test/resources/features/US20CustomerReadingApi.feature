@US20
Feature: system should allow to read all customers info using api end point

  Background: US20TC01 and US20TC02 background
    Given use api end point  "https://www.gmibank.com/api/tp-customers"
    And get all customers' information as De-Serialization

  @US20TC01
  Scenario: US20TC01 read all customers you created and validate them from your data set
    And find out how many customers are and verify that there are 20 customers
    And get all the information of the seventh customer
    And Verify second customers ssn is "219-02-1962" and country name is "UNITED STATES"


  @US20TC02
  Scenario: US20TC02 read all customers you created and validate them 1 by 1
    And verify first customer's firstName "ishak"
    And Verify second customer's lastName "North"
    And Verify third customer's country name is "UNITED STATES"
    And Verify first customer's user email "ishaks@hotmail.com"