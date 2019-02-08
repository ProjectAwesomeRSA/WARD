/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetLoginStatusService } from './getLoginStatus.service';

describe('Service: GetLoginStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLoginStatusService]
    });
  });

  it('should ...', inject([GetLoginStatusService], (service: GetLoginStatusService) => {
    expect(service).toBeTruthy();
  }));
});
