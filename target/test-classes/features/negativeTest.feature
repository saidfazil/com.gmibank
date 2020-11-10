@US010TC02
Feature:City should be provided and cannot be left as blank US010
  Scenario: Without City Test
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
      And Click Save Button
    Then See This field is required.

