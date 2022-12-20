/* eslint-disable unicorn/filename-case */
import { Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { Actor } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import {
    CalculationResult,
    ConfirmCalculation,
    EnterLeftSideOperand,
    EnterRightSideOperand,
    SelectOperator,
} from '../../test';

Given('{actor} decides to use the Super Calculator', (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/protractor-demo/'),
    ));

When('{pronoun} add(s) {int} and {int}', (actor:Actor, leftSideOperand: number, rightSideOperand: number) =>
    actor.attemptsTo(
        EnterLeftSideOperand.of(leftSideOperand),
        SelectOperator.withSymbol('+'),
        EnterRightSideOperand.of(rightSideOperand),
        ConfirmCalculation(),
    ));

When('{pronoun} multiply/multiplies {int} and {int}', (actor: Actor, leftSideOperand: number, rightSideOperand: number) =>
    actor.attemptsTo(
        EnterLeftSideOperand.of(leftSideOperand),
        SelectOperator.withSymbol('*'),
        EnterRightSideOperand.of(rightSideOperand),
        ConfirmCalculation(),
    ));

Then('{pronoun} should see that the result is {}', (actor: Actor, expectedResult: string) =>
    actor.attemptsTo(
        Ensure.that(CalculationResult(), equals(expectedResult)),
    ));
