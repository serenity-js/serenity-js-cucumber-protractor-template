import { By,PageElement } from '@serenity-js/web';

export class SuperCalculatorWidget {
    static leftOperandInput = () =>
        PageElement.located(By.css('[ng-model="first"]'))
            .describedAs('left operand input');

    static operatorDropdown = () =>
        PageElement.located(By.css('select'))
            .describedAs('operator dropdown');

    static rightOperandInput = () =>
        PageElement.located(By.css('[ng-model="second"]'))
            .describedAs('right operand input');
    static goButton = () =>
        PageElement.located(By.id('gobutton'))
            .describedAs('"Go" button');

    static result = () =>
        PageElement.located(By.css('h2'))
            .describedAs('result');
}
