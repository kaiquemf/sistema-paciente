import { TestBed } from '@angular/core/testing';

import { ListaDePacientesService } from './lista-de-pacientes.service';

describe('ListaDePacientesService', () => {
  let service: ListaDePacientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDePacientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
