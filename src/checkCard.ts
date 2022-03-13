import { AbstractControl } from '@angular/forms';

export const checkCard = (control: AbstractControl) => {
    if (control.value.length === 16) {
        return { invalid: false }
    }
    return null;
};