import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaActividadObraItem {
  accion: string; 
  indice: number;
  fecha: Date;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaActividadObraItem[] = [
  {indice: 1, accion: 'Certificación mes Diciembre',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 2, accion: 'Certificación mes Noviembre',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 3, accion: 'Adicional',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 4, accion: 'Ampliación de plazos',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 5, accion: 'Paralización',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 6, accion: 'Carbon',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 7, accion: 'Nitrogen',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 8, accion: 'Oxygen',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 9, accion: 'Fluorine',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 10, accion: 'Neon',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 11, accion: 'Sodium',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 12, accion: 'Magnesium',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 13, accion: 'Aluminum',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 14, accion: 'Silicon',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 15, accion: 'Phosphorus',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 16, accion: 'Sulfur',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 17, accion: 'Chlorine',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 18, accion: 'Argon',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 19, accion: 'Potassium',fecha: new Date(Date.UTC(2019, 5, 11))},
  {indice: 20, accion: 'Calcium',fecha: new Date(Date.UTC(2019, 5, 11))},
];

/**
 * Data source for the TablaActivindiceadObra view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaActividadObraDataSource extends DataSource<TablaActividadObraItem> {
  data: TablaActividadObraItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablaActividadObraItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-sindicee). If you're using server-sindicee pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaActividadObraItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-sindicee). If you're using server-sindicee sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaActividadObraItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'accion': return compare(a.accion, b.accion, isAsc);
        case 'indice': return compare(+a.indice, +b.indice, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example indice/accion columns (for client-sindicee sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
