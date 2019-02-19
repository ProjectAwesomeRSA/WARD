/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetWorldFactorsService } from './getWorldFactors.service';

describe('Service: GetWorldFactors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWorldFactorsService]
    });
  });

  it('should ...', inject([GetWorldFactorsService], (service: GetWorldFactorsService) => {
    expect(service).toBeTruthy();
  }));
});
