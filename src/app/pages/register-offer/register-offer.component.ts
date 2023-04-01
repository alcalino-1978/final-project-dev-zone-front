import { JobOfferModelPost } from './../../models/joboffer.model';
import { JobofferService } from './../../shared/services/joboffer.service';



import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-register-offer',
  templateUrl: './register-offer.component.html',
  styleUrls: ['./register-offer.component.scss']
})
export class RegisterOfferComponent {

  separatorKeysCodes: number[] = [ENTER, COMMA];

  public company: any = window.localStorage.getItem('_id');

  public keywords: string[] = [];

  public keywordCtrl = new FormControl('');

  public registerOfferForm!: FormGroup;

  public titleFormControl!: FormControl;
  public descriptionFormControl!: FormControl;
  public salaryMinFormControl!: FormControl;
  public salaryMaxFormControl!: FormControl;
  public shiftFormControl!: FormControl;
  public contractFormControl!: FormControl;
  public typeJobFormControl!: FormControl;
  public vacanciesFormControl!: FormControl;
  public keywordsFormControl!: FormControl;

  constructor (
    private formBuilder: FormBuilder,
    private jobofferService: JobofferService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    // FormGroup
    this.registerOfferForm = this.formBuilder.group({
      title: [''],
      description: [''],
      salaryMin: [''],
      salaryMax: [''],
      shift: [''],
      contract: [''],
      typejob: [''],
      vacancies: [''],
      keywords: ['']
    })

    // FormControls
    this.titleFormControl = this.registerOfferForm.get('title') as FormControl;
    this.descriptionFormControl = this.registerOfferForm.get('description') as FormControl;
    this.salaryMinFormControl = this.registerOfferForm.get('salaryMin') as FormControl;
    this.salaryMaxFormControl = this.registerOfferForm.get('salaryMax') as FormControl;
    this.shiftFormControl = this.registerOfferForm.get('shift') as FormControl;
    this.contractFormControl = this.registerOfferForm.get('contract') as FormControl;
    this.typeJobFormControl = this.registerOfferForm.get('typejob') as FormControl;
    this.vacanciesFormControl = this.registerOfferForm.get('vacancies') as FormControl;
    this.keywordsFormControl = this.registerOfferForm.get('keywords') as FormControl;
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.keywords.push(value);
    }
    event.chipInput!.clear();
    this.keywordCtrl.setValue(null);
  }


  public remove(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  public onSubmit(): void {
    if(this.registerOfferForm.valid) {

      const offer: JobOfferModelPost = {
        title: this.titleFormControl.value as string,
        description: this.descriptionFormControl.value as string,
        company: [this.company] as string[],
        salaryRange: {
          min: this.salaryMinFormControl.value as number,
          max:this.salaryMaxFormControl.value as number
        },
        hiring: {
          shift: this.shiftFormControl.value as string,
          contract: this.contractFormControl.value as string
        },
        offerStatus: true,
        typeJob: this.typeJobFormControl.value as string,
        vacancies: this.vacanciesFormControl.value as number,
        keywords: this.keywordsFormControl.value as string[]
      }

      console.log(offer);
      const aaa = typeof offer.keywords;
      console.log(aaa);
      console.log(offer.keywords);

      this.jobofferService.postOffer(offer).subscribe
      ((data: JobOfferModelPost) => {
        console.log(data);
      })

    } else {
      console.log('por aqui no es :/');

    }
  }

}
