import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetOrdinalNumberService } from './getOrdinalNumber.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterService {

  name: string;

  familyName: string;

  title: string;

  influance: number;

  might: number;

  fame: number;

  reputation: string;

  race: string;

  ordinalGeneration: string;

  charater: any = null;
  tempCharacterValue = 1;

  constructor(private http: HttpClient,
              private getOrdinalNumber: GetOrdinalNumberService) { }

  getCharacterInfo() {
    this.http.get('http://localhost:5000/api/characters/' + this.tempCharacterValue.toString()).subscribe(response => {
      this.charater = response;
      this.updateCharacter();
    }, error => {
      console.log(error);
    });
  }

  updateCharacter() {
    if (this.charater != null) {
      this.name = this.charater.name;

      this.familyName = this.charater.familyName;

      this.title = this.charater.title;

      this.influance = this.charater.influance;

      this.might = this.charater.might;

      this.fame = this.charater.fame;

      this.reputation = this.charater.reputation;

      this.race = this.charater.race;

      this.ordinalGeneration = this.getOrdinalNumber.convert(this.charater.generation);
    }
  }
}
