import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MainPageComponent } from './main-page/main-page.component';

import { SignInComponent } from './home/signin/signin.component';
import { SignUpComponent } from './home/signup/signup.component';
import { PlansPageComponent } from './secondary-pages/plans-page/plans-page.component';

const routes: Routes = [
  {
    path: 'user/:userName',
    component: MainPageComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'plans',
    component: PlansPageComponent
  },
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
