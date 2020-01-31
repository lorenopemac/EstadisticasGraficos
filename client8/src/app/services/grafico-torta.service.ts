import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficoTortaService {

  constructor() { }

  getEstadoVivienda(){
    return [{"name":"IniciadA","id":"8","y":60},{"name":"Ejecución","id":"9","y":10},{"name":"Finalizada","id":"11","y":16},{"name":"Entregada","id":"12","y":14}];
  }

  getEstadoInfraestructura(){

  }

  getEstadoProyecto(){

  }

  getEstadoMejoramiento(){
    
  }


}
