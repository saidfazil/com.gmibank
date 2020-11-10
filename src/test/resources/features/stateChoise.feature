@US010TC04
Feature: State should be provided as US state and cannot be blank US010
  Scenario: State Test
    Given Go GMI Bank Adress
    When Click, SignIn Area
    And Click, SignIn Entrace Button
    And Click UserName TextBox, Write Available UseName
    And Click Password TextBox, Write Available Password
    And Click SignIn Button
    And Click My Operations Area
    And Click Manage Customers
    And Click Create A New Customer
    And Click SSN TextBox, Write Available SSN Number
    And Click Search Button
    Then Write a State.