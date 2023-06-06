import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backend_api } from '../backend/backend-api';
import { IVaga } from '../interfaces/IVaga';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  api = backend_api.api_link;

  constructor(private http: HttpClient) { }

  retornaTodasVagas() {
    return this.http.get<IVaga[]>(`${this.api}/consultar/vagas`);
  }
}
