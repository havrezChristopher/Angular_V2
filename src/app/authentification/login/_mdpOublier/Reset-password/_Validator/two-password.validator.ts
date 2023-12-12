import { AbstractControl, ValidationErrors } from "@angular/forms";

export function twoPasswordValidate(controlGroup: AbstractControl): ValidationErrors | null {

    if (controlGroup.value.password && controlGroup.value.verifyPassword) {
        if (controlGroup.value.password !== controlGroup.value.verifyPassword) {
            return { twoPasswordCheck: 'Mots de passe différents' };
        }

        return null;

    }

    return { twoPasswordCheck: 'Champ obligatoire' };

}