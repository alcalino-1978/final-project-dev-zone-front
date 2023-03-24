import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Theme, ThemeToggler } from '@shared/services/theme.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '@shared/services/storage.service';
import { UserModelAPI } from 'src/app/models/user.model';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showTheme = {
    light: false,
    dark: true,
  };
  public isLoggedIn!: boolean;
  isActived: boolean = false;
  isDarkTheme!: Observable<boolean>;
  toggleControl = new FormControl(false);
  currentUser!: UserModelAPI | null;

  @Output() changeLanguage = new EventEmitter<'es' | 'en'>();

  constructor(
    private tt: ThemeToggler,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService,
    public storageService: StorageService,
    private authService: AuthService
  ) { }


  ngAfterViewInit(): void {
    if (this.translate.currentLang == 'es') {
      this.document.body.classList.add('lang-es');
      // console.log(this.translate.currentLang);
    }
  }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    // console.log(this.currentUser)

  }
  // Cambio de Idioma
  changeLang(lang: 'es' | 'en'): void {
    if (this.translate.currentLang == 'es') {
      this.document.body.classList.add('lang-en');
      this.document.body.classList.remove('lang-es');
    } else {
      this.document.body.classList.add('lang-es');
      this.document.body.classList.remove('lang-en');
    }
    this.changeLanguage.emit(lang);
  }

  // Cambio Tema Ligh-Dark
  switchTheme(newTheme: Theme): void {
    this.tt.switchTheme(newTheme);
  }

  // LogOut
  logOut(): void {
    this.authService.logoutService();
    this.storageService.clean();
    this.router.navigate(['/login'])
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = false;
    // }
    // console.log(typeof this.currentUser)
  }
}
