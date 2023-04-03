import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { StorageService } from '@shared/services/storage.service';
import { passwordPattern, emailRegx, comparePassword, checkPasswordStrength, CIFPattern } from '@utils/validators';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})



export class RegisterComponent {
  public strength = 0;
  public selectFile:any;
  public userLoginForm!: FormGroup;
  public entity:string="Company";
  public currentUser!: any;


/*variavles para el formulario de REGISTRO DE COMPANY */
public companyRegisterForm!: FormGroup;
public nameFormControl!: FormControl;
public cifFormControl!: FormControl;
public logoFormControl!: FormControl;

public fileSourceFormControl!: FormControl;
public fileSourceDevFormControl!: FormControl;

public descriptionFormControl!: FormControl;
public emailFormControl!: FormControl;
public numberEmployeesFormControl!: FormControl;
public passwordFormControl!: FormControl;
public passwordRepeatFormControl!: FormControl;
/*variavles para el formulario de REGISTRO DE DEVELOPER */
public developerRegisterForm!: FormGroup;
public fullNameFormControl!: FormControl;
public phoneNumberFormControl!: FormControl;
public ageFormControl!: FormControl;
public emailDevFormControl!: FormControl;
public passwordDevFormControl!: FormControl;
public passwordRepeatDevFormControl !: FormControl;
public imageFormControl !: FormControl;
public cvFormControl!: FormControl;
public salaryRangeMinFormControl!: FormControl;
public salaryRangeMaxFormControl!: FormControl;
public languagesFormControl!: FormControl;
public portfolioFormControl !:FormControl;
public experienceFormControl!: FormControl;
public hardSkillsFormControl!: FormControl;
public softSkillsFormControl!: FormControl;
public educationFormControl!: FormControl;
public typeJobFormControl!: FormControl;
public movilityFormControl!: FormControl;





  public isSubmitted: boolean = false;
  public isLoading: boolean = false;

  public isSuccessful = false;
  public isSignUpFailed = false;
  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';

  separatorKeysCodes: number[] = [ENTER, COMMA];
  public chipsCtrl = new FormControl('');

  public languages:string[] = [];
  public portfolios:string[] = [];
  public hardSkills:string[] = [];
  public softSkills:string[] = [];
  public education:string[] = [];


  add(event: MatChipInputEvent,chips:string[]): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      chips.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.chipsCtrl.setValue(null);
  }

  remove(chip: string,chips:string[]): void {
    const index = chips.indexOf(chip);

    if (index >= 0) {
      chips.splice(index, 1);
    }
  }

  onFileSelected(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.companyRegisterForm.patchValue({
        fileSource: file
      });
    }
  }
  onFileSelectedDev(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.developerRegisterForm.patchValue({
        fileSourceDev: file
      });
    }
  }


	constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
    ) {}



	ngOnInit() {
    this.initFormCompany()
    this.initFormDeveloper();
    //TODO UPDATE
    if (this.storageService.isLoggedIn()) {
      this.currentUser = this.storageService.getUser();
      this.isLoggedIn = true;
    }
  }

  private initFormCompany(): void {

    this.companyRegisterForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.maxLength(20)]],
        cif: ['', [Validators.required, Validators.pattern(CIFPattern)]],
        description: ['', [Validators.required, Validators.maxLength(200)]],
        email: ['', [Validators.required, Validators.pattern(emailRegx)]],
        password: ['',[Validators.required, Validators.pattern(passwordPattern)],],
        fileSource: ['', [Validators.required, ]],
        passwordRepeat: ['', [Validators.required]],
        numberEmployees: ['', [Validators.required, Validators.maxLength(9)]],
      }
    );

    // FormControls company

    this.nameFormControl = this.companyRegisterForm.get('name') as FormControl;
    this.cifFormControl = this.companyRegisterForm.get('cif') as FormControl;
    this.fileSourceFormControl = this.companyRegisterForm.get('fileSource') as FormControl;
    this.descriptionFormControl = this.companyRegisterForm.get('description') as FormControl;
    this.emailFormControl = this.companyRegisterForm.get('email') as FormControl;
    this.passwordFormControl = this.companyRegisterForm.get('password') as FormControl;
    this.passwordRepeatFormControl = this.companyRegisterForm.get('passwordRepeat') as FormControl;
    this.numberEmployeesFormControl = this.companyRegisterForm.get('numberEmployees') as FormControl;

    // Reactive control (RxJS)
    this.passwordFormControl.valueChanges.subscribe((change) => {
      this.strength = checkPasswordStrength(change);
    });

  }

