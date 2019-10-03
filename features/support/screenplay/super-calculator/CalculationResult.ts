import { Text } from '@serenity-js/protractor';
import { SuperCalculatorWidget } from './ui';

export const CalculationResult = () => Text.of(SuperCalculatorWidget.result);
