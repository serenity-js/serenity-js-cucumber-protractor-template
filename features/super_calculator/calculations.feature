Feature: Calculations

  In order to learn how to use Serenity/JS with Cucumber and Protractor
  As a Curious Developer
  I'd like to see an example

  Background:

    Given Callie decides to use the Super Calculator

  @important @smoke
  Scenario: Adding numbers

  The ["Super Calculator"](https://juliemr.github.io/protractor-demo/) was developed by Julie Ralph,
  the author of Protractor, to demonstrate what Protractor is capable of.

  By the way, did you notice that with **Serenity/JS** you can use [Markdown](https://en.wikipedia.org/wiki/Markdown)
  to better describe each `Feature` and `Scenario`?

    When she adds 19 and 23
    Then she should see that the result is 42

  @fast @smoke
  Scenario: Multiplying numbers

    When she multiplies 6 and 2
    Then she should see that the result is 12
