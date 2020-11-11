@US011TC05
Feature: The date cannot be typed earlier, in the past, at the time of creation a customer US011
  Scenario: Date Test
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
    Then See Date TextBox