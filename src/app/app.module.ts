import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraAcessibilidadeComponent } from './components/barra-acessibilidade/barra-acessibilidade.component';
import { GuestEnvironmentComponent } from './guest/guest-environment/guest-environment.component';
import { AlunoEnvironmentComponent } from './aluno/aluno-environment/aluno-environment.component';
import { AdminEnvironmentComponent } from './admin/admin-environment/admin-environment.component';
import { EmpresaEnvironmentComponent } from './empresa/empresa-environment/empresa-environment.component';
import { NavbarGuestComponent } from './guest/navbar-guest/navbar-guest.component';
import { NavbarAlunoComponent } from './aluno/navbar-aluno/navbar-aluno.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { NavbarEmpresaComponent } from './empresa/navbar-empresa/navbar-empresa.component';
import { SidebarGuestComponent } from './guest/sidebar-guest/sidebar-guest.component';
import { SidebarAlunoComponent } from './aluno/sidebar-aluno/sidebar-aluno.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { SidebarEmpresaComponent } from './empresa/sidebar-empresa/sidebar-empresa.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeGuestComponent } from './guest/home-guest/home-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraAcessibilidadeComponent,
    AdminEnvironmentComponent,
    AlunoEnvironmentComponent,
    EmpresaEnvironmentComponent,
    GuestEnvironmentComponent,
    NavbarGuestComponent,
    NavbarAlunoComponent,
    NavbarAdminComponent,
    NavbarEmpresaComponent,
    SidebarAlunoComponent,
    SidebarAdminComponent,
    SidebarGuestComponent,
    SidebarEmpresaComponent,
    FooterComponent,
    HomeGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
