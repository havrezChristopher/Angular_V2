import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {

    if (control.value) {

        if (control.value.length <= 5) {
            return { name: 'Votre email doit contenir au moins 6 caractères.' };
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
            return { name: 'Votre email ne respecte pas le format défini.' };
        }

        return null;
    }

    return { name: 'Champ obligatoire.' };

}