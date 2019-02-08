/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetOrdinalNumberService } from './getOrdinalNumber.service';

describe('Service: GetOrdinalNumber', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOrdinalNumberService]
    });
  });

  it('should ...', inject([GetOrdinalNumberService], (service: GetOrdinalNumberService) => {
    expect(service).toBeTruthy();
  }));
});
