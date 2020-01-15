import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaObraEstadosDataSource, TablaObraEstadosItem } from './tabla-obra-estados-datasource';

@Component({
  selector: 'tabla-obra-estados',
  templateUrl: './tabla-obra-estados.component.html',
  styleUrls: ['./tabla-obra-estados.component.css']
})
export class TablaObraEstadosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TablaObraEstadosItem>;
  dataSource: TablaObraEstadosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['denominacion', 'localidad', 'nroexpediente', 'organismo','actions'];

  ngOnInit() {
    this.dataSource = new TablaObraEstadosDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
