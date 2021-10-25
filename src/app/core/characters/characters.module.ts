import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    SearchComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
