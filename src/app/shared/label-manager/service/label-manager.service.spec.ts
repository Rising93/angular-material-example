import { TestBed } from '@angular/core/testing';

import { LabelManagerService } from './label-manager.service';

describe('LabelManagerService', () => {
  let service: LabelManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
