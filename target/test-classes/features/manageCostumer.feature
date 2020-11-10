<<<<<<< HEAD
@US12TC01

Feature: A description

  Scenario: A scenario
Given Go to "https://gmibank.com/" link
And Click to User drop down menu
And Click to Sign in
And Enter the username with valid credentail
And Enter the pasword with valid credentail
And Click to Sign in button
And Click to My Operations drop down menu
And Click to Manage Costumers
Then Random customer should show up on manage customers module populating the account information of the customer.
=======
  @US12TC01

Feature: An Employee can manage Customer

  Scenario:All customers should show up on manage customers module populating the account information of the customer
Given Go to gmibank.com home page
And Click to User Account drop down menu and Click to Sign In
And Enter the username with valid credentail
And Enter the pasword with valid credentail
And Click to Sign in button
And Click to My Operations drop down menu and Click to Manage Costumers
Then A customer should show up at total nine head on account information of the customer
  @US12TC02
  Scenario:There should be a View option where customer can be navigated to all customer info and see edit button there
    And Click to View button.
    Then There should be Edit button.
>>>>>>> master
