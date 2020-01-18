import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'obras-estado',
  templateUrl: './obras-estado.component.html',
  styleUrls: ['./obras-estado.component.css']
})
export class ObrasEstadoComponent implements OnInit {
 
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Acuerdo']
  },  {
    letter: 'E',
    names: ['Ejecución', 'Entrega']
  },{
    letter: 'F',
    names: ['Finalizada']
  },{
    letter: 'I',
    names: ['Iniciada']
  } ];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
