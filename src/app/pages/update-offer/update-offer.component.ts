import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '@shared/services/storage.service';
import { JobOfferModelAPI, JobOfferModelPut } from './../../models/joboffer.model';
import { JobofferService } from './../../shared/services/joboffer.service';



import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.scss']
})
export class UpdateOfferComponent {
  public offerDetail!: JobOfferModelAPI;
  public isLoading: boolean = false;
  public jobOfferID!: string;

  public isSubmitted: boolean = false;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public offerRoute: string = '';

  public company: any = window.sessionStorage.getItem('auth-user');
  public userJSON = window.sessionStorage.getItem('auth-user') as string;
  public userParse = JSON.parse(this.userJSON);
  public companyID = this.userParse.user._id;

  public keywords: string[] = [];

  public keywordCtrl = new FormControl('');

  public updateOfferForm!: FormGroup;

  public titleFormControl!: FormControl;
  public descriptionFormControl!: FormControl;
  public salaryMinFormControl!: FormControl;
  public salaryMaxFormControl!: FormControl;
  public shiftFormControl!: FormControl;
  public contractFormControl!: FormControl;
  public typeJobFormControl!: FormControl;
  public vacanciesFormControl!: FormControl;
  public keywordsFormControl!: FormControl;
  public isLoggedIn = false;
  public currentUser!: any;

  constructor (
    private formBuilder: FormBuilder,
    private jobofferService: JobofferService,
    private storageService: StorageService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getOfferId();
    this.initForm(this.jobOfferID);
    if (this.storageService.isLoggedIn() === true) {
      this.currentUser = this.storageService.getUser();
      this.isLoggedIn = true;
    }
  }
  private getOfferId(): void {
    this.activatedRouter.paramMap.subscribe((params) => {
      this.jobOfferID = params.get('id') as string;
    });
  }
  private initForm(id: string): void {
    // FormGroup
    this.updateOfferForm = this.formBuilder.group(
      {
      title: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.maxLength(2000)]],
      salaryMin: [0, [Validators.required]],
      salaryMax: [0, [Validators.required]],
      shift: ['', [Validators.required]],
      contract: ['', [Validators.required]],
      typejob: ['', [Validators.required]],
      vacancies: ['', [Validators.required]],
      keywords: ['mario']
    });

    this.jobofferService.getOfferbyID(id).subscribe(
      (data: JobOfferModelAPI) => {
        this.offerDetail = data;
        this.keywords = data.keywords
        this.updateOfferForm.patchValue({
          title: this.offerDetail.title,
          description: this.offerDetail.description,
          salaryMin: this.offerDetail.salaryRange.min,
          salaryMax: this.offerDetail.salaryRange.max,
          shift: this.offerDetail.hiring.shift,
          contract: this.offerDetail.hiring.contract,
          typejob: this.offerDetail.typeJob,
          vacancies: this.offerDetail.vacancies,
          keywords: this.keywords
        })
        this.isLoading = false;
      }
    )
    // FormControls
    this.titleFormControl = this.updateOfferForm.get('title') as FormControl;
    this.descriptionFormControl = this.updateOfferForm.get('description') as FormControl;
    this.salaryMinFormControl = this.updateOfferForm.get('salaryMin') as FormControl;
    this.salaryMaxFormControl = this.updateOfferForm.get('salaryMax') as FormControl;
    this.shiftFormControl = this.updateOfferForm.get('shift') as FormControl;
    this.contractFormControl = this.updateOfferForm.get('contract') as FormControl;
    this.typeJobFormControl = this.updateOfferForm.get('typejob') as FormControl;
    this.vacanciesFormControl = this.updateOfferForm.get('vacancies') as FormControl;
    this.keywordsFormControl = this.updateOfferForm.get('keywords') as FormControl;
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
    console.log(this.salaryMinFormControl);
    console.log(this.salaryMaxFormControl);
    console.log(this.updateOfferForm);
    console.log(this.updateOfferForm.valid);
    this.isSubmitted = true;
    if(this.updateOfferForm.valid) {

      const userPARSED = JSON.parse(this.userJSON);
      console.log(userPARSED.user._id);

      const offer: JobOfferModelPut = {
        title: this.titleFormControl.value as string,
        description: this.descriptionFormControl.value as string,
        company: [userPARSED.user._id] as string[],
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

      // sacar el offer id por oferta
      this.jobofferService.updateOfferByID(this.jobOfferID, offer).subscribe
      ((dataOffer) => {
        const offerId = dataOffer._id as string;
        console.log(offerId);
        this.offerRoute = offerId;

        this.router.navigateByUrl(`/offers/${this.jobOfferID}`)
      })
    } else {
      console.log('por aqui no es :/');

    }
  }

}
