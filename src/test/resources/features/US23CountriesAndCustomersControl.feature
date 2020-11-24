@US023AllTest
Feature: Read all countries

  @US023TC01
  Scenario Outline: US023TC01 Cread all countries
    Given user provites the api ent point to set the response using countries "https://www.gmibank.com/api/tp-countries" creates countries using "<idJson>"and "<nameJson>"
    Examples: cread country
      | idJson | nameJson |
      | name   | Malta    |
      | name   | Jamaika  |
      | name   | Korsika  |

  Scenario: Read all countries
    Given user sets the countries to response using  "https://www.gmibank.com/api/tp-countries"
    And user deserializes all countries to pojo
    And user generates all countries data in correspondent files
    Then user validates data for all countries


  @US023TC02
  Scenario Outline: US023TC02 verify all customer data
    Given user provites the api ent point to set the response using customers "https://www.gmibank.com/api/tp-customers"
    And creates customer using "<idJson>"and "<firstNameJson>" and "<lastNameJson>"
    Examples: cread customer
      | idJson | firstNameJson | lastNameJson |
      | 76853  | Selim1        | Asd          |
      | 54273  | Selim2        | Asdfg        |
      | 98712  | Selim3        | Azsdcfv      |

    And Read all customer data provided
    Then the user verifies all the data