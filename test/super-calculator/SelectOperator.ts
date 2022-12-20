import { Task } from '@serenity-js/core';
import { Select } from '@serenity-js/web';

import { SuperCalculatorWidget } from './ui';

export const SelectOperator = {
    withSymbol: (symbol: string) =>
        Task.where(`#actor selects the ${ symbol } operator`,
            Select.option(symbol).from(SuperCalculatorWidget.operatorDropdown()),
        )
}
