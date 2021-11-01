import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardText'
})
export class CardText implements PipeTransform {

  transform(text: string | null): unknown {
    if (!text) {
      return 'Not Available'
    }
    return text;
  }

}
