import { Component, ElementRef, HostBinding } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isLoading: boolean = false;
  containerClasses = "home";

  constructor(private elRef:ElementRef) { }
  ngAfterViewInit() {
    this.elRef.nativeElement.parentElement.classList.add(this.containerClasses);
  }
  ngOnInit(): void {
    this.getListItems();
  }

  private getListItems(): void {
    // llamada asincrona a la API
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
