import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDispersionComponent } from './grafico-dispersion.component';

describe('GraficoDispersionComponent', () => {
  let component: GraficoDispersionComponent;
  let fixture: ComponentFixture<GraficoDispersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDispersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDispersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
