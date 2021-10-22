import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { CategoriesComponent } from './pages/categories/categories.component';



@NgModule({
  declarations: [
    SearchComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
