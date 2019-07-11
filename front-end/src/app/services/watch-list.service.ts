import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Symbol } from '../models/symbol';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private readonly endpointlist = 'https://localhost:5001/api/watchlist';

  constructor(private http: HttpClient) { }

  getWatchList() {
    return this.http.get<Symbol[]>(this.endpointlist);
  }

}
