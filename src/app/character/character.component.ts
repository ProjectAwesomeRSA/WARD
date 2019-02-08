import { Component, OnInit } from '@angular/core';
import { GetCharacterService } from '../_services/getCharacter.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(protected getCharacter: GetCharacterService) { }

  ngOnInit() {
  }
}
