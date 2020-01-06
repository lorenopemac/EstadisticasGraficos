import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaNuevasObrasDataSource, TablaNuevasObrasItem } from './tabla-nuevas-obras-datasource';

@Component({
  selector: 'tabla-nuevas-obras',
  templateUrl: './tabla-nuevas-obras.component.html',
  styleUrls: ['./tabla-nuevas-obras.component.css']
})
export class TablaNuevasObrasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TablaNuevasObrasItem>;
  dataSource: TablaNuevasObrasDataSource;

 /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 displayedColumns = ['id', 'Denominacion','Localidad','Sector'];
 
  ngOnInit() {
    this.dataSource = new TablaNuevasObrasDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
