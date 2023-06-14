import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pacientes } from '../../classes/pacientes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDePacientesService {
  private pacienteUrl: string;
  constructor(private http: HttpClient) {
      this.pacienteUrl = 'http://localhost:8080/pacientes';
   }

   public findAll(): Observable<Pacientes[]> {
    return this.http.get<Pacientes[]>(this.pacienteUrl);
   }

   public save(paciente : Pacientes) {
    return this.http.post<Pacientes>(this.pacienteUrl, paciente);
   }
}
