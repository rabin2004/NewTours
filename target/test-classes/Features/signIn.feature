#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Sign-in

  Scenario Outline: Sign-in with valid credentials
    Given user open newtours website
    When user enters valid "<username>" and valid "<password>"
    Then user should be land in my account page

    Examples: 
      | username  | password |
      | test123 | 12345     |
      | test567 | 5678		 |
      
   Scenario Outline: Sign-in with invalid credentials
    Given user open newtours website
    When user enters invalid "<invalidUsername>" and invalid "<invalidPassword>"
    Then user should not be able to login
    
        Examples: 
      | invalidUsername  | invalidPassword |
      | notest123 | 12345     |
      | notest456 | 5678		 |
    
