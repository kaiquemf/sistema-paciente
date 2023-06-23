import { Timestamp } from "rxjs";

export class Pacientes {
  nome: string = "";
  idade: number = 0;
  cpf: string = "";
  profissao: string = "";
  data_cadastro: Timestamp<Date> | undefined;
}
