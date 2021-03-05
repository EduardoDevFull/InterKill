import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainPage } from './main-page';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class MainPageService {

  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {

    return this.http
        .get<MainPage[]>(API + '/flavio/photos');
  }
}
