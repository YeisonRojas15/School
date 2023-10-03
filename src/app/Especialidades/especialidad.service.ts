import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  private urlBase = 'http://localhost:8000/api/especialidad';
  private httpHeader:HttpHeaders

  constructor(private Http:HttpClient) {
    this.httpHeader = new HttpHeaders();
    this.httpHeader.append('Content-Type', 'application/json');
   }

  getAll() {
    return this.Http.get<any>(this.urlBase,{ headers :this.httpHeader })
  }
}
