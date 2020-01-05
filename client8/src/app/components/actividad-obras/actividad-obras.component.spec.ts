import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadObrasComponent } from './actividad-obras.component';

describe('ActividadObrasComponent', () => {
  let component: ActividadObrasComponent;
  let fixture: ComponentFixture<ActividadObrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadObrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
