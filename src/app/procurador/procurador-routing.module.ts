import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcuradorListaComponent } from './procurador-lista/procurador-lista.component';
import { ProcuradorFormComponent } from './procurador-form/procurador-form.component';

const routes: Routes = [
  { path: 'procuradores', component: ProcuradorListaComponent },
  { path: 'procuradores/criar', component: ProcuradorFormComponent },
  { path: 'procuradores/editar/:id', component: ProcuradorFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcuradorRoutingModule { }
