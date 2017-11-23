import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Procurador } from './procurador';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProcuradorService {

  private apiUrl = 'http://localhost:8080/procuradores';

  constructor(
    private http: Http,
    private httpClient: HttpClient
  ) { }

  buscarTodos() {
    return this.httpClient.get<Procurador[]>(this.apiUrl);
      // .catch((erro: any) => Observable.throw(erro.error || 'Erro no Servidor'));
  }

  salvar(procurador: Procurador) {
    return this.httpClient.post<Procurador>(this.apiUrl, procurador);
    // .catch((erro: any) => Observable.throw(erro.error || 'Erro no Servidor'));
  }

  atualizar(procurador: Procurador) {
    return this.httpClient.put<Procurador>(this.apiUrl, procurador);
    // .catch((erro: any) => Observable.throw(erro.error || 'Erro no Servidor'));
  }

  excluir(id: number) {
    return this.httpClient.delete<boolean>(`${this.apiUrl}/${id}`);
     // .catch((erro: any) => Observable.throw(erro.error || 'Erro no Servidor'));
  }

  porId(id: number) {
    return this.httpClient.get<Procurador>(`${this.apiUrl}/${id}`);
      // .catch((erro: any) => Observable.throw(erro.error || 'Erro no Servidor'));
  }
}
