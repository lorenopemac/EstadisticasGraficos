import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaObraEstadosDataSource, TablaObraEstadosItem } from './tabla-obra-estados-datasource';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


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

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Acuerdo']
  },  {
    letter: 'E',
    names: ['Ejecución', 'Entrega']
  },{
    letter: 'F',
    names: ['Finalizada']
  },{
    letter: 'I',
    names: ['Iniciada']
  } ];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['denominacion', 'localidad', 'nroexpediente', 'organismo'];

  ngOnInit() {
    /**TABLA DE OBRAS */
    this.dataSource = new TablaObraEstadosDataSource();
    /** FIN TABLA DE OBRAS */
    /** FILTRO */
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    /** FIN FILTRO */
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  private _filterGroup(value: string): StateGroup[] {
    /** FILTRO */
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
