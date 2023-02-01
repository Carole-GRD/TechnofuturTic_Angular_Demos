import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toChrono'
})
export class ToChronoPipe implements PipeTransform {

  transform(value: number): string {
    
    const hour: number = Math.floor( value / 3600 );
    const minute: number = Math.floor( value % 3600 / 60 );
    const second: number = Math.floor ( value % 3600 % 60 );

    return `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;

  }

}
