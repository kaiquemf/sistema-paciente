import { FormularioDePacienteService } from 'src/app/services/formulario-de-paciente.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-paciente',
  templateUrl: './adicionarpaciente.component.html',
  styleUrls: ['./adicionarpaciente.component.scss']
})
export class AdicionarpacienteComponent {
  constructor(private formularioService: FormularioDePacienteService) {}
  nome: string = '';
  idade: number | undefined;
  cpf: string = '';
  profissao: string = '';

  enviarFormulario() {
    const dadosFormulario = {
      nome:      this.nome,
      idade:     this.idade,
      cpf:       this.cpf,
      profissao: this.profissao
    }
    this.formularioService.salvarDados(dadosFormulario).subscribe(
      response => {
        console.log("Dados salvos com sucesso: " + response);
        location.reload();
      },
      erro => {
        console.error("Erro ao salvar dados do paciente" + erro);
      }
    )
  }

}
