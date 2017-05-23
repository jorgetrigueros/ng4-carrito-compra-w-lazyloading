import { TestBed, inject } from '@angular/core/testing';

import { ProductosService } from './productos.service';

describe('ProductosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductosService]
    });
  });

  it('should ...', inject([ProductosService], (service: ProductosService) => {
    expect(service).toBeTruthy();
  }));
});
