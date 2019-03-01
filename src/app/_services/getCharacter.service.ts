import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetOrdinalNumberService } from './getOrdinalNumber.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterService {
  baseUrl = environment.apiUrl + 'characters/';

  name: string;
  familyName: string;
  title: string;
  influance: number;
  might: number;
  fame: number;
  reputation: string;
  race: string;
  ordinalGeneration: string;
  birthDate: string;
  age: number;

  character: any;
  tempCharacterValue = 1;

  constructor(private http: HttpClient,
              private getOrdinalNumber: GetOrdinalNumberService) { }

  getCharacterInfo() {
    this.http.get(this.baseUrl + this.tempCharacterValue.toString()).subscribe(response => {
      this.character = response;
      this.updateCharacter();
    }, error => {
      console.log(error);
    });
  }

  updateCharacter() {
    if (this.character !== undefined) {
      this.name = this.character.name;
      this.familyName = this.character.familyName;
      this.title = this.character.title;
      this.influance = this.character.influance;
      this.might = this.character.might;
      this.fame = this.character.fame;
      this.reputation = this.character.reputation;
      this.race = this.character.race;
      this.ordinalGeneration = this.getOrdinalNumber.convert(this.character.generation);
      this.birthDate = this.character.birthDate;
      this.age = this.character.age;
    }
  }
}
