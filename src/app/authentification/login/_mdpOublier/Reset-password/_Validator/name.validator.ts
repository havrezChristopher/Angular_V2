import { AbstractControl, ValidationErrors } from "@angular/forms";

export function nameValidator(control: AbstractControl): ValidationErrors | null {

    if (control.value) {
        if (control.value.length < 3) {
            return { name: 'Votre nom doit contenir au moins 3 caractères.' };
        }

        if (control.value === 'Tristan') {
            return { name: 'Tu ne peux entrer le nom de Tristan.' };
        }

        return null;
    }
    else {
        return { name: 'Champ obligatoire.' };
    }
}