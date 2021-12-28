Feature: Create Account Test
  As a user I should able to create account successfully

  Background:
    Given I am in home page

  Scenario: User should create account successfully
    When I click On "Sign in"
    And I enter "Email"
    Then I click on create account button
    When User enters following user details

      | firstName | lastName | eMail                   | password | days | month | year | FirstNm | LastNm | Company  | Address    | City   | State    | ZipCode | Country       | MobilePhone | Alias      |
      | Dimpy    | Patel    | dimple1234567@gmail.com | java123  | 26   | 11    | 1983 | Dimple  | Patel  | Glenwood | 419 Street | London | New York | 12456   | United States | 0795468578  | 419 Street |
    And clicks register button
    Then I should be able to see account name "Dimple Patel" on top right
    And verify the text
