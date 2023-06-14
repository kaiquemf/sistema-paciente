import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { AdicionarpacienteComponent } from './components/adicionar-paciente/adicionarpaciente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaPacientesComponent,
    AdicionarpacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
