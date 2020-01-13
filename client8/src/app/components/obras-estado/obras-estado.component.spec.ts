import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasEstadoComponent } from './obras-estado.component';

describe('ObrasEstadoComponent', () => {
  let component: ObrasEstadoComponent;
  let fixture: ComponentFixture<ObrasEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrasEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrasEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
