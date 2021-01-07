import { TestBed } from '@angular/core/testing';

import { EmodelService } from './emodel.service';

describe('EmodelService', () => {
  let service: EmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
