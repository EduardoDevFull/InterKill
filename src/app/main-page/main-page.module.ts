import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageContentComponent,
    FooterComponent,
    MainPageComponent
  ],
  exports: [
    HeaderComponent,
    PageContentComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})

export class MainPageModule { }
