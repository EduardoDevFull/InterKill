import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { MainPageModule } from './main-page/main-page.module';
import { HomeModule } from './home/home.module';
import { SecondaryPagesModule } from './secondary-pages/secondary-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    MainPageModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    HttpClientModule,
    SecondaryPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
