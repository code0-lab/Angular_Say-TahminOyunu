import 'zone.js';  // Angular için zorunlu
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule)  // FormsModule, Angular'da form işlemleri için kullanılır.
  ]
}).catch(err => console.error(err));