import { TestBed } from '@angular/core/testing';

import { PotatosService } from './potatos.service';

describe('PotatosService', () => {
  let service: PotatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
