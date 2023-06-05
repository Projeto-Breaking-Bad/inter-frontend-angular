import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backend_api } from '../backend/backend-api';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  api = backend_api.api_link;

  constructor(private http: HttpClient) { }

  consultaAutoridadeCliente() {
    return this.http.get<String>(`${this.api}/consultar/autoridade/cliente`);
  }
}
