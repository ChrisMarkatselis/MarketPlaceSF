import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Symbol } from '../models/symbol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // private readonly endpointSymbol = 'https://localhost:5001/api/symbols';
  //mock link from json db:
  private readonly endpointSymbol = "http://localhost:3000/symbols";

  constructor(private http: HttpClient) { }

  //here is the service method which will give us the data for every Symbol
  getAllSymbol() {
    return this.http.get<Symbol[]>(this.endpointSymbol);
  }
  
}
