import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatApiService } from '@shared/services/catApi.service';
import { CatModelAPI } from 'src/app/models/cat.model';

@Component({
  selector: 'app-detail-cat',
  templateUrl: './detail-cat.component.html',
  styleUrls: ['./detail-cat.component.scss']
})
export class DetailCatComponent {
  public catDetail!: CatModelAPI;
  public isLoading: boolean = false;

  public rating: number = 2;
  public starCount: number = 5;
  constructor(
    private activatedRouter: ActivatedRoute,
    private catApiService : CatApiService,
    private location: Location
  ) {


  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        this.getCat(params['id']);
      }
    )
  }

  getCat(id:number): void {
    this.isLoading = true;
    this.catApiService.getCatId(id).subscribe(
      (response: CatModelAPI) => {
        this.catDetail = response;
        this.isLoading = false;
      }, (error) => {
        console.log('Algo ha petado y estoy en el Componente');
      }
    )
  }
  backWithLocation() {
    this.location.back();
  }
}
