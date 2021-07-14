import { TestBed } from '@angular/core/testing';

import { MvolaService } from './mvola.service';

describe('MvolaService', () => {
  let service: MvolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
