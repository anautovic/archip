import { TestBed } from '@angular/core/testing';

import { TeleoperateurService } from './teleoperateur.service';

describe('TeleoperateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeleoperateurService = TestBed.get(TeleoperateurService);
    expect(service).toBeTruthy();
  });
});
