import { TestBed } from '@angular/core/testing';

import { FooodservService } from './fooodserv.service';

describe('FooodservService', () => {
  let service: FooodservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooodservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
