import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Symbol } from '../models/symbol';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly endpointSymbol = 'http://localhost:5000/api/symbol';
  constructor(private http: HttpClient) { }

  //here is the service method which will give us the data for every Symbol
  getAllSymbol() {
    this.http.get<Symbol[]>(this.endpointSymbol); 
  }
}
