import { Component, Input, SimpleChanges } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {

  @Input() images: string[] = [];
  currentImg: string = '';

  // SnakBar
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  duration: number = 2;

  constructor(private snackBar: MatSnackBar) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.images.length !== 0) {
      this.currentImg = this.images[0];
    } else {
      this.currentImg = 'assets/images/no_image_available.svg';
    }
  }

  updateUrl() {
    if (this.images.length > 1) {
      let currentIdx = this.images.indexOf(this.currentImg);
      this.currentImg = (currentIdx === this.images.length - 1)
        ? 'assets/images/no_image_available.svg'
        : this.images[currentIdx + 1];
    } else {
      this.currentImg = 'assets/images/no_image_available.svg';
    }
  }

  nextImage() {
    let currentIdx = this.images.indexOf(this.currentImg);
    if (currentIdx !== this.images.length - 1) {
      this.currentImg = this.images[currentIdx + 1];
    } else {
      this.openSnackBar('No more images available');
    }
  }

  previousImage() {
    let currentIdx = this.images.indexOf(this.currentImg);
    if (currentIdx !== 0) {
      this.currentImg = this.images[currentIdx - 1];
    } else {
      this.openSnackBar('No more images available');
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', {
      duration: this.duration * 1000,
      verticalPosition: this.verticalPosition
    });
  }

}
