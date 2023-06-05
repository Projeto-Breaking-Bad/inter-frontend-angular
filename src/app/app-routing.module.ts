import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraAcessibilidadeComponent } from './components/barra-acessibilidade/barra-acessibilidade.component';
import { GuestEnvironmentComponent } from './user-environments/guest-environment/guest-environment.component';
import { AdminEnvironmentComponent } from './user-environments/admin-environment/admin-environment.component';
import { EmpresaEnvironmentComponent } from './user-environments/empresa-environment/empresa-environment.component';
import { AlunoEnvironmentComponent } from './user-environments/aluno-environment/aluno-environment.component';

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
      { path: 'home', component: BarraAcessibilidadeComponent },
      { path: 'teste', component: BarraAcessibilidadeComponent },
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
