@smoketest
@US011TC09
Feature: There user can choose an account created on manage accounts US011
  Scenario: Nanage Account Test
    Given Go GMI Bank Adress
      When Click, SignIn Area
        And Click, SignIn Entrace Button
        And Click UserName TextBox, Write Available UseName
        And Click Password TextBox, Write Available Password
        And Click SignIn Button
        And Click My Operations Area
        And Click Manage Accounts
        And Click FirstID
        And See Description
        And See Balance
        And See Account Type
        And See Account Status Type
        And See CreateDate
        And See ClosedDate
      Then See Employee
