import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class SuperCalculatorWidget {
    static leftOperandInput     = Target.the('left operand input').located(by.model('first'));
    static operatorDropdown     = Target.the('operator dropdown').located(by.css('select'));
    static rightOperandInput    = Target.the('right operand input').located(by.model('second'));
    static goButton             = Target.the('"Go" button').located(by.id('gobutton'));

    static result               = Target.the('result').located(by.css('h2'));
}
