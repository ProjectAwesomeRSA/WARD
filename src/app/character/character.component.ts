import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characterId = 1;
    firstName = 'Xerarch';
    familyName = 'Thryis';
    title = 'Peasant';
    influance = 0;
    might = 0;
    fame = 0;
    reputation = 'Neutral';
    race = 'Vampire';
    generation = 21;

    getOrdinalNumber(value: number) {
      let lastDigits: number = parseInt(value.toString().slice(-2) , 10);

      if (lastDigits < 14 && lastDigits > 10) {
        return value + 'th';
      }

      lastDigits = lastDigits % 10;

      switch (lastDigits) {
        case 1: {
          return value + 'st';
        }

        case 2: {
          return value + 'nd';
        }

        case 3: {
          return value + 'rd';
        }

        default: {
          return value + 'th';
        }
      }
    }

  constructor() { }

  ngOnInit() {
  }

}
