import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private Http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.Http.get('./assets/data/data.json');
  }
}
