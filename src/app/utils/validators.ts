import { FormGroup } from "@angular/forms";

export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

export function comparePassword(controlName1: string, controlName2: string) {
  return (formGroup: FormGroup) => {
    const passwordFormControl = formGroup.controls[controlName1];
    const passwordRepeatFormControl = formGroup.controls[controlName2];

    if (passwordRepeatFormControl.errors && !passwordRepeatFormControl.errors?.['mustMatch']) {
      return;
    }

    if (passwordFormControl.value !== passwordRepeatFormControl.value) {
      passwordRepeatFormControl.setErrors({ mustMatch: true });
    } else {
      passwordRepeatFormControl.setErrors(null);
    }
  };
}

export function checkPasswordStrength(password: string): number {
  // Initialize variables
  let strength = 0;
  // Check password length
  if (password.length > 8) {
    strength++;
  }
  // Check for lowe
  if (password.match(/[a-z]/)) {
    strength++;
  }
  // Check for capital
  if (password.match(/[A-Z]/)) {
    strength++;
  }
  // Check for numbers
  if (password.match(/\d/)) {
    strength++;
  }
  return strength;
}

