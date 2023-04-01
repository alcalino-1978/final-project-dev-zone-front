import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { StorageService } from '@shared/services/storage.service';
import { passwordPattern, emailRegx } from '@utils/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formName = 'userLoginDeveloperForm';
  public strength = 0;
  public userLoginForm!: FormGroup;
  public emailFormControl!: FormControl;
  public passwordFormControl!: FormControl;
  public passwordRepeatFormControl!: FormControl;

  public isSubmitted: boolean = false;
  public isLoading: boolean = false;

  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';

	constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
    ) {}

  // Método para cambiar el nombre del formulario
  setType(a:any) {
    const type = a.tab.textLabel;
    this.userLoginForm.get('type')?.setValue(type);
  }

	ngOnInit() {
    this.initForm();
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }


  private initForm(): void {
    // FormGroup
    this.userLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailRegx)]],
      // TODO PONER OTRA VEZ LA VALIDACIÓN DE PASSWORD
      password: ['', [Validators.required]],
      type: ['Developer', [Validators.required]]
    }),

    // FormControls
    this.emailFormControl = this.userLoginForm.get('email') as FormControl;
    this.passwordFormControl = this.userLoginForm.get('password') as FormControl;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.userLoginForm.valid) {
      this.isLoading = true;

      const user = {
        email: this.emailFormControl.value,
        password: this.passwordFormControl.value,
        type: this.userLoginForm.get('type')?.value
      }

      this.authService.login(user.email, user.password, user.type).subscribe({
        next: response => {
          console.log(response.data.user)
          this.storageService.saveUser(response.data.user, user.type);
          this.storageService.saveToken(response.data);
          // console.log(this.storageService.getUser())
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.userLoginForm.reset();
          this.isLoading = false;
          this.router.navigate(['/profile']);
          // this.reloadPage();
        },
        error: err => {
          this.errorMessage = err.error.message;
          // console.log(err.error.message)
          this.isLoginFailed = true;
        }
      });
      setTimeout(() => {

      }, 3000);
    }
  }
}
