import { Component } from '@angular/core';
import { MainPage } from './main-page/main-page';
import { MainPageService } from './main-page/main-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: MainPage[] = [];

  constructor(mainPageService: MainPageService) {

    mainPageService.listFromUser('flavio')
                   .subscribe(photos => this.photos = photos);
   }
 }
