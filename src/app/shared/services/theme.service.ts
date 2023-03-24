import { Injectable, Inject, Renderer2, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({
  providedIn: 'root'
})

export class ThemeToggler {
  currentTheme: Theme = 'light-theme';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.body.classList.add(this.currentTheme);
  }

  switchTheme(newTheme: Theme): void {
    this.document.body.classList.replace(this.currentTheme, newTheme)
    this.currentTheme = newTheme;
  }
}
