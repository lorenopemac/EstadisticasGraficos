import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLineaTiempoComponent } from './grafico-linea-tiempo.component';

describe('GraficoLineaTiempoComponent', () => {
  let component: GraficoLineaTiempoComponent;
  let fixture: ComponentFixture<GraficoLineaTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLineaTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLineaTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
