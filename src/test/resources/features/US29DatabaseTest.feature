@US29

Feature: Validate all data performing database testing using the port and following credentials
  Background:
    Given The user connects to the JDBC with the admin and password given to her

  @US29TC01
  Scenario Outline: : All users' info (user, employee, manager and admin) should be retrieved by database and validated
    Then All users' info "<id>""<loginname>""<profiles>""<activated>""<email>""<language>""<modified_date>""<modified_by>""<create_date>" by database and validated
    Examples:
      | id   | loginname       | email                     | activated | language | profiles      | create_date             | modified_by     | modified_date           |
      | 2719 | globalcostumer1 | globalcostumer1@gmail.com | true      | 0        | ROLE_CUSTOMER | 2020-11-06 00:51:07.578 | globalemployee1 | 2020-11-06 02:03:10.548 |
      | 2722 | globalemployee1 | globalemployee1@gmail.com | true      | 0        | ROLE_EMPLOYEE | 2020-11-06 00:51:07.578 | globalteamadmin | 2020-11-06 02:03:10.548 |
      | 2718 | globaladmin     | globaladmin@gmail.com     | true      | 0        | ROLE_ADMIN    | 2020-11-06 00:51:07.578 | globaladmin     | 2020-11-06 02:03:10.548 |
      | 2723 | globalmanager1  | globalmanager1@gmail.com  | true      | 0        | ROLE_MANAGER  | 2020-11-06 00:51:07.578 | globaladmin     | 2020-11-06 02:03:10.548 |
      | 2724 | globaluser1     | globaluser1@gmail.com     | true      | 0        | ROLE_USER     | 2020-11-06 00:51:07.578 | globaladmin     | 2020-11-06 02:03:10.548 |

  @US29TC02
 Scenario Outline: All countries' info should be retrieved by database and validated
    Then All countries' "<countries>" info should be retrieved by database and validated
    Examples:
      | countries     |
      | TURKEY        |
      | GREECE        |
      | GERMANY       |
      | UNITED STATES |

  @US29TC03
  Scenario Outline:  All states should related to USA should be  retrieved by database and validated
    Then All "<states>" should related to USA should be  retrieved by database and validated
    Examples:
      | states            |
      | Yozgat            |
      | Baden-Wurttemberg |
      | Washington        |
