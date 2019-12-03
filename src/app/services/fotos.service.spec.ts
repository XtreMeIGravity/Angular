import { TestBed } from '@angular/core/testing';

import { fotosService } from './fotos.service';

describe('FotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: fotosService = TestBed.get(fotosService);
    expect(service).toBeTruthy();
  });
});
