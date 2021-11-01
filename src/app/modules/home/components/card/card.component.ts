import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../../data/characters/interfaces/characters.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() character!: Character;
  imgUrl!: string;

  ngOnInit(): void {
    this.imgUrl = this.character.images[0];
  }

  updateUrl() {
    if (this.character.images.length > 1) {
      let currentIdx = this.character.images.indexOf(this.imgUrl);
      if (currentIdx !== this.character.images.length - 1) {
        this.imgUrl = this.character.images[currentIdx + 1];
      } else {
        this.imgUrl = 'assets/images/no_image_available.svg';
      }
    } else {
      this.imgUrl = 'assets/images/no_image_available.svg';
    }
  }
}
