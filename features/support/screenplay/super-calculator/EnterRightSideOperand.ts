import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/protractor';
import { SuperCalculatorWidget } from './ui';

export const EnterRightSideOperand = {

    of: (value: string | number) =>
        Task.where(`#actor enters a right operand of ${ value }`,
            Enter.theValue(value).into(SuperCalculatorWidget.rightOperandInput),
        ),
};
