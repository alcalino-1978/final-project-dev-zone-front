import { Component } from '@angular/core';
import { CatApiService } from '@shared/services/catApi.service';
import { CatModelAPI } from '../../../../models/cat.model';
import { Router } from '@angular/router';
import { TranslatorService } from '@shared/services/translator.service';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.scss']
})
export class ListCatComponent {
  catList: CatModelAPI[] = []
  isLoading: boolean = false;

  constructor(
    private catApiService : CatApiService,
    private router: Router,
    // private translatorService: TranslatorService,

  ) {}

  ngOnInit(): void {
    this.getCatList();
    // this.translatorService.translateMessage('ME GUSTA MÁS ÁNGULAR QUE REACT')
  }

  private getCatList(): void {
    this.isLoading = true;
    this.catApiService.getCats().subscribe(
      (response: CatModelAPI[]) => {
        this.catList = response;
        // console.log(response)
        this.isLoading = false;
      }, (error) => {
      });
  }
  getCatDetail(id:any){
    console.log(id)
    this.router.navigateByUrl(`/breeds/${id}`)
  }

}
