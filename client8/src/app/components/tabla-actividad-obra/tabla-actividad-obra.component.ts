import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaActividadObraDataSource, TablaActividadObraItem } from './tabla-actividad-obra-datasource';

@Component({
  selector: 'tabla-actividad-obra',
  templateUrl: './tabla-actividad-obra.component.html',
  styleUrls: ['./tabla-actividad-obra.component.css']
})
export class TablaActividadObraComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TablaActividadObraItem>;
  dataSource: TablaActividadObraDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['indice', 'accion','fecha'];

  ngOnInit() {
    this.dataSource = new TablaActividadObraDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
