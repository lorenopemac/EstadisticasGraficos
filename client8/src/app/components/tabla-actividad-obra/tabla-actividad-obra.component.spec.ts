import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActividadObraComponent } from './tabla-actividad-obra.component';

describe('TablaActividadObraComponent', () => {
  let component: TablaActividadObraComponent;
  let fixture: ComponentFixture<TablaActividadObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaActividadObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActividadObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
