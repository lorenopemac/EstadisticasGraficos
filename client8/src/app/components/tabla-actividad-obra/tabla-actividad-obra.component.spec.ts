import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TablaActividadObraComponent } from './tabla-actividad-obra.component';

describe('TablaActividadObraComponent', () => {
  let component: TablaActividadObraComponent;
  let fixture: ComponentFixture<TablaActividadObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaActividadObraComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActividadObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
