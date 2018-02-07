import { AbstractControl } from '@angular/forms';

export function ConfirmPassword(control: AbstractControl) {
    if (control.root.value['pwd'] !== control.value) {
        return { incorrectPassword: true };
    }
    return null;
}

export function PasswordFormat(control: AbstractControl) {
    const _regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;

    if (control.value !== '' && !_regexp.test(control.value)) {
        return { incorrectFormat: true };
    }
    return null;
}
