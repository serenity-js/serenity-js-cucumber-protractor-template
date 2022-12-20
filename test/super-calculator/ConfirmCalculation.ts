import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { SuperCalculatorWidget } from './ui';

export const ConfirmCalculation = (): Task =>
    Task.where(`#actor confirms calculation`,
        Click.on(SuperCalculatorWidget.goButton()),
    );
