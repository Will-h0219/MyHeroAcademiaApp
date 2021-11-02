import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

import { SearchComponent } from './pages/search/search.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CardComponent } from './components/card/card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent,
    SearchComponent,
    CardComponent,
    PaginatorComponent,
    ImageSliderComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomePageModule { }
