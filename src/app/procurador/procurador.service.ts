import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Procurador } from './procurador';

@Injectable()
export class ProcuradorService {

  private apiUrl = 'http://localhost:8080/procuradores';

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get<any []>(this.apiUrl);
  }
}
