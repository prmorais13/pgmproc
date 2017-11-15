import { Component, OnInit} from '@angular/core';

import { Procurador } from '../procurador';
import { ProcuradorService } from '../procurador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procurador-lista',
  templateUrl: './procurador-lista.component.html',
  styleUrls: ['./procurador-lista.component.css'],
})
export class ProcuradorListaComponent implements OnInit {

  private procuradores: Procurador[];

  constructor(
    private procuradorService: ProcuradorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTodosProcuradores();
  }

  getTodosProcuradores() {
    this.procuradorService.buscarTodos()
      .subscribe(
        dados => this.procuradores = dados,
        er => console.log(er),
        () => console.log(this.procuradores)
      );
  }

  criarProcurador() {
    this.router.navigate(['/procuradores/criar']);
  }

  editar(procurador: Procurador) {
    if (procurador) {
      this.router.navigate(['/procuradores/editar/', procurador.id]);
    }
  }

  excluir(procurador: Procurador) {
    if (procurador) {
      console.log('Excluir procurador ' + procurador.id);
    }
  }
}
