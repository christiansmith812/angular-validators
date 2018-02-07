import { AbstractControl } from '@angular/forms';

export function CheckboxChecked(control: AbstractControl) {
    if (control.value && control.value.length !== 0) {
        for (const o of control.value) {
            if (o.isChosen) { return null; }
        }
        return { noChoice: true };
    }
    return null;
}
