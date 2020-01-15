import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaObraEstadosItem {
  nroexpediente: string;
  denominacion: string;
  localidad: string;
  organismo: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaObraEstadosItem[] = [
  {nroexpediente: '1' , denominacion: 'PINTURA EN organismo GASTRONOMICO Bº MELIPAL',localidad:'Neuquén',organismo:'ADUS'},
  {nroexpediente: '2' , denominacion: 'INFORME URBANO AMBIENTAL LOTEO CONQUISTADORES DEL DESIERTO- NEUQUEN CAPITAL',localidad:'Añelo',organismo:'ADUS'},
  {nroexpediente: '3' , denominacion: 'MEJORAMIENTO HABITACIONAL PARA OÑATE MIRNA ISABEL - CIUDAD DE NEUQUÉN CAPITAL ',localidad:'Plottier',organismo:'ADUS'},
  {nroexpediente: '4' , denominacion: 'MÓDULO TIPO I PARA TORRES ADOLFO FABIAN - CIUDAD DE NEUQUÉN CAPITAL ',localidad:'Neuquén',organismo:'ADUS'},
  {nroexpediente: '5' , denominacion: 'MÓDULO TIPO II PARA POBLETE CONTRERAS MARCELO GUSTAVO - CIUDAD DE NEUQUÉN CAPITAL ',localidad:'Neuquén',organismo:'ADUS'},
  {nroexpediente: '6' , denominacion: 'UN AZUD Y EXCAVACIÓN DE CANALES EN BARRIOS 2 DE MAYO Y 7 DE MAYO - NEUQUÉN CAPITAL ',localidad:'Neuquén',organismo:'ADUS'},
  {nroexpediente: '7' , denominacion: 'PINTURA EN MZS D, 17 Y 19 Bº VILLA CEFERINO Y MZAS F Y G Bº EL PROGRESO- NEUQUEN CAPITAL',localidad:'Plottier',organismo:'IPVU'},
  {nroexpediente: '8' , denominacion: '12 VIVIVIENDAS EN TRICAO MALAL- COOP. CORDILLERA DEL VIENTO LTDA - ADICIONAL',localidad:'Plottier',organismo:'IPVU'},
  {nroexpediente: '9' , denominacion: 'PINTURA EN MZS D, 17 Y 19 Bº VILLA CEFERINO Y MZAS F Y G Bº EL PROGRESO- NEUQUEN CAPITAL',localidad:'Plottier',organismo:'IPVU'},
  {nroexpediente: '10', denominacion: 'Neon',localidad:'Plottier',organismo:'IPVU'},
  {nroexpediente: '11', denominacion: 'Sodium',localidad:'Añelo',organismo:'IPVU'},
  {nroexpediente: '12', denominacion: 'Magnesium',localidad:'Añelo',organismo:'IPVU'},
  {nroexpediente: '13', denominacion: 'Aluminum',localidad:'Añelo',organismo:'IPVU'},
  {nroexpediente: '14', denominacion: 'Silicon',localidad:'Añelo',organismo:'Cooperativas'},
  {nroexpediente: '15', denominacion: 'Phosphorus',localidad:'Añelo',organismo:'Regularización'},
  {nroexpediente: '16', denominacion: 'Sulfur',localidad:'Añelo',organismo:'Regularización'},
  {nroexpediente: '17', denominacion: 'Chlorine',localidad:'Añelo',organismo:'Regularización'},
  {nroexpediente: '18', denominacion: 'Argon',localidad:'Añelo',organismo:'Regularización'},
  {nroexpediente: '19', denominacion: 'Potassium',localidad:'Añelo',organismo:'Regularización'},
  {nroexpediente: '20', denominacion: 'Calcium',localidad:'Añelo',organismo:'Regularización'},
];

/**
 * Data source for the TablaObraEstados view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaObraEstadosDataSource extends DataSource<TablaObraEstadosItem> {
  data: TablaObraEstadosItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TablaObraEstadosItem[]> {
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
   * Paginate the data (client-snroexpedientee). If you're using server-snroexpedientee pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaObraEstadosItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-snroexpedientee). If you're using server-snroexpedientee sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaObraEstadosItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.denominacion, b.denominacion, isAsc);
        case 'localidad': return compare(a.localidad, b.localidad, isAsc);
        case 'organismo': return compare(a.organismo, b.organismo, isAsc);
        case 'nroexpediente': return compare(a.nroexpediente, b.nroexpediente, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example nroexpediente/Name columns (for client-snroexpedientee sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
