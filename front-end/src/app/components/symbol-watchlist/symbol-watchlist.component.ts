import { WatchListService } from './../../services/watch-list.service';
import { Symbol } from './../../models/symbol';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-symbol-watchlist',
  templateUrl: './symbol-watchlist.component.html',
  styleUrls: ['./symbol-watchlist.component.css']
})
export class SymbolWatchlistComponent implements OnInit {


  oldWatchList: Symbol[];

  constructor(private watchListService: WatchListService) { }


  ngOnInit() {
    this.watchListService.getWatchList().subscribe( (watchlistSymbols) => {
      this.oldWatchList = watchlistSymbols;
    });
  }

}
