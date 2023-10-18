import { TestBed } from '@angular/core/testing';

import { ProfesorMateriaGradoService } from './profesor-materia-grado.service';

describe('ProfesorMateriaGradoService', () => {
  let service: ProfesorMateriaGradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorMateriaGradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
