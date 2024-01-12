import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  // quando for requisitado somente a url sem uri será direcionado para o componente de listar pensamentos
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' },
  { path: 'criarPensamento', component: CriarPensamentoComponent },
  { path: 'listarPensamento', component: ListarPensamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
