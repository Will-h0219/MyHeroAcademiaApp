import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  imports: [
  ]
})
export class AppRoutingModule { }
