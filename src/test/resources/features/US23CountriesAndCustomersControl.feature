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
    Given user provites the api ent point to set the response using customers "https://www.gmibank.com/api/tp-customers" creates customer using "<idJson>" "<firstNameJson>" "<lastNameJson>""<middleInitial>" "<email> ""<mobilePhoneNumber>""<phoneNumber> ""<zipCode>""<address> ""<city>""<ssn> ""<createDate>""<country>""<state> ""<user>"
    Examples:
      | idJson | firstNameJson | lastNameJson | middleInitial | email            | mobilePhoneNumber | phoneNumber  | zipCode | address        | city    | ssn         | createDate | country | state  | user    |
      | 76853  | Selim1        | Asd          | sa            | sakal@gmail.com  | 678-987-1234      | 678-987-1234 | 45100   | rue de orleans | Orleans | 456-78-4321 | 2020-11-23 | France  | Centre | selim45 |
      | 54273  | Selim2        | Asdfg        | Slm           | sakal2@gmail.com | 678-987-1237      | 678-987-1237 | 45100   | rue de orleans | Orleans | 456-78-4322 | 2020-11-23 | France  | Centre | selim45 |


  Scenario: Read all customer
    And Read all customer data provided
    Then the user verifies all the data