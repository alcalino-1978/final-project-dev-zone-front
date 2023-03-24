import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Schrödinger's Cat";
  lang = 'es';
  isDarkTheme!: Observable<boolean>;
  public url = '';

    constructor(private router: Router, private translateService: TranslateService) {
      router.events.subscribe((route) => {
      if(route instanceof NavigationEnd){
         this.url = route.url;
         if(this.url && this.url.length > 0){
           this.url = this.url.slice(1);
         }
      }
   });
 }

  ngOnInit(): void {
    this.translateService.setDefaultLang(this.lang);
    this.translateService.use(this.lang);
  }

  setLang(lang: 'es' | 'en'): void {
    this.lang = lang;
    this.translateService.use(lang);
  }
}
