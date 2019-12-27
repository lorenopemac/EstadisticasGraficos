import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormComponent } from './finanzas.component'
import { FormModule } from './finanzas.module'

describe('FormComponent', () => {
  let component: FormComponent
  let fixture: ComponentFixture<FormComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          FormModule,
          BrowserAnimationsModule,
          RouterTestingModule,
         ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})