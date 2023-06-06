import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraAcessibilidadeComponent } from './components/barra-acessibilidade/barra-acessibilidade.component';
import { AdminEnvironmentComponent } from './admin/admin-environment/admin-environment.component';
import { AlunoEnvironmentComponent } from './aluno/aluno-environment/aluno-environment.component';
import { EmpresaEnvironmentComponent } from './empresa/empresa-environment/empresa-environment.component';
import { GuestEnvironmentComponent } from './guest/guest-environment/guest-environment.component';
import { HomeGuestComponent } from './guest/home-guest/home-guest.component';

const routes: Routes = [
  {
    path: 'a', component: AdminEnvironmentComponent, children: [
      { path: 'home', component: BarraAcessibilidadeComponent },
      { path: 'teste', component: BarraAcessibilidadeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
    ]
  },
  {
    path: 'c', component: EmpresaEnvironmentComponent, children: [
      { path: 'home', component: BarraAcessibilidadeComponent },
      { path: 'teste', component: BarraAcessibilidadeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
    ]
  },
  {
    path: 's', component: AlunoEnvironmentComponent, children: [
      { path: 'home', component: BarraAcessibilidadeComponent },
      { path: 'teste', component: BarraAcessibilidadeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
    ]
  },
  {
    path: '', component: GuestEnvironmentComponent, children: [
      { path: 'home', component: HomeGuestComponent },
      { path: 'teste', component: BarraAcessibilidadeComponent },
      { path: 'vagas', component: BarraAcessibilidadeComponent },
      { path: 'vagas/:id', component: BarraAcessibilidadeComponent },
      { path: 'cadastro/aluno', component: BarraAcessibilidadeComponent },
      { path: 'cadastro/empresa', component: BarraAcessibilidadeComponent },
      { path: 'login', component: BarraAcessibilidadeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
