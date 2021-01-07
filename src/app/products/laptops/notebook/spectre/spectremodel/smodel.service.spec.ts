import { TestBed } from '@angular/core/testing';

import { SmodelService } from './smodel.service';

describe('SmodelService', () => {
  let service: SmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
