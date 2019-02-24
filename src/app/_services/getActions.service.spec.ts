/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetActionsService } from './getActions.service';

describe('Service: GetActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetActionsService]
    });
  });

  it('should ...', inject([GetActionsService], (service: GetActionsService) => {
    expect(service).toBeTruthy();
  }));
});
