import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';

import { SuperCalculatorWidget } from './ui';

export const EnterRightSideOperand = {

    of: (value: string | number): Task =>
        Task.where(`#actor enters a right operand of ${ value }`,
            Enter.theValue(value).into(SuperCalculatorWidget.rightOperandInput()),
        ),
};
