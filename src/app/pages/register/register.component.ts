import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { StorageService } from '@shared/services/storage.service';
import { passwordPattern, emailRegx, comparePassword, checkPasswordStrength } from '@utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public strength = 0;
  public selectFile:any;

  public userLoginForm!: FormGroup;
  public nameFormControl!: FormControl;
  //public lastNameFormControl!: FormControl;
  public cifFormControl!: FormControl;
  public logoFormControl!: FormControl;
  public fileSourceFormControl!: FormControl;


  public descriptionFormControl!: FormControl;
  public emailFormControl!: FormControl;
  public numberEmployeesFormControl!: FormControl;
  //public phoneNumberFormControl!: FormControl;

  public passwordFormControl!: FormControl;
  public passwordRepeatFormControl!: FormControl;

  public isSubmitted: boolean = false;
  public isLoading: boolean = false;

  public isSuccessful = false;
  public isSignUpFailed = false;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';

	constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
    ) {}



	ngOnInit() {
    this.initForm();
  }

  private initForm(): void {

    //FormGroup

    this.userLoginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      cif: ['', [Validators.required, Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.pattern(emailRegx)]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
      fileSource: ['', [Validators.required, ]],
      passwordRepeat: ['', [Validators.required, ]],
      numberEmployees: ['', [Validators.required, Validators.maxLength(9)]],
    }
    ,
    {
      validator: comparePassword('password', 'passwordRepeat')
    });

    // FormControls

    this.nameFormControl = this.userLoginForm.get('name') as FormControl;
    this.cifFormControl = this.userLoginForm.get('cif') as FormControl;
    this.fileSourceFormControl = this.userLoginForm.get('fileSource') as FormControl;
    this.descriptionFormControl = this.userLoginForm.get('description') as FormControl;
    this.emailFormControl = this.userLoginForm.get('email') as FormControl;
    this.passwordFormControl = this.userLoginForm.get('password') as FormControl;
    this.passwordRepeatFormControl = this.userLoginForm.get('passwordRepeat') as FormControl;
    this.numberEmployeesFormControl = this.userLoginForm.get('numberEmployees') as FormControl;

    // Reactive control (RxJS)
    this.passwordFormControl.valueChanges.subscribe((change) => {
      this.strength = checkPasswordStrength(change);
    });

  }

  onFileSelected(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userLoginForm.patchValue({
        fileSource: file
      });
  }

}

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.userLoginForm);

    if (this.userLoginForm.valid) {
      this.isLoading = true;


      const formData = new FormData();
      formData.append('name', this.nameFormControl.value);
      formData.append('cif', this.cifFormControl.value);
      formData.append('logo', this.fileSourceFormControl.value);
      formData.append('description', this.descriptionFormControl.value);
      formData.append('email', this.emailFormControl.value);
      formData.append('password', this.passwordFormControl.value);
      formData.append('numberEmployees', this.numberEmployeesFormControl.value);

      this.authService.registerCompany(formData).subscribe({
        next: response => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          // this.storageService.saveUser(response.data.userDb);
          this.storageService.saveToken(response.data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          // console.log(response)
          this.userLoginForm.reset();
          this.isLoading = false;
          this.router.navigate(['/profile']);
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }
  }
}
