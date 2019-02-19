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
  birthDate: string;
  age: number;

  character: any = null;
  tempCharacterValue = 1;

  constructor(private http: HttpClient,
              private getOrdinalNumber: GetOrdinalNumberService) { }

  getCharacterInfo() {
    this.http.get('http://localhost:5000/api/characters/' + this.tempCharacterValue.toString()).subscribe(response => {
      this.character = response;
      this.updateCharacter();
    }, error => {
      console.log(error);
    });
  }

  updateCharacter() {
    if (this.character != null) {
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
