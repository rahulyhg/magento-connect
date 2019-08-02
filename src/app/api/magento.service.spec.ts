import { TestBed } from '@angular/core/testing';

import { MagentoService } from './magento.service';

describe('MagentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagentoService = TestBed.get(MagentoService);
    expect(service).toBeTruthy();
  });
});
