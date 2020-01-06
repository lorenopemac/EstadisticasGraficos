import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaActividadesItem {
  Denominacion: string;
  id: number;
  Localidad: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaActividadesItem[] = [
  {id: 1, Denominacion: 'Hydrogen',Localidad:'Neuquén'},
  {id: 2, Denominacion: 'Helium',Localidad:'Añelo'},
  {id: 3, Denominacion: 'Lithium',Localidad:'Plottier'},
  {id: 4, Denominacion: 'Beryllium',Localidad:'Neuquén'},
  {id: 5, Denominacion: 'Boron',Localidad:'Neuquén'},
  {id: 6, Denominacion: 'Carbon',Localidad:'Neuquén'},
  {id: 7, Denominacion: 'Nitrogen',Localidad:'Plottier'},
  {id: 8, Denominacion: 'Oxygen',Localidad:'Plottier'},
  {id: 9, Denominacion: 'Fluorine',Localidad:'Plottier'},
  {id: 10, Denominacion: 'Neon',Localidad:'Plottier'},
  {id: 11, Denominacion: 'Sodium',Localidad:'Añelo'},
  {id: 12, Denominacion: 'Magnesium',Localidad:'Añelo'},
  {id: 13, Denominacion: 'Aluminum',Localidad:'Añelo'},
  {id: 14, Denominacion: 'Silicon',Localidad:'Añelo'},
  {id: 15, Denominacion: 'Phosphorus',Localidad:'Añelo'},
  {id: 16, Denominacion: 'Sulfur',Localidad:'Añelo'},
  {id: 17, Denominacion: 'Chlorine',Localidad:'Añelo'},
  {id: 18, Denominacion: 'Argon',Localidad:'Añelo'},
  {id: 19, Denominacion: 'Potassium',Localidad:'Añelo'},
  {id: 20, Denominacion: 'Calcium',Localidad:'Añelo'},
];

/**
 * Data source for the TablaActividades view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaActividadesDataSource extends DataSource<TablaActividadesItem> {
  data: TablaActividadesItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TablaActividadesItem[]> {
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
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaActividadesItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaActividadesItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Denominacion': return compare(a.Denominacion, b.Denominacion, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'Localidad': return compare(a.Denominacion, b.Denominacion, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Denominacion columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
