import { Task } from '@serenity-js/core';

import { SuperCalculatorWidget } from './ui';
import { Select } from '@serenity-js/web';

export const SelectOperator = {
    withSymbol: (symbol: string) =>
        Task.where(`#actor selects the ${ symbol } operator`,
            Select.option(symbol).from(SuperCalculatorWidget.operatorDropdown()),
        )
}
