import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormularioDePacienteService {
  private formularioUrl: string;
  constructor(private http: HttpClient) {
    this.formularioUrl = 'http://localhost:8080/pacientes';
   }

   public salvarDados(dados: any): Observable<any> {
      return this.http.post<any>(this.formularioUrl, dados)
   }

}
