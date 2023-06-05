import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraAcessibilidadeComponent } from './components/barra-acessibilidade/barra-acessibilidade.component';
import { AlunoEnvironmentComponent } from './user-environments/aluno-environment/aluno-environment.component';
import { EmpresaEnvironmentComponent } from './user-environments/empresa-environment/empresa-environment.component';
import { AdminEnvironmentComponent } from './user-environments/admin-environment/admin-environment.component';
import { GuestEnvironmentComponent } from './user-environments/guest-environment/guest-environment.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraAcessibilidadeComponent,
    AdminEnvironmentComponent,
    AlunoEnvironmentComponent,
    EmpresaEnvironmentComponent,
    GuestEnvironmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
