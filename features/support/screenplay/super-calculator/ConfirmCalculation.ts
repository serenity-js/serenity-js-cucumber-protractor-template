import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { SuperCalculatorWidget } from './ui';

export const ConfirmCalculation = () =>
    Task.where(`#actor confirms calculation`,
        Click.on(SuperCalculatorWidget.goButton),
    );
