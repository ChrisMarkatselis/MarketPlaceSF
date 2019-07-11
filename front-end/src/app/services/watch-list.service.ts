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

  //its not implemented well, yet. We have to fix it with the link which Damianos will tell us. Logical, we will have to transfer the symbol id, so I put selectedSymbol.id at enpoint.
  postWatchList(selectedSymbol: Symbol) {
    return this.http.post<Symbol[]>(this.endpointlist + '/', selectedSymbol.id);
  }
}
