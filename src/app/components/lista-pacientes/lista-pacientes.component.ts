import { ListaDePacientesService } from '../../services/lista-de-pacientes/lista-de-pacientes.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pacientes } from '../../classes/pacientes';


@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {
  @Input() paciente: any;
  pacientes: Pacientes[] | undefined;
  constructor(private listadePacientes: ListaDePacientesService){}
  
  ngOnInit(): void {
    this.listadePacientes.findAll().subscribe(data => {
      this.pacientes = data;
    })
  }
  refresh(): void {
    window.location.reload();
  }
}
