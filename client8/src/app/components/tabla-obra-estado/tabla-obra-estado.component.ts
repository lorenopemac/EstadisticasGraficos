import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaObraEstadoDataSource, TablaObraEstadoItem } from './tabla-obra-estado-datasource';

@Component({
  selector: 'tabla-obra-estado',
  templateUrl: './tabla-obra-estado.component.html',
  styleUrls: ['./tabla-obra-estado.component.css']
})
export class TablaObraEstadoComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TablaObraEstadoItem>;
  dataSource: TablaObraEstadoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TablaObraEstadoDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
