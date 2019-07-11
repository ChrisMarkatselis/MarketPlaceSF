import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Symbol } from '../models/symbol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpointSymbol = 'https://localhost:5001/api/symbols';

  constructor(private http: HttpClient) { }

  //here is the service method which will give us the data for every Symbol
  getAllSymbol() {
    return this.http.get<Symbol[]>(this.endpointSymbol);
  }
}
