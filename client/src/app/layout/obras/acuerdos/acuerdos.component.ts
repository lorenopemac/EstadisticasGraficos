import {Component, Output, OnInit, Input, EventEmitter, ViewChild, ElementRef} from '@angular/core';

declare let L;
@Component({
  selector: 'app-acuerdos',
  templateUrl: './acuerdos.component.html',
  styleUrls: ['./acuerdos.component.scss']
})
export class AcuerdosComponent implements OnInit {
  // Año
  anios = [];
  selectedAnio: number;


  selectedBoton: String;

  nivel: string;
  division: string;

  constructor(
    //private cursoService: CursoService,
    //private materiaService: MateriaService,
    //private alumnoService : AlumnoService
  ) { }

  ngOnInit(): void {
    this.getAnios();
    const map = L.map('map').setView([-38.95,-68.08],13);
         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
  }

  getAnios() {
    const anio = new Date().getFullYear();
    const limit = anio - 1994;
    for (let i = 0; i <= limit; i++) {
        this.anios.push({
            label: anio - i,
            value: anio - i
          });
    }
  }


}
