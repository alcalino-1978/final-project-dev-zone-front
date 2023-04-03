import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const CIFPattern = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const emailRegx =
  /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

export function comparePassword(controlName1: string, controlName2: string) {
  return (formGroup: FormGroup) => {
    const passwordFormControl = formGroup.controls[controlName1];
    const passwordRepeatFormControl = formGroup.controls[controlName2];

    if (
      passwordRepeatFormControl.errors &&
      !passwordRepeatFormControl.errors?.['mustMatch']
    ) {
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
  if (!password) {
    return 0; // devolver 0 si el valor es nulo
  }
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

// export function salaryRangeValidator(formGroup: FormGroup): ValidationErrors | void {
//   const salaryMin = formGroup.get('salaryMin')?.value as number;
//   const salaryMax = formGroup.get('salaryMax')?.value as number;

//   if (salaryMax && salaryMin && salaryMax < salaryMin) {
//     const a = console.log(formGroup);
//     const b = console.log();

//     return a;
//   }

//   return  console.log();
//}

export function salaryRangeValidator(min: number, max: number) {
return (formGroup: FormGroup) => {
  const salaryMinFormControl = formGroup.controls[min];
  const salaryMaxFormControl = formGroup.controls[max];
  if (salaryMaxFormControl.value < salaryMinFormControl.value) {
    return salaryMaxFormControl.setErrors({maxValue: true});
  } else {

    return salaryMaxFormControl.setErrors(null);
  }
}
}

export function validateCIF(cif: string): boolean {
  // Comprobar que la longitud es 9 caracteres
  if (cif.length !== 9) {
    return false;
  }

  // Extraer el primer caracter (letra) y convertirla a número
  const firstChar = cif.charAt(0).toUpperCase();
  const firstCharCode = firstChar.charCodeAt(0);
  let firstNumber;
  if (firstCharCode >= 65 && firstCharCode <= 90) {
    firstNumber = firstCharCode - 64;
  } else {
    return false;
  }

  // Comprobar si el primer número es válido
  if (
    firstNumber < 1 ||
    firstNumber > 23 ||
    firstNumber === 9 ||
    firstNumber === 15 ||
    firstNumber === 16 ||
    firstNumber === 20
  ) {
    return false;
  }

  // Calcular la suma de los números de posición par
  let evenSum = 0;
  for (let i = 1; i < 8; i += 2) {
    const number = parseInt(cif.charAt(i), 10);
    if (isNaN(number)) {
      return false;
    }
    evenSum += number;
  }

  // Calcular la suma de los números de posición impar
  let oddSum = 0;
  for (let i = 0; i < 9; i += 2) {
    const number = parseInt(cif.charAt(i), 10);
    if (isNaN(number)) {
      return false;
    }
    let oddNumber = number * 2;
    if (oddNumber > 9) {
      oddNumber = oddNumber - 9;
    }
    oddSum += oddNumber;
  }

  // Calcular la suma total
  const totalSum = evenSum + oddSum;

  // Extraer el último dígito de la suma total
  const lastDigit = parseInt(String(totalSum).charAt(1), 10);

  // Calcular el dígito de control
  let controlDigit;
  if (lastDigit === 0) {
    controlDigit = 0;
  } else {
    controlDigit = 10 - lastDigit;
  }

  // Comprobar si el último caracter coincide con el dígito de control
  const lastChar = cif.charAt(8);
  if (isNaN(parseInt(lastChar, 10))) {
    return lastChar.toUpperCase() === String.fromCharCode(controlDigit + 64);
  } else {
    return parseInt(lastChar, 10) === controlDigit;
  }
}

// Ejemplo de como usarlo
// const cif = 'B12345678';
// const isValid = validateCIF(cif);
// console.log(isValid); // true
