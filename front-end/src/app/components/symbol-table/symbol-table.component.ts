import { ProjectService } from 'src/app/services/project.service';
import { Symbol } from './../../models/symbol';
import { Component, OnInit } from '@angular/core';
import { WatchListService } from 'src/app/services/watch-list.service';


@Component({
  selector: 'app-symbol-table',
  templateUrl: './symbol-table.component.html',
  styleUrls: ['./symbol-table.component.css']
})
export class SymbolTableComponent implements OnInit {

  newSymbol: Symbol[] = [];
  existedSymbols: Symbol = {
    id: null,
    symbol: '',
    description: '',
    currency: '',
    stockExchangeLong: ''
  };

  cols: any[];

  selectedSymbols: any[];
  selectedRowsWL: any[];

  constructor(private projectService: ProjectService, private watchListService: WatchListService) { }

  ngOnInit() {
    this.projectService.getAllSymbol().subscribe( (data) => {
      this.newSymbol = data;

      this.cols = [
        { field: 'symbol', header: 'Symbol'},
        { field: 'description', header: 'Description'},
        { field: 'currency', header: 'Currency'},
        { field: 'stockExchangeLong', header: 'StockExchangeLong'},
      ]
    });

    this.selectedSymbols = [];
    this.selectedRowsWL = [];

  }


  addSymbol(newSymbol) {
    console.log(newSymbol.symbol);
    let count: number;    

    // if (this.existedSymbols >= 5) {
    //   alert( 'You can not put another symbol at your watchlist, remove one first! ');
    // } else 
    // if (( this.selectedSymbols.findIndex(s => s.id === newSymbol.id) > -1) ) 
    if (newSymbol === this.existedSymbols)
    {
      console.log( 'Trying to add an existing symbol' );
    } else 
    {
      this.existedSymbols.id = newSymbol.id;
      this.existedSymbols.symbol = newSymbol.symbol;
      this.existedSymbols.description = newSymbol.description;
      this.existedSymbols.currency = newSymbol.currency;
      this.existedSymbols.stockExchangeLong = newSymbol.stockExchangeLong;

      console.log(this.existedSymbols);
      this.watchListService.postWatchList(this.existedSymbols);
    }

  };

}
