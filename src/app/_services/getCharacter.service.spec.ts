/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCharacterService } from './getCharacter.service';

describe('Service: GetCharacter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCharacterService]
    });
  });

  it('should ...', inject([GetCharacterService], (service: GetCharacterService) => {
    expect(service).toBeTruthy();
  }));
});
