import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Directive({
  selector: '[itemNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ItemNameValidatorDirective,
      multi: true,
    },
  ],
})
export class ItemNameValidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value.length > 8) {
      return { itemname: 'error' };
    }
    return null;
  }
}
