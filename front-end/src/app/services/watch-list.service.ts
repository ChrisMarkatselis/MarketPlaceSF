import { Symbol } from './../models/symbol';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  //private readonly endpointlist = 'https://localhost:5001/api/watchlist/1';
  //mock json server link:
  private readonly endpointlist = "http://localhost:3000/watchlist";

  getSymbols$: Subject<Symbol[]>;

  constructor(private http: HttpClient) {
    this.getSymbols$ = new Subject();
  }

  //method for watchlist and user.id
  //getUserWatchList(user: User): Symbol[] {
  //  return this.http.get<Symbol[]>(this.endpointlist + "/" + user.id)
  //}


  //mock method for watchlist
  getWatchList() {
    return this.http.get<Symbol[]>(this.endpointlist);
  }

  getListSymbols(): Observable<Symbol[]> {
    this.http.get<Symbol[]>(this.endpointlist).subscribe( val => {
      this.getSymbols$.next(val);
    });
    return this.getSymbols$;
  }


  //its not implemented well, yet. We have to fix it with the link which Damianos will tell us. Logical, we will have to transfer the symbol id, so I put selectedSymbol.id at enpoint.
  postWatchList(symbol: Symbol) {
    return this.http.post<Symbol>(this.endpointlist + "/", symbol).subscribe( responseData => {
    });
  }

}
