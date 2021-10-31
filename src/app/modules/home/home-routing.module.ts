import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersComponent } from "./pages/characters/characters.component";
import { SearchComponent } from "./pages/search/search.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: 'characters', component: CharactersComponent},
            {path: 'search', component: SearchComponent},
            {path: 'character/:id', component: CharacterComponent}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }