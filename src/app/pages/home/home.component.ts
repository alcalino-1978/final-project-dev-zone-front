import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isLoading: boolean = false;
  containerClasses = "home";


  constructor(
    private elRef:ElementRef,
  ) { }

  ngAfterViewInit() {
    this.elRef.nativeElement.parentElement.classList.add(this.containerClasses);
  }
  ngOnInit(): void {

  }

}
