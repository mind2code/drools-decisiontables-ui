import { TestBed } from '@angular/core/testing';

import { DroolsService } from './drools.service';

describe('DroolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroolsService = TestBed.get(DroolsService);
    expect(service).toBeTruthy();
  });
});
