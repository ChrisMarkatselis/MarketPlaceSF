import { Symbol } from './../models/symbol';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  private readonly endpointlist = 'https://localhost:5001/api/watchlist/1';

  getSymbols$: Subject<Symbol[]>;

  constructor(private http: HttpClient) {
    this.getSymbols$ = new Subject();
  }

  getWatchList() {
    return this.http.get<Symbol[]>(this.endpointlist + "/1");
  }

  getListSymbols(): Observable<Symbol[]> {
    this.http.get<Symbol[]>(this.endpointlist).subscribe( val => {
      this.getSymbols$.next(val);
    });
    return this.getSymbols$;
  }


  //its not implemented well, yet. We have to fix it with the link which Damianos will tell us. Logical, we will have to transfer the symbol id, so I put selectedSymbol.id at enpoint.
  postWatchList() {
    return this.http.post<Symbol[]>(this.endpointlist);
  }
}
