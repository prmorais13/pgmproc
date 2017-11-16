import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Procurador } from './procurador';

@Injectable()
export class ProcuradorService {

  private apiUrl = 'http://localhost:8080/procuradores';

  constructor(private http: Http) { }

  buscarTodos(): Observable<Procurador[]> {
    // return this.http.get<any []>(this.apiUrl);
    return this.http.get(this.apiUrl)
      .map(r => r.json())
      .catch((erro: any) => Observable.throw(erro.json().error || 'Erro no Servidor'));
  }

  salvar(procurador: Procurador): Observable<Procurador> {
    return this.http.post(this.apiUrl, procurador)
    .map(r => r.json())
    .catch((erro: any) => Observable.throw(erro.json().error || 'Erro no Servidor'));
  }

  porId(id: number): Observable<Procurador> {
    return this.http.get(`${this.apiUrl}/${id}`)
    .map(r => r.json())
    .catch((erro: any) => Observable.throw(erro.json().error || 'Erro no Servidor'));
  }
}
