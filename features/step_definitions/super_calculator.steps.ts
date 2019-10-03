import { Ensure, equals } from '@serenity-js/assertions';
import { WithStage } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import { Given, Then, When } from 'cucumber';
import {
    CalculationResult,
    ConfirmCalculation,
    EnterLeftSideOperand,
    EnterRightSideOperand,
    SelectOperator,
} from '../support/screenplay';

Given(/(.*) decides to use the Super Calculator/, function (this: WithStage, actorName: string) {
    return this.stage.theActorCalled(actorName).attemptsTo(
        Navigate.to('/protractor-demo/'),
    );
});

When(/(?:he|she|they) (?:adds?) (\d+) and (\d+)/, function (this: WithStage, leftSideOperand: string, rightSideOperand: string) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        EnterLeftSideOperand.of(leftSideOperand),
        SelectOperator.withSymbol('+'),
        EnterRightSideOperand.of(rightSideOperand),
        ConfirmCalculation(),
    );
});

Then(/(?:he|she|they) should see that the result is (.*)/, function (this: WithStage, expectedResult: string) {
    return this.stage.theActorInTheSpotlight().attemptsTo(
        Ensure.that(CalculationResult(), equals(expectedResult)),
    );
});
