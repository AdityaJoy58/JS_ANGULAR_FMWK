Feature: Google Website Verification
  As a user on navigates to Application
  I should be able to Add a Invalid Card and Verify the validation text
  I should be able to Add a Valid Visa Card
  I should be able to Add a Valid Master Card
  I should be able to Add a Valid AMEX Card
  I should be able to Add a Valid Diners Club
  I should not be able to Add Special Characters and Alphabets
  I should be able to delete the Card once entered by clicking on the (X) icon
  I should be able to verify that the respective card icon is visible when the card number is entered
  I should be able to add a minimum of 1 letter for a Card Holders name
  I should not be able to Add Special Characters and Numbers for the Card Name
  I should be able to Add a Invalid Card Expiry Date and Verify the validation text
  I should be able to delete the Card Expiry Date once entered by clicking on the (X) icon
  I should be able to Add a Valid Card Expiry Date
  I should be able to Add a Invalid Card Security Code and Verify the validation text
  I should be able to Add a Valid Card Security Code
  I should be able to delete the Card Security Code once entered by clicking on the (X) icon

  Scenario: Verify Add Card should display error if user enters an invalid DRN
    Given User navigates to Application
    When User enters a Valid DRN and Tab out "LONG"
    And User enters an invalid Card number
    Then Verify the card error is shown to the user that "Card number is not valid. Please try again."

  Scenario: Verify User is able to Add a Valid Visa Card
    Given User navigates to Application
    When User enters an valid Card number "VISA"
    Then Verify Card is accepted without any error

  Scenario: Verify User is able to Add a Valid Master Card
    Given User navigates to Application
    When User enters an valid Card number "MASTER"
    Then Verify Card is accepted without any error

  Scenario: Verify User is able to Add a Valid Amex Card
    Given User navigates to Application
    When User enters an valid Card number "AMEX"
    Then Verify Card is accepted without any error

  Scenario: Verify User is able to Add a Valid Diners Card
    Given User navigates to Application
    When User enters an valid Card number "DINERS"
    Then Verify Card is accepted without any error

  Scenario: Verify the user is unable to Add Special Characters and Alphabets
    Given User navigates to Application
    When User enters a special characters and alphabets and Tab out "!@#$%^&*(testing"
    Then Verify the Card field should not accept any special Characters

  Scenario: Verify the validation text for a Invalid Card Expiry Date
    Given User navigates to Application
    When User enters an valid Card number "VISA"
    And User enter an invalid Card Expiry date
    Then Verify the card error is shown to the user that "Expiry date is not valid. Please enter the month and year for a card that has not expired."

  Scenario: Verify the validation text for a Invalid Card Security Code
    Given User navigates to Application
    When User enters an valid Card number "MASTER"
    And User enter an invalid Card Security code
    Then Verify the card security code error is shown to the user that "Security code is not valid. Please try again."