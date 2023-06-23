import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarpacienteComponent } from './adicionarpaciente.component';

describe('AdicionarpacienteComponent', () => {
  let component: AdicionarpacienteComponent;
  let fixture: ComponentFixture<AdicionarpacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarpacienteComponent]
    });
    fixture = TestBed.createComponent(AdicionarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
