import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcuradorRoutingModule } from './procurador-routing.module';
import { ProcuradorListaComponent } from './procurador-lista/procurador-lista.component';
import { ProcuradorFormComponent } from './procurador-form/procurador-form.component';
import { ProcuradorService } from './procurador.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProcuradorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProcuradorService],
  declarations: [ProcuradorListaComponent, ProcuradorFormComponent]
})
export class ProcuradorModule { }
