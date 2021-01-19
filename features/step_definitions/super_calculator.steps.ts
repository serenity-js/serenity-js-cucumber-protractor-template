import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import { Given, Then, When } from '@cucumber/cucumber';
import {
    CalculationResult,
    ConfirmCalculation,
    EnterLeftSideOperand,
    EnterRightSideOperand,
    SelectOperator,
} from '../support';

Given(/(.*) decides to use the Super Calculator/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(
        Navigate.to('/protractor-demo/'),
    ));

When(/(?:he|she|they) (?:adds?) (\d+) and (\d+)/, (leftSideOperand: string, rightSideOperand: string) =>
    actorInTheSpotlight().attemptsTo(
        EnterLeftSideOperand.of(leftSideOperand),
        SelectOperator.withSymbol('+'),
        EnterRightSideOperand.of(rightSideOperand),
        ConfirmCalculation(),
    ));

When(/(?:he|she|they) (?:multiply|multiplies) (\d+) and (\d+)/, (leftSideOperand: string, rightSideOperand: string) =>
    actorInTheSpotlight().attemptsTo(
        EnterLeftSideOperand.of(leftSideOperand),
        SelectOperator.withSymbol('*'),
        EnterRightSideOperand.of(rightSideOperand),
        ConfirmCalculation(),
    ));

Then(/(?:he|she|they) should see that the result is (.*)/, (expectedResult: string) =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(CalculationResult(), equals(expectedResult)),
    ));
