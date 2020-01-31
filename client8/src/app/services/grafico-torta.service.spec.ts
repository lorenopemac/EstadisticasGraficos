import { TestBed } from '@angular/core/testing';

import { GraficoTortaService } from './grafico-torta.service';

describe('GraficoTortaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraficoTortaService = TestBed.get(GraficoTortaService);
    expect(service).toBeTruthy();
  });
});
