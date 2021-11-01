import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { CharactersService } from '../../../../data/characters/services/characters.service';
import { Character } from '../../../../data/characters/interfaces/characters.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character!: Character;
  editable: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.charactersService.getCharacterById(id))
    )
    .subscribe((character) => {
      console.log(character);
      this.character = character;
      this.editable = character.custom!;
    });
  }

}
