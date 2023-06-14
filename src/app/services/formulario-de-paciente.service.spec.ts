import { TestBed } from '@angular/core/testing';

import { FormularioDePacienteService } from './formulario-de-paciente.service';

describe('FormularioDePacienteService', () => {
  let service: FormularioDePacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioDePacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
