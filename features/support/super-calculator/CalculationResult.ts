import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/protractor';

import { SuperCalculatorWidget } from './ui';

export const CalculationResult = (): Question<Promise<string>> =>
    Text.of(SuperCalculatorWidget.result);
