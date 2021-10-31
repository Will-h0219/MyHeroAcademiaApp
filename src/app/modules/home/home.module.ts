import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

import { SearchComponent } from './pages/search/search.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from './pages/characters/characters.component';



@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomePageModule { }
