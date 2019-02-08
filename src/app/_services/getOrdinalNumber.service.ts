import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOrdinalNumberService {

constructor() { }

  convert(value: number) {
    let lastDigits: number = parseInt(value.toString().slice(-2) , 10);
    let ordinal: string;

    if (lastDigits < 14 && lastDigits > 10) {
      return value + 'th';
    }

    lastDigits = lastDigits % 10;

    switch (lastDigits) {
      case 1: {
        return ordinal = value + 'st';
      }

      case 2: {
        return ordinal = value + 'nd';
      }

      case 3: {
        return ordinal = value + 'rd';
      }

      default: {
        return ordinal = value + 'th';
      }
    }
  }
}
