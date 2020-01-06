import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaNuevasObrasItem {
  Denominacion: string;
  id: number;
  Localidad: string;
  Sector: string;
}

// TODO: replace this with real data from your application ACA VA LA DATA DE LA BD
const EXAMPLE_DATA: TablaNuevasObrasItem[] = [
  {id: 1, Denominacion: 'PINTURA EN Sector GASTRONOMICO Bº MELIPAL',Localidad:'Neuquén',Sector:'ADUS'},
  {id: 2, Denominacion: 'INFORME URBANO AMBIENTAL LOTEO CONQUISTADORES DEL DESIERTO- NEUQUEN CAPITAL',Localidad:'Añelo',Sector:'ADUS'},
  {id: 3, Denominacion: 'MEJORAMIENTO HABITACIONAL PARA OÑATE MIRNA ISABEL - CIUDAD DE NEUQUÉN CAPITAL ',Localidad:'Plottier',Sector:'ADUS'},
  {id: 4, Denominacion: 'MÓDULO TIPO I PARA TORRES ADOLFO FABIAN - CIUDAD DE NEUQUÉN CAPITAL ',Localidad:'Neuquén',Sector:'ADUS'},
  {id: 5, Denominacion: 'MÓDULO TIPO II PARA POBLETE CONTRERAS MARCELO GUSTAVO - CIUDAD DE NEUQUÉN CAPITAL ',Localidad:'Neuquén',Sector:'ADUS'},
  {id: 6, Denominacion: 'UN AZUD Y EXCAVACIÓN DE CANALES EN BARRIOS 2 DE MAYO Y 7 DE MAYO - NEUQUÉN CAPITAL ',Localidad:'Neuquén',Sector:'ADUS'},
  {id: 7, Denominacion: 'PINTURA EN MZS D, 17 Y 19 Bº VILLA CEFERINO Y MZAS F Y G Bº EL PROGRESO- NEUQUEN CAPITAL',Localidad:'Plottier',Sector:'IPVU'},
  {id: 8, Denominacion: '12 VIVIVIENDAS EN TRICAO MALAL- COOP. CORDILLERA DEL VIENTO LTDA - ADICIONAL',Localidad:'Plottier',Sector:'IPVU'},
  {id: 9, Denominacion: 'PINTURA EN MZS D, 17 Y 19 Bº VILLA CEFERINO Y MZAS F Y G Bº EL PROGRESO- NEUQUEN CAPITAL',Localidad:'Plottier',Sector:'IPVU'},
  {id: 10, Denominacion: 'Neon',Localidad:'Plottier',Sector:'IPVU'},
  {id: 11, Denominacion: 'Sodium',Localidad:'Añelo',Sector:'IPVU'},
  {id: 12, Denominacion: 'Magnesium',Localidad:'Añelo',Sector:'IPVU'},
  {id: 13, Denominacion: 'Aluminum',Localidad:'Añelo',Sector:'IPVU'},
  {id: 14, Denominacion: 'Silicon',Localidad:'Añelo',Sector:'Cooperativas'},
  {id: 15, Denominacion: 'Phosphorus',Localidad:'Añelo',Sector:'Regularización'},
  {id: 16, Denominacion: 'Sulfur',Localidad:'Añelo',Sector:'Regularización'},
  {id: 17, Denominacion: 'Chlorine',Localidad:'Añelo',Sector:'Regularización'},
  {id: 18, Denominacion: 'Argon',Localidad:'Añelo',Sector:'Regularización'},
  {id: 19, Denominacion: 'Potassium',Localidad:'Añelo',Sector:'Regularización'},
  {id: 20, Denominacion: 'Calcium',Localidad:'Añelo',Sector:'Regularización'},
];

/**
 * Data source for the TablaActividades view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaNuevasObrasDataSource extends DataSource<TablaNuevasObrasItem> {
  data: TablaNuevasObrasItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TablaNuevasObrasItem[]> {
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
  private getPagedData(data: TablaNuevasObrasItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaNuevasObrasItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'desc';
      switch (this.sort.active) {
        case 'Denominacion': return compare(a.Denominacion, b.Denominacion, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'Localidad': return compare(a.Denominacion, b.Denominacion, isAsc);
        case 'Sector': return compare(a.Sector, b.Sector, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Denominacion columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
