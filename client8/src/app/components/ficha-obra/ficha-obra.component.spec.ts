import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaObraComponent } from './ficha-obra.component';

describe('FichaObraComponent', () => {
  let component: FichaObraComponent;
  let fixture: ComponentFixture<FichaObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
