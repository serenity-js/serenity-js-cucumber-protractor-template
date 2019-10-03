import { AnswersQuestions, Interaction, UsesAbilities } from '@serenity-js/core';
import { by } from 'protractor';
import { SuperCalculatorWidget } from './ui';

export class SelectOperator extends Interaction {

    static withSymbol(symbol: string) {
        return new SelectOperator(symbol);
    }

    constructor(
        private readonly value: string,
    ) {
        super();
    }

    performAs(actor: UsesAbilities & AnswersQuestions): PromiseLike<void> {
        return SuperCalculatorWidget.operatorDropdown.answeredBy(actor)
            .element(by.cssContainingText('option', this.value))
            .click();
    }

    toString(): string {
        return `#actor selects the ${ this.value } operator`;
    }
}
