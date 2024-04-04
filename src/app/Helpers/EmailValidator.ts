import { AbstractControl } from '@angular/forms';
export class EmailValidator {
    static validate(control: AbstractControl): { [key: string]: any } | null {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(control.value)) {
            return { invalidEmail: true };
        }

        return null;
    }
}