import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';

import { SuperCalculatorWidget } from './ui';

export const EnterLeftSideOperand = {

    of: (value: string | number): Task =>
        Task.where(`#actor enters a left operand of ${ value }`,
            Enter.theValue(value).into(SuperCalculatorWidget.leftOperandInput()),
        ),
};
