@US12TC01

Feature: An Employee can manage Customer

  Scenario:All customers should show up on manage customers module populating the account information of the customer
Given Go to gmibank.com home page
And Click to User Account drop down menu and Click to Sign In
And Enter the username with valid credentail
And Enter the pasword with valid credentail
And Click to Sign in button
And Click to My Operations drop down menu and Click to Manage Costumers
Then A Randomly selected customer should show up on manage customers module populating the account information of the customer.
