@US011TC08
Feature: User can choose a user from the registration and it cannot be blank US011
  Scenario: User Information Control Test
    Given Go GMI Bank Adress
    When Click, SignIn Area
      And Click, SignIn Entrace Button
      And Click UserName TextBox, Write Available UseName
      And Click Password TextBox, Write Available Password
      And Click SignIn Button
      And Click My Operations Area
      And Click Manage Customers
      And Click First ID
      And See FirstName
      And See LastName
      And See Middle Initial
      And See Email
      And See Mobile Phone Number
      And See Phone Number
      And See Zip Code
      And See Address
      And See City
      And See SSN
      And See Create Date
      And See Zelle Enrolled
      And See Country
      And See User
      And See Account
    Then See All Titles