private initFormDeveloper(): void {

  //FormGroup

  this.developerRegisterForm = this.formBuilder.group(
    {
      fullName: ['', [Validators.required, Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.maxLength(20)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(20)]],
      emailDev: ['', [Validators.required, Validators.pattern(emailRegx)]],
      passwordDev: ['',[Validators.required, Validators.pattern(passwordPattern)],],
      passwordRepeatDev: ['', [Validators.required]],
      fileSourceDev: ['', [Validators.required]],
      salaryRangeMin: ['', [Validators.required, Validators.maxLength(9)]],
      salaryRangeMax: ['', [Validators.required, Validators.maxLength(9)]],
      languages: ['', [Validators.required, Validators.maxLength(200)]],
      portfolio: ['', [Validators.required, Validators.maxLength(200)]],
      experience: ['', [Validators.required, Validators.maxLength(1000)]],
      hardSkills: ['', [Validators.required, Validators.maxLength(200)]],
      softSkills: ['', [Validators.required, Validators.maxLength(200)]],
      education: ['', [Validators.required, Validators.maxLength(1000)]],
      typeJob: ['', [Validators.required, Validators.maxLength(200)]],
      movility: ['', [Validators.required]],
    },
    {
      validator: comparePassword('passwordDev', 'passwordRepeatDev'),
    }
  );



    // FormControls developer
  this.fullNameFormControl = this.developerRegisterForm.get('fullName') as FormControl;
  this.ageFormControl = this.developerRegisterForm.get('age') as FormControl;
  this.phoneNumberFormControl = this.developerRegisterForm.get('phoneNumber') as FormControl;
  this.emailDevFormControl = this.developerRegisterForm.get('emailDev') as FormControl;
  this.fileSourceDevFormControl = this.developerRegisterForm.get('fileSourceDev') as FormControl;
  this.passwordDevFormControl = this.developerRegisterForm.get('passwordDev') as FormControl;
  this.passwordRepeatDevFormControl = this.developerRegisterForm.get('passwordRepeatDev') as FormControl;
  this.salaryRangeMinFormControl = this.developerRegisterForm.get('salaryRangeMin') as FormControl;
  this.salaryRangeMaxFormControl = this.developerRegisterForm.get('salaryRangeMax') as FormControl;
  this.languagesFormControl = this.developerRegisterForm.get('languages') as FormControl;
  this.portfolioFormControl = this.developerRegisterForm.get('portfolio') as FormControl;
  this.experienceFormControl = this.developerRegisterForm.get('experience') as FormControl;
  this.hardSkillsFormControl = this.developerRegisterForm.get('hardSkills') as FormControl;
  this.softSkillsFormControl = this.developerRegisterForm.get('softSkills') as FormControl;
  this.educationFormControl = this.developerRegisterForm.get('education') as FormControl;
  this.typeJobFormControl = this.developerRegisterForm.get('typeJob') as FormControl;
  this.movilityFormControl = this.developerRegisterForm.get('movility') as FormControl;

  // Reactive control (RxJS)
  this.passwordDevFormControl.valueChanges.subscribe((change) => {
    this.strength = checkPasswordStrength(change);
  });
}

  onSubmitCompany() {
    this.isSubmitted = true;
    this.entity="Company";

    if (this.companyRegisterForm.valid) {
      this.isLoading = true;

      const formData = new FormData();
      formData.append('name', this.nameFormControl.value);
      formData.append('cif', this.cifFormControl.value);
      formData.append('logo', this.fileSourceFormControl.value);
      formData.append('description', this.descriptionFormControl.value);
      formData.append('email', this.emailFormControl.value);
      formData.append('password', this.passwordFormControl.value);
      formData.append('numberEmployees', this.numberEmployeesFormControl.value);

     // Display the values
      formData.forEach((value, key) => {
        console.log(key, value);
      });

      if (this.isLoggedIn = true) {
        const id = this.currentUser.user._id;
        this.authService.updateEntity(formData, this.entity, id).subscribe({
          next: response => {
            console.log(response.data);
            this.storageService.saveUser(response.data.updatedCompany, this.entity);
            this.companyRegisterForm.reset();
            this.isLoading = false;
            this.router.navigate(['/profile']);
          },
          error: err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        });
      } else {
        this.authService.registerCompany(formData).subscribe({
          next: response => {
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.storageService.saveUser(response.data.createdCompany, this.entity);
            this.storageService.saveToken(response.data);
            console.log(response.data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.companyRegisterForm.reset();
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

  onSubmitDeveloper() {

    this.isSubmitted = true;
    this.entity="Developer";

    if (this.developerRegisterForm.valid) {
      this.isLoading = true;

      const formDataDev = new FormData();
      formDataDev.append('fullName', this.fullNameFormControl.value);
      formDataDev.append('age', this.ageFormControl.value);
      formDataDev.append('phoneNumber', this.phoneNumberFormControl.value);
      formDataDev.append('email', this.emailDevFormControl.value);
      formDataDev.append('password', this.passwordDevFormControl.value);
      formDataDev.append('image', this.fileSourceDevFormControl.value);
      formDataDev.append('salaryRangeMin', this.salaryRangeMinFormControl.value);
      formDataDev.append('salaryRangeMax', this.salaryRangeMaxFormControl.value);
      formDataDev.append('languages', this.languagesFormControl.value);
      formDataDev.append('portfolio', this.portfolioFormControl.value);
      formDataDev.append('experience', this.experienceFormControl.value);
      formDataDev.append('hardSkills', this.hardSkillsFormControl.value);
      formDataDev.append('softSkills', this.softSkillsFormControl.value);
      formDataDev.append('education', this.educationFormControl.value);
      formDataDev.append('typeJob', this.typeJobFormControl.value);
      formDataDev.append('movility', this.movilityFormControl.value);

      // Display the values
      // formDataDev.forEach((value, key) => {
      //   console.log(key, value);
      // });
      if (this.isLoggedIn = true) {
        debugger
        const id = this.currentUser.user._id;
        this.authService.updateEntity(formDataDev, this.entity, id).subscribe({
          next: response => {
            console.log(response.data);
            this.storageService.saveUser(response.data.updatedDeveloper, this.entity);
            this.companyRegisterForm.reset();
            this.isLoading = false;
            this.router.navigate(['/profile']);
          },
          error: err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        });
      } else {
        this.authService.registerDeveloper(formDataDev).subscribe({
          next: response => {
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            this.storageService.saveUser(response.data.createdDeveloper, this.entity);
            this.storageService.saveToken(response.data);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
             console.log(response)
            this.developerRegisterForm.reset();
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
}
