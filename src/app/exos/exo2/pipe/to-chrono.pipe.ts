import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toChrono'
})
export class ToChronoPipe implements PipeTransform {

  transform(value: number): string {
    
    let hour: number = Math.floor( value / 3600 );
    let minute: number = Math.floor( (value - hour * 3600) / 60 );
    let second: number = Math.floor ( value - (hour * 3600 + minute * 60)  );


    
    // let hourDisplay: string;
    // if (hour < 10) {
    //   hourDisplay = `0${hour}`;
    // }
    // else {
    //   hourDisplay = `${hour}`;
    // }

    // let minuteDisplay: string;
    // if (minute < 10) {
    //   minuteDisplay = `0${minute}`;
    // }
    // else {
    //   minuteDisplay = `${minute}`;
    // }

    // let secondDisplay: string;
    // if (second < 10) {
    //   secondDisplay = `0${second}`;
    // }
    // else {
    //   secondDisplay = `${second}`;
    // }

    // return `${hourDisplay}:${minuteDisplay}:${secondDisplay}`;

    return `${this.check(hour)}:${this.check(minute)}:${this.check(second)}`;

  }

  check(timeValue: number): number | string {
    if (timeValue < 10) {
      return `0${timeValue}`;
    }
    else {
      return `${timeValue}`;
    }
  }

}
