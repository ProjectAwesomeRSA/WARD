import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  charater: any;
  tempCharacterValue = 1;

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    this.http.get('http://localhost:5000/api/characters/' + this.tempCharacterValue.toString()).subscribe(response => {
      this.charater = response;
    }, error => {
      console.log(error);
    });
  }


}
