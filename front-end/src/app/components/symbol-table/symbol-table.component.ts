import { ProjectService } from 'src/app/services/project.service';
import { Symbol } from './../../models/symbol';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-symbol-table',
  templateUrl: './symbol-table.component.html',
  styleUrls: ['./symbol-table.component.css']
})
export class SymbolTableComponent implements OnInit {

  newSymbol: Symbol[] = [];

  selectedRows: any[];
  selectedRowsWL: any[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllSymbol().subscribe( (data) => {
      this.newSymbol = data;
    });

    this.selectedRows = [];
    this.selectedRowsWL = [];

  }

}
