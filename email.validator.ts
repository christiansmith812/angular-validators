import { AbstractControl } from '@angular/forms';

export function EmailFormat(control: AbstractControl) {
    const _regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/i;

    if (control.value !== '' && (control.value.length <= 5 || !_regexp.test(control.value))) {
        return { incorrectFormat: true };
    }

    return null;
}
