import { Component } from '@angular/core';
import { CatApiService } from '@shared/services/catApi.service';
import { CatModelAPI } from '../../../../models/developer.model';
import { Router } from '@angular/router';

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

  ) {}

  ngOnInit(): void {
    this.getCatList();
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
