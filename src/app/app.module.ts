import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImageDirective } from './image.directive';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ClassDirective,
    TimesDirective,
    HomeComponent,
    NotFoundComponent,
    ImageDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
