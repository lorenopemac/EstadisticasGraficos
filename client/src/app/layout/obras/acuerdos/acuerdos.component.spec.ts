import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdosComponent } from './acuerdos.component';

describe('AcuerdosComponent', () => {
  let component: AcuerdosComponent;
  let fixture: ComponentFixture<AcuerdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
