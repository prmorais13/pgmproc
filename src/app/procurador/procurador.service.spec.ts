import { TestBed, inject } from '@angular/core/testing';

import { ProcuradorService } from './procurador.service';

describe('ProcuradorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcuradorService]
    });
  });

  it('should be created', inject([ProcuradorService], (service: ProcuradorService) => {
    expect(service).toBeTruthy();
  }));
});
